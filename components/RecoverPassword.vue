<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">Solicitar password</h1>
      </v-col>
    </v-row>

    <v-row class="justify-center mt-4" no-gutters>
      <v-col cols="12" sm="7" md="5" xl="4">
        <validation-observer
          v-if="!hasEmail && !isAuthenticate"
          ref="observer"
          v-slot="{ invalid }"
        >
          <v-form @submit.prevent="validateEmail">
            <v-row class="">
              <v-col cols="12" class="py-0">
                <validation-provider
                  v-slot="{ errors }"
                  name="El correo"
                  :rules="{
                    required: true,
                  }"
                >
                  <label for="password">Correo*</label>
                  <v-text-field
                    height="37px"
                    id="email"
                    type="email"
                    ref="email"
                    v-model.trim="form.email"
                    solo
                    flat
                    outlined
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
                  block
                  >Continuar</v-btn
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
import HeadingTitle from "./HeadingTitle.vue";

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    HeadingTitle,
  },
  props: {
    isAuthenticate: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hasEmail: false,
      isDisabled: false,
      isLoading: false,
      form: {
        email: "",
      },
    };
  },
  methods: {
    async validateEmail() {
      this.isDisabled = true;
      if (await this.$refs.observer.validate()) {
        this.isDisabled = true;
        this.isLoading = true;

        await this.$store.dispatch("identity/sendResetPasswordRequest", {
          $nuxt: this.$nuxt,
          data: this.form,
        });

        this.isLoading = false;
        this.isDisabled = false;
        this.clear();
      } else {
        const inputForm = Object.keys(this.form);
        for (let i = 0; i < inputForm.length; i++) {
          const element = inputForm[i];
          if (this.$refs[element].hasError) {
            this.$refs[element].focus();
            return;
          }
        }
      }
    },

    clear() {
      this.form.email = "";
      this.$refs.observer.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  text-transform: uppercase;

  color: #2cafe5;
}
</style>
