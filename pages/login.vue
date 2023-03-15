<template>
  <div class="login">
    <div class="content">
      <v-row class="justify-center">
        <v-col cols="12" sm="8" md="4" class="text-center">
          <h1 class="mb-4">Login</h1>
          <p class="text-center">
            Ingresa tus credenciales para iniciar sesión
          </p>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="12" sm="7" md="5" xl="4">
          <LoginForm />
        </v-col>
      </v-row>

      <v-row class="justify-center">
        <v-col cols="12" sm="7" md="5" xl="4" class="d-flex justify-center">
          <h3 class="d-flex align-center">
            <span class="mr-3"> ¿Aún no tienes cuenta?</span>

            <nuxt-link class="" :to="{ name: 'registro' }">
              <span>Crear una</span>
            </nuxt-link>
          </h3>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
export default {
  auth: false,
  components: { LoginForm },
  head: {
    title: "Login",
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  font-weight: 300;
  font-size: 30px;
  line-height: 53px;
  letter-spacing: -0.02em;
  text-transform: uppercase;

  color: #97999c;
  span {
    font-weight: 700;
    color: #eb539e;
  }
}

a {
  font-weight: 400 !important;
  font-size: 12px !important;
  line-height: 17px !important;
  display: flex !important;
  align-items: center !important;
  text-align: center !important;
  letter-spacing: -0.02em !important;
  color: #eb539e !important;
  border-radius: 4px !important;
  border-width: 2px !important;
}
p {
  font-weight: 300;
  font-size: 14px;
  line-height: 182.5%;
  /* or 38px */

  color: #000000;
}

button {
  font-weight: 400 !important;
  font-size: 12px !important;
  line-height: 17px !important;
  display: flex !important;
  align-items: center !important;
  text-align: center !important;
  letter-spacing: -0.02em !important;

  color: #ffffff;
}

@media screen and (min-width: $sm) {
  p {
    font-size: 18px;
  }
  h1 {
    font-size: 37px;
  }
}
</style>