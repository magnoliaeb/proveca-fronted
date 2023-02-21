<template>
  <section class="py-12">
    <v-row>
      <v-col
        class="text-center"
        cols="12"
        sm="6"
        md="3"
        lg="3"
        v-for="(item, index) in items"
        :key="index"
      >
        <v-icon class="mb-2" color="primary">mdi-heart</v-icon>
        <p>{{ item.name }}</p>
        <!-- <v-btn v-else text>{{ item.name }}</v-btn> -->
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "(33) 2345 9234",
          link: "(33) 2345 9234",
          icon: "",
          email: false,
          phone: false,
          whatsapp: false,
          address: false,
        },
        {
          name: " (33) 4595 4566",
          link: " (33) 4595 4566",
          icon: "",
          email: false,
          phone: false,
          whatsapp: false,
          address: false,
        },
        {
          name: "C. Donato Guerra #23 Guadalajara Jalisco, Mx.",
          link: "",
          icon: "",
          email: false,
          phone: false,
          whatsapp: false,
          address: true,
        },
        {
          name: "inside@gmail.com",
          link: "inside@gmail.com",
          icon: "",
          email: false,
          phone: false,
          whatsapp: false,
          address: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  font-weight: 400;
  font-size: 19px;
  line-height: 138%;
  /* or 26px */

  text-align: center;

  color: #000000;
}
</style>
