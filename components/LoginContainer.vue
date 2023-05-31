<template>
	<div class="login-container">
		<v-row
			class="d-flex align-center mt-10"
			style="position: relative"
		>
			<v-col
				cols="12"
				class="text-center"
			>
				<h2>
					Iniciar sesión
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

		<LoginForm />

		<v-row class="justify-center">
			<v-col cols="auto">
				<p class="text-center">
					¿No tienes una cuenta?
				</p>

				<p class="text-center">
					<nuxt-link
						id="register"
						@click.native="$observer.openRegister"
						class=""
						to=""
					>
						Incribirse
					</nuxt-link>
				</p>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import BtnFacebookLogin from './BtnFacebookLogin'
import BtnGoogleLogin from './BtnGoogleLogin'
import DividerLine from './DividerLine'
import LoginForm from './LoginForm'

export default {
	components: {
		LoginForm,
		BtnGoogleLogin,
		BtnFacebookLogin,
		DividerLine
	}
}
</script>

<style lang="scss" scoped>
.login-container {
	h2 {
		font-weight: 900;
		font-size: $fs-2xl;
		color: #000000;
	}

	p {
		font-weight: 500;
		font-size: $fs-base;
		color: #000000;
		a {
			color: #2cafe5;
		}
	}
}
</style>