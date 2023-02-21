<template>
  <v-row class="justify-center empty align-center">
    <v-col cols="12" sm="10">
      <div>
        <div class="icon">
          <img
            :src="require(`../assets/imgs/iconos/${icon}.svg`)"
            :alt="icon"
          />
        </div>
        <div class="">
          <h2 class="my-4">{{ title }}</h2>
          <p>{{ text }}</p>
          <div class="d-flex justify-center mt-10" v-if="showBtn">
            <v-btn depressed to="/productos" class=""
              >Ver nuestro catálogo</v-btn
            >
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "Bag-gray",
    },
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    showBtn: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  display: block;
  margin: 0 auto;
  height: 100px;
  width: 100px;
}
h2 {
  font-weight: 900;
  font-size: 25px;
  line-height: 33px;
  /* identical to box height */

  text-align: center;

  color: #000000;

  opacity: 0.38;
}

.empty {
  height: 80vh;
}

p {
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height */

  text-align: center;

  color: #000000;

  opacity: 0.38;
}
</style>
