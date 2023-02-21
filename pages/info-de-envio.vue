<template>
  <section class="py-16">
    <div class="content">
      <v-row class="align-start justify-space-between">
        <v-col cols="12" md="7" lg="8">
          <v-col cols="12" md="auto" class="">
            <BtnGoBack />
          </v-col>
          <v-row class="align-center my-4">
            <v-col cols="12" md="auto" class="">
              <h3 class="text-center">¿Ya tienes una cuenta?</h3>
            </v-col>
            <v-col cols="12" md="auto">
              <v-btn to="/iniciar-sesion" class="login" depressed>
                INICIA SESIÓN
              </v-btn>
            </v-col>
          </v-row>
          <InfoSendForm />
        </v-col>
        <v-col
          cols="12"
          md="5"
          lg="4"
          class="pt-0"
          style="position: sticky; top: 30%"
        >
          <!-- resumen del carrito -->
          <ResumenCart />
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import BtnGoBack from "../components/BtnGoBack.vue";
import InfoSendForm from "../components/InfoSendForm.vue";
import ResumenCart from "../components/ResumenCart.vue";
export default {
  head: {
    title: "Información del envio",
  },
  components: { InfoSendForm, ResumenCart, BtnGoBack },
};
</script>

<style lang="scss" scoped>
* {
  // border: 1px solid red;
}
h3 {
  font-weight: 700;
  font-size: 23px;
  line-height: 30px;
  /* identical to box height */

  color: #000000;
}

a.login {
  width: 259px !important;
  height: 51px !important;

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
</style>
