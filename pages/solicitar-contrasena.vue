<template>
  <div class="py-16 password">
    <div class="content">
      <RecoverPassword class="" />
    </div>
  </div>
</template>

<script>
import RecoverPassword from "../components/RecoverPassword.vue";

export default {
  //   auth: false,
  components: { RecoverPassword },
  head: {
    title: "Recuperar contraseña",
  },
};
</script>

<style lang="scss" scoped>
.password {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
