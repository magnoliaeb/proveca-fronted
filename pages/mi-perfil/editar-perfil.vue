<template>
  <div>
    <div class="content py-16">
      <EditProfileForm />
    </div>

    <div></div>
  </div>
</template>

<script>
import EditProfileForm from "../../components/EditProfileForm";
// import ChangePasswordForm from "../../components/ChangePasswordForm";
export default {
  head: {
    title: "Editar mi perfil",
  },

  components: {
    EditProfileForm,
    // ChangePasswordForm,
  },

  methods: {
    goTo() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped></style>
s
