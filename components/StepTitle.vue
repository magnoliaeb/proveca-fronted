<template>
  <v-row class="my-4">
    <v-col cols="12" class="">
      <h2>
        <span class="mr-3">{{ number }}.</span> {{ title }}
      </h2>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-style: normal;
  font-weight: 900;
  font-size: 23px;
  line-height: 30px;
  /* identical to box height */
  text-align: left;

  color: #000;

  span {
    color: #2cafe5;
  }
}
</style>
