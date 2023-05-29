<template>
	<v-btn
		@click="$authentication.redirectToSocialLogin('facebook')"
		color="gray"
		depressed
		style="position: relative"
		outlined
		class="rounded-pill d-flex"
		large
		block
	>
		<img src="../assets/imgs/iconos/facebook-nuevo.png" alt="facebook-nuevo" />
		Continua con Facebook
	</v-btn>
</template>

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
