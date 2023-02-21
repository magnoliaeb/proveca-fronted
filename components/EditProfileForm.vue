<template>
  <div>
    <v-row class="justify-center">
      <v-col cols="12">
        <h1 class="text-center">Editar datos</h1>
      </v-col>
    </v-row>
    <div class="mt-4 content-form mx-auto">
      <validation-observer ref="observer" v-slot="{ invalid }">
        <v-form @submit.prevent="updateProfile">
          <v-row class="">
            <v-col cols="12" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="El teléfono"
                :rules="{
                  required: true,
                }"
              >
                <v-text-field
                  outlined
                  solo
                  flat
                  required
                  height="37px"
                  id="phone"
                  type="text"
                  placeholder="Teléfono"
                  ref="phone"
                  v-model.trim="form.phone"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="El nombre"
                rules="required"
              >
                <v-text-field
                  outlined
                  solo
                  flat
                  required
                  height="37px"
                  ref="name"
                  placeholder="Nombre"
                  id="name"
                  type="text"
                  v-model.trim="form.name"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
            <v-col cols="12" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="La fecha"
                rules="required"
              >
                <v-text-field
                  outlined
                  solo
                  flat
                  required
                  height="37px"
                  placeholder="Fecha de nacimiento"
                  ref="birthdate"
                  id="birthdate"
                  type="date"
                  v-model.trim="form.birthdate"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>

            <!-- <v-col cols="12" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="El RFC"
                :rules="{ rfcValidate: true }"
              >
                <v-text-field outlined solo flat
                  height="37px"
                  placeholder="RFC"
                  id="vat"
                  type="text"
                  ref="vat"
                  v-model="form.vat"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col> -->

            <v-col cols="12" md="auto" class="pb-2 mx-auto">
              <v-btn
                :loading="isLoading"
                type="submit"
                :disabled="isDisabled && invalid"
                depressed
                >Actualizar perfil</v-btn
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
  data() {
    return {
      isDisabled: false,
      isLoading: false,
      form: {},
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    async updateProfile() {},

    clear() {
      this.form.email = "";
      this.form.phone = "";
      this.form.name = "";
      this.form.birthdate = "";
      this.$refs.observer.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
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

// @media screen and (min-width: $sm) {
//   h2 {
//     font-size: 37px;
//   }
// }
</style>
