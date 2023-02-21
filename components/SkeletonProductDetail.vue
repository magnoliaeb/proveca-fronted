<template>
  <div class="content mt-16 pt-8">
    <v-row class="">
      <v-col cols="12" md="6">
        <v-skeleton-loader
          width="100%"
          tile
          :height="heightImg"
          :min-height="heightImg"
          type="image"
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" md="6">
        <div class="content">
          <v-row>
            <v-col cols="12">
              <v-skeleton-loader tile type="sentences"></v-skeleton-loader>
            </v-col>
            <v-col cols="6">
              <v-skeleton-loader tile type="heading"></v-skeleton-loader>
            </v-col>
            <v-col cols="12" class="mt-md-8 mb-6">
              <v-skeleton-loader tile type="paragraph"></v-skeleton-loader>
              <v-skeleton-loader tile type="paragraph"></v-skeleton-loader>
            </v-col>
            <v-row>
              <v-col cols="6" sm="6">
                <v-skeleton-loader
                  type="image"
                  height="40px"
                  min-height="40px"
                ></v-skeleton-loader>
              </v-col>
            </v-row>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    heightImg() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "400px";
        case "sm":
          return "340px";
        case "md":
          return "340px";
        case "lg":
          return "400px";
        case "xl":
          return "400px";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
