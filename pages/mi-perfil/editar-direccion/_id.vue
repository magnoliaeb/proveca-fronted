<template>
  <div class="content">
    <v-row>
      <v-col cols="12" lg="">
        <v-btn @click="$router.back()" text>
          <v-icon left>mdi-chevron-left </v-icon>
          Regresar
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="align-start justify-space-between pt-8 pb-16">
      <v-col cols="12" sm="12" md="7" lg="8" class="">
        <!-- formulario -->
        <!-- <ProfileAddressForm /> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import ProfileAddressForm from "../../../components/ProfileAddressForm.vue";
export default {
  components: { ProfileAddressForm },
  head: {
    title: "Editar dirección",
  },
};
</script>

<style lang="scss" scoped></style>
