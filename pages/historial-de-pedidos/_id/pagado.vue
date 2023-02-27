<template>
  <u-animate-container>
    <div class="content my-8 pt-8 my-lg-16">
      <div v-if="order && charge" class="">
        <v-row class="justify-center my-6"
          v-if="charge.status == 'completed' || gateway == 'paypal'"
        >
          <v-col
            v-if="gateway == 'paypal' && charge.status != 'completed'"
            cols="12"
            class="text-center text-danger font-weight-bold"
          >
            Seguimos validando su pago. Le mandaremos un correo electrónico cuando el proceso esté completo
          </v-col>

          <v-col
            cols="12"
            sm="10"
            md="7"
            lg="7"
            xl="6"
            style="max-width: 580px"
          >
            <v-row class="justify-center">
              <!-- <v-col cols="12" class="text-center">
            <h2 class="mb-3">Estamos procesando su pago</h2>
            <h3>Un momento por favor.</h3>
          </v-col> -->
              <v-col cols="12">
                <u-animate
                  name="animate__fadeIn"
                  delay="1s"
                  duration="1s"
                  :iteration="1"
                  :offset="0"
                  animateClass="animate__animated"
                  :begin="$vuetify.breakpoint.mdAndDown? true: false"
                >
                  <article class="px-2 px-sm-4 px-sm-8 py-4">
                    <h4 class="mb-3">Pago</h4>

                    <div class="d-flex justify-space-between mb-5">
                      <p class="">Subtotal</p>
                      <span>{{
                        $util.getMoneyFormat(order.items_subtotal)
                      }}</span>
                    </div>
                    <div class="d-flex justify-space-between mb-5">
                      <p class="">Descuento</p>
                      <span>{{ $util.getMoneyFormat(amountDiscount) }}</span>
                    </div>

                    <div
                      v-for="(service, i) in order.services"
                      :key="i"
                      class="d-flex justify-space-between mb-5"
                    >
                      <p class="">{{ service.name }}</p>
                      <span>{{
                        $util.getMoneyFormat(service.price_total)
                      }}</span>
                    </div>
                    <div
                      class="
                        d-flex
                        justify-space-between
                        card-total
                        px-2 px-md-4
                        mb-4
                        py-2 py-md-4
                        my-3
                      "
                    >
                      <h4>Total</h4>
                      <span>{{
                        $util.getMoneyFormat(order.amount_total)
                      }}</span>
                    </div>
                    <!-- table -->
                    <table>
                      <tr class="">
                        <th><h5 class="text-left">Productos</h5></th>
                        <th>Cant</th>
                        <th class="hidden-md-and-up">Precio</th>
                        <th class="hidden-sm-and-down">P. Unitario</th>
                        <th>Total</th>
                      </tr>
                      <tr
                        class="mt-3"
                        v-for="(item, index) in items"
                        :key="index"
                      >
                        <td class="d-flex text-left mb-2 align-center">
                          <v-img
                            max-height="40"
                            max-width="40"
                            :src="item.picture.url"
                            :lazy-src="item.picture.url"
                            :alt="item.name"
                            aspect-ratio="1"
                            class="grey lighten-3 mr-2 mr-md-4 hidden-xs-only"
                          >
                            <template v-slot:placeholder>
                              <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                              >
                                <v-progress-circular
                                  :size="25"
                                  :width="3"
                                  indeterminate
                                  color="primary"
                                ></v-progress-circular>
                              </v-row>
                            </template>
                          </v-img>
                          <span>{{ item.name }}</span>
                        </td>
                        <td class="text-center">{{ item.product_uom_qty }}</td>
                        <td class="text-center">
                          {{ $util.getMoneyFormat(item.price_unit) }}
                        </td>
                        <td class="text-center">
                          {{
                            $util.getMoneyFormat(
                              item.price_unit * item.product_uom_qty
                            )
                          }}
                        </td>
                      </tr>
                    </table>
                    <!-- table -->
                    <div class="mt-4">
                      <h5 class="mb-3">Dirección de envío</h5>
                      <div class="">
                        <p class="text mb-4">
                          {{ $util.getFormattedAddress(shippingAddress) }}
                        </p>
                        <p class="text">
                          {{ $auth.user.name }} <br />
                          Correo: {{ $auth.user.email }}
                        </p>
                        <p class="text">Teléfono: {{ $auth.user.phone }}</p>
                      </div>
                    </div>

                    <div
                      class="mt-4"
                      v-if="order.invoice_required && invoiceAddress"
                    >
                      <h5 class="mb-3">Facturación</h5>
                      <div class="">
                        <p class="text">
                          {{ invoiceAddress.name }} <br />
                          {{ invoiceAddress.vat }}
                        </p>
                      </div>
                      <dir>
                        <p class="text mb-4">
                          {{ $util.getFormattedAddress(invoiceAddress) }}
                        </p>
                      </dir>
                    </div>

                    <!--
              <div class="mt-4">
                <h5 class="mb-3">Métodos de Pago</h5>
                <div class="d-flex flex-wrap align-center">
                  <img
                    class="mr-6"
                    src="../../../assets/imgs/pay-metodos/amex.svg"
                    alt="amex-card"
                  />
                  <p class="text">Numero de tarjeta: **** **** **** 2475</p>
                </div>
              </div>
              -->

                    <div class="mt-4 hidden-xs-only">
                      <h5 class="mb-3">Notas adicionales</h5>
                      <div class="">
                        <p class="text-left text">
                          {{ order.note }}
                        </p>
                      </div>
                    </div>
                  </article>
                </u-animate>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-btn
                  @click="print"
                  :loading="isLoading"
                  :disabled="isDisabled && invalid"
                  class="primary"
                  block
                  depressed
                  >Imprimir resumen</v-btn
                >
              </v-col>
              <v-col cols="12" md="6">
                <v-btn
                  class="primary"
                  block
                  :to="{ name: 'categorias' }"
                  depressed
                  >Ver más productos</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row
          v-else-if="charge.status == 'failed'"
          class="justify-center align-center"
          style="height: 70vh"
        >
          <v-col cols="12" md="6" lg="5">
            <v-card class="">
              <v-card-text class="py-6">
                <h5 class="black--text lighten-2">
                  La tarjeta ha sido declinada por el banco. Favor de intentar
                  el pago con otra tarjeta.
                </h5>

                <v-btn
                  class="primary mt-5"
                  block
                  :to="{ name: 'pagar-pedido-id', params: { id: order.id } }"
                  depressed
                  >Deseo utilizar otro método de pago</v-btn
                >
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row v-else class="justify-center align-center" style="height: 70vh">
          <v-col cols="12">
            <v-card class="">
              <v-card-text>
                <h4>Aún estamos procesando su pago</h4>
                <p>
                  Su pago por {{ charge.currency }}
                  {{ $util.getMoneyFormat(charge.amount) }} aún sigue sin
                  respuesta.
                </p>
                <p>
                  Esto probablemente se puede deber a que aún se encuentra en
                  proceso.
                </p>

                <p>
                  Usted en poco tiempo recibirá un correo indicándole si su pago
                  pudo ser concluído.
                </p>
                <p>
                  Si recibe la notificación de que no se pudo procesar el pago
                  usted puede intentar con otro método
                </p>
                <!-- <nuxt-link :to="{ name: 'pagar-pedido-id', params: { id: order.id } }"
            >dando clic aquí</nuxt-link
          > -->
                <v-btn
                  class="primary mt-5"
                  block
                  :to="{ name: 'pagar-pedido-id', params: { id: order.id } }"
                  depressed
                  >Deseo utilizar otro método de pago</v-btn
                >
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <v-row v-else class="justify-center mt-5">
        <v-col cols="12" class="text-center">
          <h3 class="mb-3 black--text text-h6 text-md-h5">
            Un momento por favor, estamos confirmado tu pago
          </h3>
          <!-- <h3>Un momento por favor.</h3> -->
          <v-progress-circular
            class="mt-4"
            :size="70"
            :width="7"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </v-col>
      </v-row>
    </div>
  </u-animate-container>
