<template>
	<div class="register-container">
		<v-row
			class="d-flex align-center mt-10"
			style="position: relative"
		>
			<v-col
				cols="12"
				class="text-center"
			>
				<h2>
					Regístrate
				</h2>
			</v-col>
		</v-row>

		<v-row class="mb-2">
			<v-col cols="12">
				<BtnGoogleLogin />
			</v-col>

			<v-col cols="12">
				<BtnFacebookLogin />
			</v-col>

			<v-col cols="12">
				<DividerLine />
			</v-col>
		</v-row>

		<RegisterForm :hasLabel="true" />
	</div>
</template>

<script>
import RegisterForm from './RegisterForm'

export default {
	components: {
		RegisterForm
	}
}
</script>

<style lang="scss" scoped>
.register-container {
	h2 {
		font-weight: 900;
		font-size: $fs-xl;
		color: #000000;
	}
}
</style>