<template>
  <div class="content">
    <div class="publicity-card">
      <!-- <img
        :src="external.images.small"
        :alt="external.title"
        class="d-md-none"
        :style="{
          width: widthXs,
        }"
      /> -->

      <!-- <img
        :src="external.images.big"
        :alt="external.title"
        class="d-none d-md-inline"
        :style="{
          width: width,
        }"
      /> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    external: {
      type: Object,
    },
  },

  computed: {},
};
</script>

<style lang="scss" scoped>
.publicity-card {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   background: transparent;
  //   border: 2px solid red;
  height: 166px;
  width: 100%;
  background: #d9d9d9;
  //   width: 100%;

  //   img {
  //     max-width: 100%;
  //     height: auto;
  //   }
}
</style>
