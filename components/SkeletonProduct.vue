<template>
  <div>
    <v-skeleton-loader
      tile
      type="image"
      :height="heightImg"
      :max-height="heightImg"
    ></v-skeleton-loader>
    <v-skeleton-loader tile type="list-item-two-line"></v-skeleton-loader>
    <v-skeleton-loader
      tile
      type="image"
      width="100%"
      class="px-4"
      max-height="40px"
      height="40px"
    ></v-skeleton-loader>
  </div>
</template>

<script>
export default {
  computed: {
    heightImg() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 140;
        case "sm":
          return 170;
        case "md":
          return 200;
        case "lg":
          return 200;
        case "xl":
          return 200;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
