<template>
  <div class="">
    <v-row>
      <v-col cols="12" class="px-0">
        <h3>¿Requiere factura?</h3>
      </v-col>
      <v-col cols="12" class="py-0 px-0">
        <v-radio-group v-model="$observer.confirmation.invoice_required" row="" dense>
          <v-radio :value="true">
            <template #label>
              <span class="text">Si</span>
            </template>
          </v-radio>
          <v-radio :value="false">
            <template #label>
              <span class="text">No</span>
            </template>
          </v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <div v-if="$observer.confirmation.invoice_required">
      <v-row>
        <v-col cols="12" class="px-0">
          <AddressList />
        </v-col>
      </v-row>

      <validation-observer ref="observer" v-slot="{ invalid }">
        <v-form @submit.prevent="sendForm">
          <v-row class="">
            <v-col cols="12" class="py-0 px-0">
              <validation-provider
                v-slot="{ errors }"
                name="La razón social"
                rules="requiredF"
              >
                <v-text-field
                  required
                  label="Razón social"
                  :error-messages="errors"
                  height="37px"
                  type="text"
                  ref="socialName"
                  v-model.trim="form.socialName"
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" class="py-0 px-0">
              <validation-provider
                v-slot="{ errors }"
                name="El RFC"
                :rules="{
                  required: true,
                  rfcValidate: true,
                }"
              >
                <v-text-field
                  required
                  :error-messages="errors"
                  height="37px"
                  type="text"
                  ref="rfc"
                  label="RFC"
                  v-model.trim="form.rfc"
                />
              </validation-provider>
            </v-col>

            <v-col cols="12" class="py-0 px-0">
              <validation-provider
                v-slot="{ errors }"
                name="El CFDI"
                rules="required"
              >
                <v-select
                  required
                  label="Uso de CFDI"
                  :error-messages="errors"
                  height="37px"
                  type="text"
                  ref="cfdi"
                  v-model.trim="form.cfdi"
                  :items="items"
                >
                  <template v-slot:append>
                    <v-icon class="icon"> mdi-chevron-down </v-icon>
                  </template>
                </v-select>
              </validation-provider>
            </v-col>
            <v-col cols="12" class="px-0">
              <validation-provider
                v-slot="{ errors }"
                name="Usa la misma dirección"
                :rules="{
                  required: true,
                }"
              >
                <v-checkbox
                  dense
                  ref="isPrincipal"
                  v-model="form.isPrincipal"
                  :error-messages="errors"
                >
                  <template v-slot:label>
                    <span
                      >Usa la misma dirección de envío para la dirección
                      fiscal.</span
                    >
                  </template>
                </v-checkbox>
              </validation-provider>
            </v-col>
          </v-row>
          <v-row v-if="form.isPrincipal">
            <v-col class="py-0 px-0" cols="12" lg="8">
              <validation-provider
                v-slot="{ errors }"
                name="La calle"
                :rules="{
                  requiredF: true,
                }"
              >
                <v-text-field
                  height="37px"
                  :error-messages="errors"
                  type="text"
                  v-model.trim="form.addressI"
                  ref="addressI"
                  label="Calle"
                />
              </validation-provider>
            </v-col>
            <v-col class="py-0 px-0" cols="12" lg="4">
              <validation-provider
                v-slot="{ errors }"
                name="El No. Ext."
                :rules="{
                  required: true,
                }"
              >
                <v-text-field
                  height="37px"
                  :error-messages="errors"
                  type="text"
                  v-model.trim="form.numExtI"
                  ref="numExtI"
                  label="No. Ext."
                />
              </validation-provider>
            </v-col>

            <v-col class="py-0 px-0" cols="12" md="6" lg="4">
              <validation-provider
                v-slot="{ errors }"
                name="El No. Int."
                :rules="{
                  required: true,
                }"
              >
                <v-text-field
                  height="37px"
                  :error-messages="errors"
                  type="text"
                  ref="numIntI"
                  v-model.trim="form.numIntI"
                  label="No. Int."
                />
              </validation-provider>
            </v-col>

            <v-col class="py-0 px-0" cols="12" md="6" lg="4">
              <validation-provider
                v-slot="{ errors }"
                name="El C.P."
                rules="required"
              >
                <v-text-field
                  height="37px"
                  type="text"
                  ref="cp"
                  v-model.trim="form.cp"
                  label="C.P."
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" class="py-0 px-0" lg="6">
              <validation-provider
                v-slot="{ errors }"
                name="La colonia"
                rules="required"
              >
                <v-text-field
                  required
                  label="Colonia"
                  :error-messages="errors"
                  height="37px"
                  ref="provinceI"
                  type="text"
                  v-model.trim="form.provinceI"
                />
              </validation-provider>
            </v-col>
            <v-col class="py-0" cols="12" md="6">
              <validation-provider
                v-slot="{ errors }"
                name="El estado"
                rules="required"
              >
                <v-select
                  v-model="form.stateI"
                  height="37px"
                  :error-messages="errors"
                  :items="items"
                  ref="stateI"
                  label="Estado"
                >
                  <template v-slot:append>
                    <v-icon class="icon"> mdi-chevron-down </v-icon>
                  </template>
                </v-select>
              </validation-provider>
            </v-col>
          </v-row>
        </v-form></validation-observer
      >
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      isLoading: false,
      isDisabled: false,
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      form: {
        socialName: "",
        rfc: "",
        cfdi: "",
        isPrincipal: false,
        addressI: "",
        numExtI: "",
        numIntI: "",
        cp: "",
        provinceI: "",
        stateI: "",
      },
    };
  },
  methods: {
    async sendForm() {
      this.isDisabled = true;
      if (await this.$refs.observer.validate()) {
        this.isLoading = true;
        this.$nuxt.$emit("success-notify", "info correcto");

        setTimeout(() => {
          this.isLoading = false;

          this.$router.push({ name: "metodos-de-pago" });
        }, 2000);
        this.clear();
        this.isDisabled = false;
      } else {
        Object.values(this.$refs).forEach((ref) => {
          if (ref.hasError) ref.focus();
        });
      }
    },
    clear() {
      this.form.email = "";
      this.form.password = "";
      this.$refs.observer.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 126%;
  /* or 21px */

  text-transform: uppercase;

  color: #eb539e;
}

span {
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 126%;
  color: #000000;
}

button {
  font-family: "Jost" !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-size: 12px !important;
  line-height: 17px !important;

  letter-spacing: -0.02em !important;

  color: #ffffff;
}

@media screen and (min-width: $sm) {
  // h3 {
  //   font-size: 19px;
  // }
}
</style>