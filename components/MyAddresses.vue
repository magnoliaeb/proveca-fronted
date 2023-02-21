<template>
  <section>
    <v-row class="justify-space-between align-center">
      <v-col cols="12" sm="auto">
        <h2 class="text-left">Mis direcciones</h2>
      </v-col>
      <v-col cols="12" sm="4" md="auto" class="hidden-sm-and-down">
        <v-btn depressed :to="{ name: 'mi-perfil-agregar-direccion' }"
          >Agregar dirección</v-btn
        >
      </v-col>
      <v-col cols="12" class="">
        <v-divider style="background: #000000"></v-divider>
      </v-col>
    </v-row>
    <NotData v-if="addressesEmpty" :text="text" :title="title" :icon="icon" />

    <template v-else>
      <AddressItem
        @selected="onSeleted"
        v-for="(item, index) in addresses"
        :key="`address-${index}`"
        :item="item"
      />
      <v-col cols="12" md="3" class="hidden-md-and-up">
        <v-btn
          tag="button"
          class="primary"
          :to="{ name: 'mi-perfil-agregar-direccion' }"
          block
          height="46px"
          depressed
          >Agregar dirección</v-btn
        >
      </v-col>
    </template>
  </section>
</template>

<script>
import AddressItem from "./AddressItem.vue";
export default {
  components: { AddressItem },
  data() {
    return {
      icon: "home",
      title: "No se encontró ninguna dirección",
      text: "Aún no das de alta ninguna dirección",
    };
  },
  methods: {
    onSeleted(id) {
      // dirreccin seleccionada
      console.log(id);
    },
  },
  computed: {
    addresses() {
      return [
        {
          id: 1,
          name: "Casa",
          full: "Donato Guerra #234 Int.22 Col. Jardines del Prado Jalisco México",
        },
        {
          id: 2,
          name: "Casa",
          full: "Donato Guerra #234 Int.22 Col. Jardines del Prado Jalisco México",
        },
        {
          id: 3,
          name: "Casa",
          full: "Donato Guerra #234 Int.22 Col. Jardines del Prado Jalisco México",
        },
      ];
    },
    addressesEmpty() {
      return this.addresses.length <= 0;
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: #1a1a1a !important;
}

h2 {
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  text-transform: uppercase;

  color: #2cafe5;
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
</style>
