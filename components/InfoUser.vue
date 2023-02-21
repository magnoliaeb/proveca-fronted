<template>
  <div class="">
    <v-row class="justify-space-between">
      <v-col cols="12" md="8" class="">
        <h2 class="mb-6 text-left">Mi perfil</h2>
        <h3 class="mb-4 text-left">Carlos Hernández Quezada</h3>
        <p class="mb-4">carlos.herque@gmail.com</p>
        <p class="mb-4">Tel. (33) 2342 3790</p>
      </v-col>
      <v-col cols="12" md="auto" class="pa-0">
        <v-row class="flex-column">
          <v-col cols="12">
            <v-btn depressed to="/mi-perfil/editar-perfil">Editar</v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn depressed to="/mi-perfil/cambiar-contrasena"
              >Cambiar contraseña</v-btn
            >
          </v-col>
          <v-col cols="12">
            <v-btn depressed class="btn-danger">Cerrar sesión</v-btn>
          </v-col>
          <!-- <v-col cols="12">
            <v-btn
              depressed
              
              
              
              
              
              to="/cambiar-contrasena"
              >Actualizar contraseña</v-btn
            >
          </v-col> -->
          <!-- <v-col cols="12">
            <v-btn
              depressed
              color="primary"
              
              
              
              
              to="/cambiar-correo"
              >Actualizar correo</v-btn
            >
          </v-col> -->
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  //   computed: {
  //     profile() {
  //       return this.$auth.user;
  //     },
  //   },
};
</script>

<style lang="scss" scoped>
h2 {
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  text-transform: uppercase;

  color: #2cafe5;
}
h3 {
  font-weight: 700;
  font-size: 25px;
  line-height: 33px;
  /* identical to box height */

  color: #000000;
}

p {
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height */

  color: #000000;
}
a,
button {
  width: 250px !important;
  height: 51px !important;
  background: #f8f8f8 !important;
  border: 3.54576px solid #2cafe5 !important;
  border-radius: 14.183px !important;
  font-weight: 800 !important;
  font-size: 18.9107px !important;
  line-height: 25px !important;
  text-transform: initial !important;
  /* identical to box height */

  color: #2cafe5 !important;
}
.btn-danger {
  border: 3.54576px solid #b92828 !important;
  color: #b92828 !important;
}

@media screen and (min-width: $sm) {
  // h2 {
  //   font-size: 23px;
  // }
  // p {
  //   font-size: 17px;
  // }
  // a {
  //   height: 30px !important;
  //   font-size: 12px !important;
  // }
}
</style>
