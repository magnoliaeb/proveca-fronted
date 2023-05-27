<template>
	<v-btn
		@click="loginWithFacebook"
		color="gray"
		depressed
		style="position: relative"
		outlined
		class="rounded-pill d-flex"
		large
		block
	>
		<img src="../assets/imgs/iconos/facebook-nuevo.png" alt="facebook-nuevo" />
		Continua con Google
	</v-btn>
</template>

<script>
export default {
	methods: {
		loginWithFacebook() {
			console.log('loginWithFacebook');
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