</template>

<script>
import HeadingTop from "../../../components/HeadingTop.vue";
export default {
  components: { HeadingTop },
  head: {
    title: "Confirmar envio",
  },
  data() {
    return {
      isDisabled: false,
      isLoading: false,
      dialog: false,
    };
  },

  watch: {
    order: {
      immediate: true,
      handler() {
        this.dialog = this.order && this.charge;
      },
    },

    charge: {
      immediate: true,
      handler() {
        this.dialog = this.order && this.charge;
      },
    },
  },

  computed: {
    gateway() {
      return this.$route.query.id
        ? 'openpay'
        : 'paypal'
    },

    order() {
      return this.$store.getters["orders/getOrder"];
    },

    charge() {
      return this.gateway == 'openpay'
        ? this.$store.state.openpay.charge
        : this.$store.state.paypal.charge
    },

    amountDiscount() {
      return (
        this.order.amount_undiscounted -
        this.order.amount_total +
        this.order.amount_tax
      );
    },

    items() {
      return this.order.items.filter((i) => i.product);
    },

    addresses() {
      return this.$store.getters["identity/getAddresses"];
    },

    shippingAddress() {
      let partner_shipping_id = this._.get(
        this.order,
        "partner_shipping_id.0",
        null
      );

      return this.addresses.find(
        (address) => address.id == partner_shipping_id
      );
    },

    invoiceAddress() {
      let partner_invoice_id = this._.get(
        this.order,
        "partner_invoice_id.0",
        null
      );

      return this.addresses.find((address) => address.id == partner_invoice_id);
    },
  },

  methods: {
    print() {
      this.isLoading = true;
      this.$nuxt.$emit("success-notify", "Resumen impreso");

      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
      this.code = "";
      this.isDisabled = false;
    },
  },

  created() {
    this.$store.dispatch("orders/getOrder", {
      $nuxt: this.$nuxt,
      order_id: this.$route.params.id,
    });

    if (this.$route.query.id) {
      this.$store.dispatch("openpay/getCharge", {
        $nuxt: this.$nuxt,
        id: this.$route.query.id,
      });
    }

    if (this.$route.query.paymentId) {
      this.$store.dispatch("paypal/getCharge", {
        $nuxt: this.$nuxt,
        id: this.$route.query.paymentId,
        token: this.$route.query.token,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
article {
  background-color: #f0f0f0;
  border-radius: 10px;
}
h2 {
  font-family: "Averta";
  font-weight: bold;
  font-size: 15px;
  line-height: 31px;
  text-align: center;
  text-transform: uppercase;
  color: #1a1a1a;
}
h3 {
  font-weight: 300;
  font-size: 12px;
  line-height: 29px;

  color: #1a1a1a;
}
h4 {
  font-weight: 600;
  font-size: 14px;
  line-height: 29px;
  color: #00bedc;
}
p,
span {
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  text-align: center;

  color: #3e3e3e;
}
.card-total {
  background: #f7f7f7;
  border-radius: 4px;
  h4,
  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 29px;
    color: #1a1a1a;
  }
}

table {
  width: 100%;
}
th {
  font-weight: normal;
  font-size: 10px;
  line-height: 20px;
  color: #b1b1b1;

  &:first-child {
    h5 {
      font-weight: 600;
      font-size: 14px;
      line-height: 29px;

      color: #00bedc;
    }
  }
}
td {
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #3e3e3e;
}

h5 {
  font-weight: 600;
  font-size: 14px;
  line-height: 29px;
  color: #00bedc;
}

p.text {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #3e3e3e;
  text-align: left;
}

@media screen and (min-width: $sm) {
  h2 {
    font-size: 25px;
  }
  h3 {
    font-size: 16px;
  }
  h4 {
    font-size: 19px;
  }
  p,
  span {
    font-size: 14px;
  }
  .card-total {
    h4,
    span {
      font-size: 19px;
    }
  }

  th {
    font-size: 11px;

    &:first-child {
      h5 {
        font-size: 19px;
      }
    }
  }
  td {
    font-size: 14px;
  }

  h5 {
    font-size: 19px;
  }

  p.text {
    font-size: 14px;
  }
}
@media screen and (min-width: $md) {
}
</style>
