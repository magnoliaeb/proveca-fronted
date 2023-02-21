<template>
  <v-card flat color="#fff" class="rounded-card py-6 px-3">
    <h3 class="mb-4">Resumen</h3>
    <ul>
      <li class="d-flex py-2 justify-space-between align-center">
        <p class="">Subtotal</p>
        <span>{{ $util.getMoneyFormat(123.45) }}</span>
      </li>
      <li
        class="d-md-flex py-2 justify-space-between align-center hidden-sm-and-down"
      >
        <p class="">Descuento</p>
        <span>{{ $util.getMoneyFormat(98.0) }}</span>
      </li>
      <!-- <div class="d-md-flex py-2 justify-space-between align-center hidden-sm-and-down">
      <h5>IVA</h5>
      <span>{{ $util.getMoneyFormat($store.state.cart.content.tax) }}</span>
    </div> -->
      <li class="d-flex py-2 justify-space-between align-center">
        <p class="">Envio (Recoger en tienda)</p>
        <span>{{ $util.getMoneyFormat(0.0) }}</span>
      </li>
    </ul>

    <div
      class="d-md-flex mt-6 justify-space-between card-total px-2 py-3 hidden-sm-and-down"
    >
      <h4>Total</h4>
      <span>{{ $util.getMoneyFormat(122.23) }}</span>
    </div>
    <v-btn class="mt-7" depressed block>Continuar</v-btn>
  </v-card>
</template>

<style lang="scss" scoped>
* {
  color: #373736;
}
.rounded-card {
  //   border-radius: 5px !important;

  border: 1.18389px solid #000000 !important;
  border-radius: 8.28721px !important;
}

h3 {
  font-weight: 500;
  font-size: 16.5744px;
  line-height: 22px;
  /* identical to box height */

  text-transform: uppercase;

  color: #000000;
}
p {
  font-weight: 300;
  font-size: 16.5744px;
  line-height: 22px;
  /* identical to box height */

  color: #000000;
}
span {
  font-size: 13px;
  color: #061528;
  font-weight: 700;
  font-family: "Montserrat";
}

h5 {
  font-size: 13px;
  color: #061528;
  font-weight: 400;
  font-family: "Montserrat";
}
li {
  border-bottom: 1px solid #e9e9e9;
  &:last-child {
    border: none;
  }
}

.card-total {
  border-top: 2px solid #2cafe5;

  h4,
  span {
    font-style: normal;
    font-weight: 900;
    font-size: 16.5744px;
    line-height: 22px;
    /* identical to box height */

    text-transform: uppercase;

    color: #2cafe5;
  }
}
button {
  width: 100% !important;
  height: 50.91px !important;

  background: #f8f8f8 !important;
  border: 3.55166px solid #2cafe5 !important;
  border-radius: 14.2066px !important;
  font-weight: 800 !important;
  font-size: 18.9422px !important;
  line-height: 25px !important;
  /* identical to box height */

  color: #2cafe5 !important;
  text-transform: initial !important;
}
@media screen and (min-width: $md) {
}
</style>
