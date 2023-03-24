<template>
  <section class="">
    <v-row no-gutters>
      <v-col cols="12">
        <validation-observer ref="observer" v-slot="{ invalid }">
          <v-form
            id="form-tax-data"
            @submit.prevent="sendForm"
          >
            <v-row>
              <v-col cols="12" md="6" class="py-0">
                <validation-provider
                  v-slot="{ errors }"
                  name="La razón social"
                  rules="requiredF"
                >
                  <v-text-field
                    required
                    :error-messages="errors"
                    height="37px"
                    label="Razón social"
                    ref="name"
                    type="text"
                    v-model.trim="form.name"
                  />
                </validation-provider>
              </v-col>

              <v-col cols="12" md="6" class="py-0">
                <validation-provider
                  v-slot="{ errors }"
                  name="El RFC"
                  rules="required"
                >
                  <v-text-field
                    required
                    label="RFC"
                    :error-messages="errors"
                    height="37px"
                    type="text"
                    ref="vat"
                    v-model.trim="form.vat"
                  />
                </validation-provider>
              </v-col>

              <v-col class="py-0" cols="12">
                <validation-provider
                  v-slot="{ errors }"
                  name="El uso de CFDI"
                  rules="required"
                >
                  <v-select
                    v-model="form.cfdi_usage"
                    height="37px"
                    ref="cfdi_usage"
                    :error-messages="errors"
                    label="Uso de CFDI"
                    :items="$store.state.identity.cfdiUsageOptions"
                    item-text="name"
                    item-value="id"
                  >
                    <template v-slot:append>
                      <v-icon class="icon"> mdi-chevron-down </v-icon>
                    </template>
                  </v-select>
                </validation-provider>
              </v-col>

              <v-col class="py-0" cols="12">
                <validation-provider
                  v-slot="{ errors }"
                  name="El tipo"
                  rules="required"
                >
                  <v-radio-group
                    row
                    v-model="form.vat_type"
                    dense
                    label="Tipo de persona"
                    class=""
                    :error-messages="errors"
                    ref="vat_type"
                  >
                    <v-radio
                      v-for="(option, i) in $store.state.identity.vatTypeOptions"
                      :key="i"
                      :value="option.id"
                    >
                      <template v-slot:label>
                        <span>{{ option.name }}</span>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </validation-provider>
              </v-col>

              <v-col cols="12" class="py-0">
                <validation-provider
                  v-slot="{ errors }"
                  name="El teléfono"
                  rules="required"
                >
                  <v-text-field
                    required
                    label="Teléfono"
                    :error-messages="errors"
                    height="37px"
                    type="text"
                    ref="phone"
                    v-model.trim="form.phone"
                  />
                </validation-provider>
              </v-col>

              <v-col class="py-0" cols="12">
                <validation-provider
                  v-slot="{ errors }"
                  name="La dirección"
                  :rules="{
                    requiredF: true,
                  }"
                >
                  <v-text-field
                    height="37px"
                    :error-messages="errors"
                    id="street"
                    type="text"
                    v-model.trim="form.street"
                    ref="street"
                    label="Dirección"
                  />
                </validation-provider>
              </v-col>

              <v-col class="py-0" cols="12">
                <validation-provider
                  v-slot="{ errors }"
                  name="El cruces de calles"
                  :rules="{
                    required: true,
                  }"
                >
                  <v-text-field
                    height="37px"
                    :error-messages="errors"
                    type="text"
                    v-model.trim="form.street2"
                    ref="street2"
                    label="Cruces de calles"
                  />
                </validation-provider>
              </v-col>
            </v-row>

            <v-row>
              <v-col class="py-0" cols="6" lg="4">
                <validation-provider
                  v-slot="{ errors }"
                  name="El país"
                  rules="required"
                >
                  <v-select
                    v-model="form.country_id"
                    height="37px"
                    ref="country_id"
                    :error-messages="errors"
                    :items="countries"
                    label="País"
                    item-text="name"
                    item-value="id"
                  >
                    <template v-slot:append>
                      <v-icon class="icon"> mdi-chevron-down </v-icon>
                    </template>
                  </v-select>
                </validation-provider>
              </v-col>

              <v-col class="py-0" cols="6" lg="4">
                <validation-provider
                  v-slot="{ errors }"
                  name="El estado"
                  rules="required"
                >
                  <v-select
                    v-model="form.state_id"
                    height="37px"
                    ref="state_id"
                    :error-messages="errors"
                    :items="states"
                    label="Estado"
                    item-text="name"
                    item-value="id"
                  >
                    <template v-slot:append>
                      <v-icon class="icon"> mdi-chevron-down </v-icon>
                    </template>
                  </v-select>
                </validation-provider>
              </v-col>

              <v-col class="py-0 hidden-md-and-down" cols="6" lg="4">
                <validation-provider
                  v-slot="{ errors }"
                  name="La ciudad"
                  rules="requiredF"
                >
                  <v-text-field
                    height="37px"
                    type="text"
                    ref="city"
                    v-model.trim="form.city"
                    label="Ciudad"
                    :error-messages="errors"
                  />
                </validation-provider>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" lg="4" class="py-0">
                <validation-provider
                  v-slot="{ errors }"
                  name="El código"
                  :rules="{
                    required: true,
                  }"
                >
                  <v-text-field
                    label="Código postal"
                    required
                    :error-messages="errors"
                    height="37px"
                    ref="zip"
                    type="text"
                    v-model.trim="form.zip"
                  />
                </validation-provider>
              </v-col>
            </v-row>

            <v-row
              v-if="! hideSubmitButton"
              class="mt-2 mt-md-4"
            >
              <v-col cols="12" sm="12" md="9" class="">
                <v-btn
                  class="primary"
                  :loading="isLoading"
                  :disabled="isLoading"
                  type="submit"
                  color=""
                  block
                  depressed
                  >Agregar datos fiscales</v-btn
                >
              </v-col>
            </v-row>
          </v-form>
        </validation-observer>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },

  props: {
    hideSubmitButton: {
      type: Boolean,
      default: false
    },

    back: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isDisabled: false,
      isLoading: false,
      states: [],
      form: {}
    }
  },

  computed: {
    countries() {
      return this.$store.getters["identity/getCountries"];
    }
  },

  watch: {
    '$store.state.identity.billingData': {
      immediate: true,
      deep: true,
      handler(billingData) {
        if(billingData) {
          let clone = this.$util.clone(billingData)

          this.form = clone
          this.form.country_id = this._.get(clone, 'country_id.0')
          this.form.state_id = this._.get(clone, 'state_id.0')
        }
      }
    },

    'form.country_id': {
      immediate: true,
      handler(country_id) {
        this.loadStates(country_id)
      }
    }
  },

  methods: {
    async loadStates(country_id) {
      this.states = country_id
        ? await this.$store.dispatch('identity/loadStates', country_id)
        : []
    },

    async sendForm() {
      if (await this.$refs.observer.validate()) {
        this.isDisabled = true
        this.isLoading = true

        this.$store.dispatch('identity/updateBillingData', {
            data: this.form,
            $nuxt: this.$nuxt
          })
          .finally(() => {
            this.isDisabled = false
            this.isLoading = false

            this.$emit('success')

            if(this.back) {
              this.$router.back()
            }
          })
      } else {
        Object.values(this.$refs).forEach(ref => {
          if (ref.hasError) ref.focus()
        })
      }
    }
  },

  created() {
    this.$store.dispatch("identity/loadBillingData")
    this.$store.dispatch("identity/loadCfdiUsageOptions")
    this.$store.dispatch("identity/loadVatTypeOptions")
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 126%;
  /* or 21px */

  text-transform: uppercase;

  color: #464646;
}

button {
  height: 46px !important;
  background: #eb539e !important;
  border-radius: 4px !important;
  font-weight: 400 !important;
  font-size: 12px !important;
  line-height: 17px !important;
  display: flex !important;
  align-items: center !important;
  text-align: center !important;
  letter-spacing: -0.02em !important;
  color: #ffffff !important;
}

@media screen and (min-width: $sm) {
}
</style>