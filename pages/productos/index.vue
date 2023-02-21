<template>
  <section class="py-16">
    <div class="content">
      <v-row>
        <v-col>
          <HeaderFilter />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="2" xl="2" class="hidden-md-and-down">
          <FilterProducts />
        </v-col>
        <v-col cols="12" lg="10" xl="10" class="px-0 px-lg-3">
          <GridProducts />
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import HeaderFilter from "@/components/HeaderFilter.vue";
import GridProducts from "@/components/GridProducts.vue";
import FilterProducts from "@/components/FilterProducts.vue";
export default {
  head() {
    return {
      title: "Lista de Productos",
      meta: [
        // {
        //   hid: "description",
        //   name: "Productos",
        //   content: "Nuestos productos",
        // },
        // { hid: "keywords", name: "keywords", content: "" },
      ],
    };
  },

  components: { GridProducts, HeaderFilter, FilterProducts  },
};
