<template>
  <v-navigation-drawer
    :v-model="showLogin"
    width="373px"
    right
    fixed
    class="px-4"
  >
    <v-row class="d-flex align-center mt-10">
      <v-btn
        absolute
        left
        color="#000"
        @click="closeLogin"
        text
        icon
        depressed
        small
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-col cols="12" class="text-center">
        <h2>Iniciar sesión</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-divider dark style="border-color: #2cafe5"></v-divider>
      </v-col>
    </v-row>

    <LoginForm />

    <v-row>
      <v-col cols="12">
        <p>
          ¿No tienes una cuenta?
          <nuxt-link
            @click.native="closeLogin"
            class="link link-primary"
            :to="{ name: 'registro' }"
            >Regístrate</nuxt-link
          >
        </p>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
import LoginForm from "./LoginForm.vue";

export default {
  components: {
    LoginForm,
  },

  data() {
    return {
      isDisabled: false,
    };
  },
  computed: {
    showLogin: {
      get() {
        return this.$store.getters["website/getShowLogin"];
      },
      set(value) {
        this.$store.dispatch("website/showLogin", value);
      },
    },
  },
  methods: {
    // clickExterno() {
    //   this.closeLogin();
    // },
    closeLogin() {
      this.$store.dispatch("website/showLogin", false);
    },

    clickOutside(event) {
      if (event.target.id !== "popover" && event.target.id != "login") {
        this.closeLogin();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// input {
//   background-color: transparent !important;
// }

h2 {
  font-weight: 900;
  font-size: 25px;
  line-height: 33px;
  /* identical to box height */

  color: #000000;
}

p {
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  /* identical to box height */

  color: #000000;
  a {
    color: #2cafe5;
  }
}

@media screen and (min-width: $sm) {
}
</style>
