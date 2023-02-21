<template>
  <v-row
    style="border-bottom: 1px solid #d2d2d2"
    class="justify-space-between mb-12 align-start"
  >
    <v-col cols="auto" md="8">
      <div class="">
        <h3 class="text-center mb-4 text-md-left">{{ item.name }}</h3>
        <p class="t0ext-text-left">{{ item.full }}</p>

        <!-- <div class="hidden-sm-and-down">
          <v-btn @click="selecteAddress(id)" depressed text v-if="false">
            <v-icon color="#001f3f" small left>mdi-check</v-icon>
            <span class="selected"> Seleccionar como predeterminada</span>
          </v-btn>
          <v-btn @click="selecteAddress(id)" depressed text v-else>
            <span>Seleccionar como predeterminada</span>
          </v-btn>
        </div> -->
      </div>
    </v-col>
    <v-col cols="auto" md="auto" class="d-flex">
      <div class="d-inline-flex flex-column">
        <v-btn width="auto" text> Dirección predeterminada </v-btn>

        <v-btn width="auto" text :loading="isBusy"> Editar </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {},
    },
  },

  data() {
    return {
      isBusy: false,
    };
  },

  methods: {
    selecteAddress(id) {
      this.$emit("selected", id);
    },

    deleteAddress(id) {
      this.isBusy = true;

      this.$store
        .dispatch("identity/deleteAddress", {
          $nuxt: this.$nuxt,
          id: id,
        })
        .finally(() => (this.isBusy = false));
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-weight: 700;
  font-size: 25px;
  line-height: 33px;
  /* identical to box height */

  color: #000000;
}
p {
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height */

  color: #000000;
}

button {
  text-transform: inherit !important;
  font-weight: 700 !important;
  font-size: 16px !important;
  line-height: 21px !important;
  /* identical to box height */
  text-decoration-line: underline !important;
  color: #aeaeae !important;
}
.selected {
  color: #001f3f;
  text-decoration: none;
}

.icon {
  height: 100%;
  width: 20px;
  object-fit: contain;
}
</style>
