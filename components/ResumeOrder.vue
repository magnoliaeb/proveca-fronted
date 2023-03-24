<template>
  <div class="">
    <client-only>
      <v-card flat color="#ececec" class="rounded-card py-4 px-3">
        <v-row>
          <v-col cols="12">
            <h3 class="">Tu pedido</h3>
          </v-col>
        </v-row>

        <v-row class="justify-space-between">
          <v-col cols="6">
            <p>Subtotal</p>
          </v-col>
          <v-col cols="6" class="text-right">
            <span>{{ formattedSubtotal }}</span>
          </v-col>
        </v-row>
        <v-row class="justify-space-between">
          <v-col cols="6">
            <p>Descuento</p>
          </v-col>
          <v-col cols="6" class="text-right">
            <span>{{ formattedDiscount }}</span>
          </v-col>
        </v-row>
        <v-row
          v-for="(service, i) in computedOrder.services"
          :key="i"
          class="justify-space-between"
        >
          <v-col cols="6">
            <p>{{ service.name }}</p>
          </v-col>
          <v-col cols="6" class="text-right">
            <span>{{ $util.getMoneyFormat(service.price_total) }}</span>
          </v-col>
        </v-row>

        <v-row class="justify-space-between total-box my-2">
          <v-col cols="6">
            <p :class="{ 'cupon-total': hasCupon }">Total</p>
          </v-col>
          <v-col cols="6" class="text-right">
            <span :class="{ 'cupon-total': hasCupon }">{{ formattedTotal }}</span>
          </v-col>
        </v-row>
        <!--
        <v-row
          :no-gutters="$vuetify.breakpoint.smAndDown"
          class="mt-3 mt-md-0"
        >
          <v-col cols="12" class="px-0">
            <v-btn
              class="primary"
              depressed
              block
            >
              PAGAR
            </v-btn>
          </v-col>
        </v-row>
        -->
      </v-card>
      <client-only>
        <sweet-modal icon="success" ref="modal"> This is a success! </sweet-modal>
      </client-only>
    </client-only>
  </div>
</template>

<script>
import OrderMixin from '~/mixins/OrderMixin'

export default {
  mixins: [
    OrderMixin
  ],

  props: {
    hasCupon: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    itemsSubtotal() {
      return this.order.items_subtotal
    },

    amountDiscount() {
      return this.order.amount_undiscounted - this.order.amount_total + this.order.amount_tax
    },

    amountTotal() {
      return this.order.amount_total
    },

    shippingCosts() {
      return 400
      // PENDIENTE
    }
  },

  methods: {
    //
  }
};
</script>

<style lang="scss" scoped>
.rounded-card {
  border-radius: 5px !important;
  max-width: 380px;
}
h2 {
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  font-family: "Averta";
  text-transform: uppercase;
  color: #1a1a1a;
}
h3 {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;

  color: #3e3e3e;
}
p,
span {
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #3e3e3e;
}
p.cupon-total,
span.cupon-total {
  font-size: 14px;
  color: #01141d;
  font-weight: 700;
}

h4 {
  font-size: 16px;
  color: #01141d;
  font-weight: 800;
}

strong {
  font-size: 16px;
  color: #01141d;
  font-weight: 800;
}

.total-box {
  background-color: #f7f7f7;
  border-radius: 4px;
  p,
  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;

    color: #00bedc;
  }
}

@media screen and (min-width: $md) {
  // .rounded-card {
  //   max-width: 450px;
  // }
}
@media screen and (min-width: $md) {
  .total {
    background-color: transparent;
    border-radius: 0px;
  }
}
</style>