<template>
  <client-only>
    <div>
      <StepTitle :number="1" :title="'Datos de clientes'" />
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="submit">
          <v-row>
            <v-col cols="12" md="6" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="El nombre"
                rules="required"
              >
                <v-text-field
                  :error-messages="errors"
                  color="primary"
                  id="order.identification.name"
                  type="text"
                  ref="name"
                  autocomplete="name"
                  v-model.trim="order.identification.name"
                  solo
                  flat
                  outlined
                  placeholder="Nombre*"
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="El teléfono"
                rules="required"
              >
                <v-text-field
                  autocomplete="tel"
                  :error-messages="errors"
                  color="primary"
                  id="order.identification.phone"
                  type="text"
                  ref="phone"
                  v-model.trim="order.identification.phone"
                  solo
                  flat
                  outlined
                  placeholder="Teléfono*"
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="El correo"
                rules="required|email"
              >
                <v-text-field
                  ref="email"
                  autocomplete="email"
                  :error-messages="errors"
                  color="primary"
                  id="order.identification.email"
                  type="email"
                  v-model.trim="order.identification.email"
                  solo
                  flat
                  outlined
                  placeholder="Correo electrónico*"
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" lg="6" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="El código"
                rules="required"
              >
                <v-text-field
                  autocomplete="postal-code"
                  :error-messages="errors"
                  id="order.identification.postcode"
                  type="text"
                  ref="postcode"
                  v-model.trim="order.identification.postcode"
                  solo
                  flat
                  outlined
                  placeholder="Código postal"
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="El número"
                rules="required"
              >
                <v-text-field
                  :error-messages="errors"
                  id="order.identification.number"
                  type="text"
                  ref="number"
                  v-model="order.identification.number"
                  solo
                  flat
                  outlined
                  placeholder="Localidad / ciudad"
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" md="12" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="La calle"
                rules="requiredF"
              >
                <v-text-field
                  :error-messages="errors"
                  id="order.identification.street"
                  type="text"
                  ref="street"
                  v-model.trim="order.identification.street"
                  solo
                  flat
                  outlined
                  placeholder="Calle y Número"
                />
              </validation-provider>
            </v-col>

            <v-col cols="12" md="6" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="La colonia"
                rules="requiredF"
              >
                <v-text-field
                  :error-messages="errors"
                  id="order.identification.suburb"
                  type="text"
                  ref="suburb"
                  v-model.trim="order.identification.suburb"
                  solo
                  flat
                  outlined
                  placeholder="Apartamento, habitación, Negocio"
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="La población"
                rules="requiredF"
              >
                <v-text-field
                  :error-messages="errors"
                  id="order.identification.city-name"
                  type="text"
                  ref="city_name"
                  v-model.trim="order.identification.city_name"
                  solo
                  flat
                  outlined
                  placeholder="Región / Provincia"
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="El estado"
                rules="required"
              >
                <v-text-field
                  :error-messages="errors"
                  id="order.identification.state_name"
                  type="text"
                  ref="state_name"
                  v-model.trim="order.identification.state_name"
                  solo
                  flat
                  outlined
                  placeholder="Referencias"
                />
              </validation-provider>
            </v-col>
          </v-row>

          <!-- SHIPPING -->

          <!-- <v-row class="mt-4">
            <v-col
              cols="6"
              sm="4"
              lg="3"
              class=""
              v-for="(method, index) in computedQuote"
              :key="index"
            >
              <div
                @click="methodMailing(method.id)"
                class="justify-space-around card-send d-flex fill-height flex-column px-2 px-lg-4 py-2 py-lg-4"
                :class="{ selected: shipping.shipping_quote_id == method.id }"
              >
                <img :src="method.image" :alt="method.image" />
                <p
                  class="text-center mt-2"
                  :class="{ 'text-default': method.id == 1 }"
                >
                  {{ method.shipping_provider }} <br />
                  {{ method.description }}
                  <span v-if="method.total">
                    <br />
                    {{ method.total }}
                  </span>
                </p>
              </div>
            </v-col>
          </v-row> -->

          <!-- INVOICE -->

          <v-row class="mt-4">
            <v-col cols="12" class="">
              <h3>¿Requiere factura?</h3>
            </v-col>
          </v-row>
          <v-row class="">
            <v-col cols="12" class="">
              <v-radio-group hide-details v-model="requiresInvoice" row="">
                <v-radio color="primary" :value="true">
                  <template #label>
                    <span>Si</span>
                  </template>
                </v-radio>
                <v-radio color="primary" :value="false">
                  <template #label>
                    <span>No</span>
                  </template>
                </v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row v-if="requiresInvoice">
            <v-col cols="12" class="">
              <v-checkbox
                hide-details=""
                class="mt-0"
                color="primary"
                @change=""
              >
                <template #label>
                  <small
                    >Mi dirección de facturación es la misma que la del
                    envío</small
                  >
                </template>
              </v-checkbox>
            </v-col>
            <!-- <v-col v-if="false" cols="12" class="mb-4">
              <v-btn small depressed @click="openDialog(invoice.address)">
                Utilizar mis direcciones
              </v-btn>
            </v-col> -->

            <v-col cols="12" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="El nombre"
                rules="required"
              >
                <v-text-field
                  ref="business_name"
                  :error-messages="errors"
                  color="primary"
                  id="invoice.business_name"
                  type="text"
                  placeholder="Nombre / Razón social"
                  v-model.trim="invoice.business_name"
                  solo
                  flat
                  outlined
                />
              </validation-provider>
            </v-col>

            <v-col cols="12" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="El RFC"
                rules="required"
              >
                <v-text-field
                  :error-messages="errors"
                  color="primary"
                  id="invoice.rfc"
                  type="text"
                  ref="rfc"
                  v-model.trim="invoice.rfc"
                  placeholder="RFC*"
                  solo
                  flat
                  outlined
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" md="12" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="El CFDI"
                rules="required"
              >
                <v-select
                  :error-messages="errors"
                  id="invoice.cfdi"
                  flat
                  ref="cfdi"
                  placeholder="Uso de CFDI*"
                  outlined
                  solo
                  :items="invoiceConfig.cfdi"
                  v-model.trim="invoice.cfdi"
                  item-text="Name"
                  item-value="Value"
                >
                  <template v-slot:append>
                    <v-icon class="icon"> mdi-chevron-down </v-icon>
                  </template>
                </v-select>
              </validation-provider>
            </v-col>
          </v-row>

          <v-row class="mt-4">
            <v-col cols="12" class="">
              <h3>Métodos de Envío</h3>
            </v-col>
          </v-row>

          <!-- SHIPPING -->

          <v-row class="">
            <v-col
              cols="6"
              sm="4"
              lg="3"
              class=""
              v-for="(method, index) in [1, 2]"
              :key="index"
            >
              <div
                @click="methodMailing(method.id)"
                class="justify-space-around card-send d-flex fill-height flex-column px-2 px-lg-4 py-2 py-lg-4"
                :class="{ selected: shipping.shipping_quote_id == method.id }"
              >
                <img src="" alt="" />
                <!-- <img :src="method.image" :alt="method.image" /> -->
                <!-- <p
                  class="text-center mt-2"
                  :class="{ 'text-default': method.id == 1 }"
                >
                  {{ method.shipping_provider }} <br />
                  {{ method.description }}
                  <span v-if="method.total">
                    <br />
                    {{ method.total }}
                  </span>
                </p> -->
              </div>
            </v-col>
          </v-row>

          <!-- SUBMIT -->
          <!-- SUBMIT -->

          <v-row class="mt-4">
            <v-col cols="12" sm="12" md="auto">
              <v-btn
                :loading="isLoading"
                type="submit"
                tag="button"
                v-if="true || true"
                depressed
                :disabled="false && isDisabled && invalid"
              >
                Continuar
              </v-btn>
              <v-btn
                v-else
                x-large
                block
                max-width="100%"
                depressed
                :to="{ name: 'iniciar-sesion' }"
                dark
              >
                <span class="d-flex flex-wrap white--text text-center"
                  >Para continuar favor de <br class="hidden-sm-and-up pb-2" />
                  iniciar sesión</span
                >
              </v-btn>
            </v-col>
          </v-row>
        </form>
      </validation-observer>

      <!-- <v-dialog v-if="$app.$auth.user" v-model="dialog" width="500">
        <v-card class="mx-auto" max-width="500">
          <v-list>
            <v-list-item-group>
              <v-list-item
                v-for="(address, i) in $app.$auth.user.addresses"
                :key="i"
                @click="copyAddress(true, address, focusAddress)"
              >
                <v-list-item-content>
                  <b>{{ `${address.tag} ` }}</b> {{ address.formatted.a }}
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-dialog> -->
    </div>
  </client-only>
