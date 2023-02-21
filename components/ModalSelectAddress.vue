<template>
  <div>
    <client-only>
      <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        max-width="450"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            class=""
            depressed
            text
            v-bind="attrs"
            v-on="on"
            large
          >
            <img
              class="mr-sm-3"
              src="../assets/imgs/iconos/map-ping.svg"
              alt="perfil"
            />
            <p
              v-if="!hasCode"
              class="text-capitalize text-left hidden-xs-only my-0"
            >
              <span>ingresa tu </span> <br />
              ubicación
            </p>
            <p v-else class="text-capitalize text-left hidden-xs-only my-0">
              C.P. 44210
            </p>
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-card-title class="">
              <h2><span>Elije tú</span> ubicación</h2>
            </v-card-title>

            <v-card-text>
              <p class="mb-4 mt-3">
                Selecciona una dirección de envó para ver las opciones de envío
              </p>
              <v-btn
                depressed
                @click="dialog.value = false"
                block
                large
                :to="{ name: 'iniciar-sesion' }"
                >Inicia sesión</v-btn
              >
              <h3 class="mt-4">o introduce un código postal en México</h3>
              <form @submit.prevent="sendForm">
                <v-row class="mt-4">
                  <v-col cols="12" md="8">
                    <!-- input -->
                    <v-text-field
                      height="45px"
                      type="text"
                      v-model.trim="code"
                      solo
                      flat
                      outlined
                      hide-details
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-btn
                      type="submit"
                      class="btn-confir"
                      depressed
                      outlined
                      :loading="isLoading"
                      :disabled="isDisabled && invalid"
                      >Confirmar</v-btn
                    >
                  </v-col>
                </v-row>
              </form>
            </v-card-text>
          </v-card>
        </template>
      </v-dialog>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: "",
      dialog: false,
      hasCode: false,
      isDisabled: false,
      isLoading: false,
    };
  },
  methods: {
    sendForm() {
      if (this.code.length > 0) {
        this.isLoading = true;
        this.dialog = false;
        this.$nuxt.$emit("success-notify", "¡Código correcto!");

        setTimeout(() => {
          this.isLoading = false;
          this.hasCode = true;
        }, 2000);
        this.code = "";
        this.isDisabled = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  /* or 12px */

  p {
    font-weight: 400 !important;
    color: #434343 !important;
    font-size: 12px !important;
  }
}

p {
  font-size: 14px;
  font-weight: 500;
  font-family: "Roboto";
}
a {
  font-size: 14px !important;
  letter-spacing: 0px !important;
  color: white !important;
  font-weight: 500 !important;
  font-family: "Roboto" !important;
  font-weight: 300 !important;
  //   background-color: $secondary !important;
  text-transform: initial;
  height: 40px !important;
}
h2 {
  font-size: 17px;
}
h3 {
  font-size: 13px;
  color: #000000;
  font-weight: 800;
  width: 80%;
  margin: 0 auto;
  font-family: "Montserrat";
  text-align: center;
  position: relative;
  &::after,
  &::before {
    position: absolute;
    content: "";
    margin: 0 -24px;
    width: 20px;
    height: 1px;
    background-color: #dedede;
    top: 50%;
    right: 0;
  }
  &::before {
    left: 0;
  }
}
.btn-confir {
  font-size: 14px !important;
  letter-spacing: 0px !important;
  color: black !important;
  font-weight: 500 !important;
  font-family: "Roboto" !important;
  font-weight: 300 !important;
  text-transform: initial;
  height: 40px !important;
  width: 100% !important;
}

@media screen and (min-width: $sm) {
  p {
    font-size: 14px;
  }
  h2 {
    font-size: 22px;
  }

  h3 {
    font-size: 15px;
  }
}
</style>
