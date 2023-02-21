<template>
  <v-dialog
    v-model="showAlert"
    max-width="783px"
    persistent
    content-class="card-dialog"
  >
    <v-card class="py-4" style="position: relative" height="438px">
      <v-btn @click="closeAlert" color="#000000" text icon absolute top right>
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-card-text class="d-flex fill-height">
        <v-row class="justify-center">
          <v-col cols="12" class="d-flex justify-center">
            <img
              width="60px"
              height="60px"
              :src="require(`../assets/imgs/iconos/${iconAlert}.svg`)"
              alt="Email"
            />
          </v-col>

          <v-col cols="12">
            <h2 class="mb-4 text-center">{{ titleAlert }}</h2>

            <p>{{ textAlert }}</p>
          </v-col>
          <v-col cols="12" md="auto">
            <v-btn to="/productos" depressed>Ir a catálogo</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    showAlert: {
      type: Boolean,
      default: false,
    },
    titleAlert: {
      type: String,
      default: "title",
    },
    textAlert: {
      type: String,
      default: "text",
    },
    iconAlert: {
      type: String,
      default: "Email",
    },
  },
  data() {
    return {
      //   dialog: true,
    };
  },
  methods: {
    closeAlert() {
      this.$emit("closeAlert");
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-style: normal;
  font-weight: 800;
  font-size: 27px;
  line-height: 230%;
  /* identical to box height, or 62px */

  text-transform: uppercase;

  color: #2cafe5;
}
p {
  font-weight: 400;
  font-size: 21px;
  line-height: 138%;
  /* identical to box height, or 29px */

  text-align: center;
}
a {
  width: 341px !important;
  height: 67px !important;

  background: #f8f8f8 !important;
  border: 3.55166px solid #2cafe5 !important;
  border-radius: 14.2066px !important;
  font-weight: 800 !important;
  font-size: 18.9422px !important;
  line-height: 25px !important;
  /* identical to box height */

  color: #2cafe5 !important;
}
.card-dialog {
  background: #ffffff !important;
  //   border-radius: 22px !important;
  //   overflow: hidden !important;
  border: 2px solid red;
}
</style>
