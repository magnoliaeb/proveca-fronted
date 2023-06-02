<template>
  <div>
    <div class="content py-16">
      <ChangePasswordForm />
    </div>
  </div>
</template>

<script>
import ChangePasswordForm from "../../components/ChangePasswordForm.vue";

export default {
  middleware: [
		'intended'
	],
  
  head: {
    title: "Cambiar contraseñ",
  },

  components: {
    ChangePasswordForm,
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
