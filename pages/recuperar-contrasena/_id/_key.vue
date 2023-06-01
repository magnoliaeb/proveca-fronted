<template>
  <div class="password">
    <div class="content">
      <ResetPassword />
    </div>
  </div>
</template>

<script>
import ResetPassword from "../../../components/ResetPassword.vue";

export default {
  middleware: [
    'guest'
  ],

  components: { ResetPassword },

  head: {
    title: "Restablecer contraseña",
  }
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