</template>

<script>
import StepTitle from "./StepTitle.vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  components: { StepTitle, ValidationProvider, ValidationObserver },
  data() {
    return {
      isDisabled: false,
      isLoading: false,
      order: {
        identification: {
          name: "",
          phone: "",
          email: "",
          street: "",
          number: "",
          suburb: "",
          city_name: "",
          state_name: "",
          country_name: "",
          postcode: "",
        },
      },
      invoice: {
        business_name: "",
        rfc: "",
        cfdi: "",
      },
      shipping: {},
      invoiceConfig: {},
      quoting: false,
      isLoading: false,
      requiresInvoice: true,
      requiresShipping: true,
      quote: [],
      dialog: false,
      focusAddress: null,
      formUser: {
        name: "",
        phone: "",
        email: "",
      },
      form: {
        street: "",
        number: "",
        suburb: "",
        city_name: "",
        state_name: "",
        country_name: "",
        postcode: "",
      },
      formInvoice: {
        business_name: "",
        emailE: "",
        rfc: "",
        cfdi: "",
        streetE: "",
        numberE: "",
        suburbE: "",
        city_nameE: "",
        state_nameE: "",
        country_nameE: "",
        postcodeE: "",
      },
    };
  },

  async fetch() {
    // this.invoiceConfig = await this.$app.$invoice.config();
  },

  computed: {
    computedQuote() {
      return this.quote ?? [];
    },
  },

  methods: {
    setData() {
      //   this.order = [];
      //   this.invoice = [];
      //   this.shipping = [];
    },

    getQuote() {
      this.quoting = true;
      //   this.$app.$cart
      //     .getQuote(this.shipping.postcode)
      //     .then((response) => (this.quote = response))
      //     .finally(() => (this.quoting = false));
    },

    methodMailing(id) {
      //   this.$set(this.shipping, "shipping_quote_id", id);
    },

    copyAddress(makeCopy, origin, destination) {
      this.dialog = false;

      //   if (makeCopy) {
      //     origin = this.$util.clone(origin);

      //     this.$set(destination, "postcode", origin.postcode);
      //     this.$set(destination, "suburb", origin.suburb);
      //     this.$set(destination, "street", origin.street);
      //     this.$set(destination, "number", origin.number);
      //     this.$set(destination, "city_name", origin.city_name);
      //     this.$set(destination, "state_name", origin.state_name);
      //     this.$set(destination, "country_name", origin.country_name);
      //   }
    },

    openDialog(destination) {
      //   this.$set(this, "focusAddress", destination);
      //   this.dialog = true;
    },

    async submit() {
      if (await this.$refs.observer.validate()) {
        this.isLoading = true;

        // if (this.requiresShipping) {
        //   this.order.shipping = this.$util.clone(this.shipping);
        // } else {
        //   this.order.shipping = null;
        // }

        // if (this.requiresInvoice) {
        //   this.order.invoice = this.$util.clone(this.invoice);
        // } else {
        //   this.order.invoice = null;
        // }

        // this.$app.$cart
        //   .update(this.order)
        //   .then(() => {
        //     this.setData();

        //     this.$router.push({
        //       name: "pago-envio",
        //     });
        //   })
        //   .finally(() => (this.isLoading = false));
      } else {
        let inputForm;
        if (this.requiresShipping && !this.requiresInvoice) {
          inputForm = Object.keys({
            ...this.formUser,
            ...this.form,
          });
        } else if (!this.requiresShipping && this.requiresInvoice) {
          inputForm = Object.keys({ ...this.formUser, ...this.formInvoice });
        } else {
          inputForm = Object.keys({
            ...this.formUser,
            ...this.form,
            ...this.formInvoice,
          });
        }
        // console.log(inputForm);
        for (let i = 0; i < inputForm.length; i++) {
          const element = inputForm[i];
          if (this.$refs[element].hasError) {
            this.$refs[element].focus();
            return;
          }
        }
      }
    },
  },

  created() {
    // this.setData();
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 30px;
  /* identical to box height */

  color: #000000;
  text-transform: initial;
}
span {
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  text-transform: uppercase;

  color: #000000;
  small {
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    /* identical to box height */

    color: #000000;
    text-transform: initial !important;
  }
}
button {
  width: 374px !important;
  height: 73px !important;

  background: #f8f8f8 !important;
  border: 3.55166px solid #2cafe5 !important;
  border-radius: 14.2066px !important;
  font-weight: 800 !important;
  font-size: 18.9422px !important;
  line-height: 25px !important;
  /* identical to box height */
  color: #2cafe5 !important;
}
.card-send {
  width: 160px;
  height: 134px;

  border: 2px solid #000000;
  border-radius: 14px;
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
}

@media screen and (min-width: $md) {
  //   button {
  //     width: 335px !important;
  //     height: 39px !important;
  //   }
}
</style>
