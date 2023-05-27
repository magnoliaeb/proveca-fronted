<template>
	<v-btn
		@click="loginWithGoogle"
		color="gray"
		depressed
		style="position: relative"
		outlined
		class="rounded-pill d-flex"
		large
		block
	>
		<img src="../assets/imgs/iconos/logo-de-google.png" alt="logo-de-google" />
		Continua con Google
	</v-btn>
</template>

<script>
export default {
	methods: {
		loginWithGoogle() {
			console.log('loginWithGoogle');
		},
	},
};
</script>

<style lang="scss" scoped>
button {
	text-transform: initial !important;
	background: white;
}

img {
	position: absolute;
	left: 0px;
	height: 25px;
	width: 25px;
}
</style>
