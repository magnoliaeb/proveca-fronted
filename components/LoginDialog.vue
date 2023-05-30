<template>
	<v-dialog
		v-model="$observer.showLogin"
		max-width="500px"
		content-class="card-dialog-contact"
	>
		<v-card>
			<v-row class="d-flex align-center mt-10" style="position: relative">
				<v-btn
					absolute
					left
					color="#000"
					@click="$observer.showLogin = false"
					text
					icon
					depressed
					small
				>
					<v-icon>mdi-close</v-icon>
				</v-btn>
				<v-col cols="12" class="text-center">
					<h2>Iniciar sesión</h2>
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
					<p class="text-center">¿No tienes una cuenta?</p>
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
		</v-card>
	</v-dialog>
</template>

<script>
import BtnFacebookLogin from './BtnFacebookLogin.vue';
import BtnGoogleLogin from './BtnGoogleLogin.vue';
import DividerLine from './DividerLine.vue';
import LoginForm from './LoginForm.vue';

export default {
	components: {
		LoginForm,
		BtnGoogleLogin,
		BtnFacebookLogin,
		DividerLine
	}
};
</script>

<style lang="scss" scoped>
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

@media screen and (min-width: $sm) {
}
</style>
