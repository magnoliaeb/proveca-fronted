<template>
  <div class="filter">
    <v-row>
      <v-col cols="12" lg="2" xl="2" class="">
        <h2 class="text-left">Filtros</h2>
      </v-col>
      <v-col cols="12" lg="10" xl="10" class="px-0 px-lg-3">
        <v-breadcrumbs class="px-0" :items="items">
          <!-- <template v-slot:divider>
            <v-icon icon="mdi-chevron-right"></v-icon> </template
        > -->
        </v-breadcrumbs>
      </v-col>
    </v-row>
    <div class="d-flex justify-space-between align-center">
      <!-- <div class="icon hidden-lg-and-up">
        <v-btn depressed icon dark @click="drawerFilter">
          <img src="../assets/imgs/iconos/filter.svg" alt="filter-icon" />
        </v-btn>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      let items = [
        {
          text: "Inicio",
          href: "/",
          disabled: false,
        },
        {
          text: "Productos",
          href: "/productos",
          disabled: true,
        },
      ];

      //   if (this.$store.state.product.filters.brand) {
      //     items.push({
      //       text: this.$store.state.product.filters.brand,
      //       href: "breadcrumbs_link_1",
      //     });
      //   }

      items[items.length - 1].disabled = true;

      return items;
    },
  },
  methods: {
    drawerFilter() {
      //   this.$store.dispatch("products/drawerFilter", true);
    },
  },
};
</script>

<style lang="scss" scoped>
// .menu {
//   z-index: 300;
//   height: 100%;
// }
// .filter {
//   position: relative;
// }

h2 {
  font-weight: 700;
  font-size: 23px;
  line-height: 30px;
  /* identical to box height */

  text-transform: uppercase;

  color: #2cafe5;
}
</style>
