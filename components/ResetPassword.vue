<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">Recuperar <span>password</span></h1>
      </v-col>
    </v-row>
    <v-row class="justify-center mt-4" no-gutters>
      <v-col cols="12" sm="7" md="5" xl="4">
        <validation-observer
          v-if="!isAuthenticate"
          ref="observer"
          v-slot="{ invalid }"
        >
          <v-form @submit.prevent="resetPassword">
            <v-row class="">
              <v-col cols="12" class="py-0">
                <validation-provider
                  v-slot="{ errors }"
                  name="La contraseña"
                  :rules="{
                    requiredF: true,
                    min: 6,
                    max: 10,
                  }"
                  vid="confirmation"
                >
                  <v-text-field
                    height="37px"
                    id="password"
                    type="password"
                    label="Contraseña"
                    ref="password"
                    v-model.trim="form.password"
                    autocomplete="false"
                    :error-messages="errors"
                  />
                </validation-provider>
              </v-col>

              <v-col cols="12" class="py-0">
                <validation-provider
                  v-slot="{ errors }"
                  ref="confirmPassword"
                  name="La nueva contraseña"
                  :rules="{ requiredF: true, confirmed: 'confirmation' }"
                >
                  <v-text-field
                    label="Repetir contraseña"
                    height="37px"
                    id="new-password"
                    type="password"
                    v-model.trim="form.confirmPassword"
                    autocomplete="false"
                    :error-messages="errors"
                  />
                </validation-provider>
              </v-col>

              <v-col cols="12" class="">
                <v-btn
                  class="primary"
                  :loading="isLoading"
                  type="submit"
                  :disabled="isDisabled && invalid"
                  depressed
                  height="46px"
                  block
                  >Confirmar</v-btn
                >
              </v-col>
            </v-row>
          </v-form>
        </validation-observer>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  props: {
    isAuthenticate: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isDisabled: false,
      isLoading: false,
      form: {
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    async resetPassword() {
      this.isDisabled = true;
      if (await this.$refs.observer.validate()) {
        this.isLoading = true;

        this.form.id = this.$route.params.id;
        this.form.key = this.$route.params.key;

        await this.$store
          .dispatch("identity/sendResetPasswordConfirm", {
            $nuxt: this.$nuxt,
            data: this.form,
          })
          .then((r) => this.$router.push({ name: "login" }));

        this.isLoading = false;
        this.isDisabled = false;
      }
    },

    clear() {
      this.form.password = "";
      this.form.confirmPassword = "";
      this.$refs.observer.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
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
  h1 {
    font-size: 37px;
  }
}
</style>