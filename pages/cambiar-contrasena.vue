<template>
  <div class="">
    <BannerDefault :title="'Cambiar'" :subTitle="'contraseña'" :go="true" />
    <div class="content py-8 py-md-16">
      <ChangePasswordForm />
    </div>
  </div>
</template>

<script>
import ChangePasswordForm from "../components/ChangePasswordForm.vue";

export default {
  components: { ChangePasswordForm },
  auth: true,
  head: {
    title: "Cambiar contraseña",
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