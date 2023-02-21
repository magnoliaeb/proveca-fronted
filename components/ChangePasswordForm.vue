<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">Cambiar <span>contraseña</span></h1>
      </v-col>
    </v-row>
    <div class="mt-4 content-form mx-auto">
      <validation-observer ref="observer" v-slot="{ invalid }">
        <v-form @submit.prevent="senfForm">
          <v-row class="">
            <v-col cols="12" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="Contraseña actual"
                :rules="{
                  requiredF: true,
                  min: 6,
                  max: 10,
                }"
                vid="confirmation"
              >
                <v-text-field
                  outlined
                  solo
                  flat
                  label="Contraseña actual"
                  id="currentPassword"
                  ref="currentPassword"
                  type="password"
                  v-model.trim="form.currentPassword"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>

            <v-col cols="12" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="Nueva contraseña"
                :rules="{
                  requiredF: true,
                  min: 6,
                  max: 10,
                }"
                vid="confirmation"
              >
                <v-text-field
                  outlined
                  solo
                  flat
                  label="Nueva contraseña"
                  id="newPassword"
                  ref="newPassword"
                  type="password"
                  v-model.trim="form.newPassword"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>

            <v-col cols="12" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="Confirmar la nueva contraseña"
                :rules="{ requiredF: true, confirmed: 'confirmation' }"
              >
                <v-text-field
                  outlined
                  solo
                  flat
                  ref="confirmNewPassword"
                  label="Repetir contraseña"
                  id="confirmNewPassword"
                  type="password"
                  v-model.trim="form.confirmNewPassword"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>

            <v-col cols="12" md="auto" class="pb-2 mx-auto">
              <v-btn
                class=""
                :loading="isLoading"
                type="submit"
                :disabled="isDisabled && invalid"
                depressed
                >Confirmar contraseña</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      isDisabled: false,
      isLoading: false,
      form: {
        currentPassword: null,
        newPassword: null,
        confirmNewPassword: null,
      },
    };
  },
  methods: {
    async senfForm() {
      if (await this.$refs.observer.validate()) {
        this.isDisabled = true;
        this.isLoading = true;

        await this.$store
          .dispatch("identity/changePassword", {
            $nuxt: this.$nuxt,
            data: {
              old_password: this.form.currentPassword,
              new_password: this.form.newPassword,
            },
          })
          .finally(() => this.clear());

        this.isLoading = false;
        this.isDisabled = false;
      }
    },

    clear() {
      this.form = {};
      this.$refs.observer.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
a,
button {
  max-width: 280px !important;
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

h1 {
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  text-transform: uppercase;

  color: #2cafe5;
}
.content-form {
  max-width: 481px;
  // border: 1px solid orange;
}
</style>
