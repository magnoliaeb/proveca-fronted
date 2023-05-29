<template>
	<div class="login">
		<div class="content">
			<v-row class="justify-center">
				<v-col cols="12" sm="8" md="4" class="text-center">
					<h1 class="mb-6 title-primary">Login</h1>
					<p class="text-center fs-base">
						Ingresa tus credenciales para iniciar sesión
					</p>
				</v-col>
			</v-row>
			<v-row class="justify-center">
				<v-col cols="12" sm="7" md="5" xl="4">
					<LoginForm />
				</v-col>
			</v-row>

			<v-row class="justify-center">
				<v-col cols="12" sm="7" md="5" xl="4" class="d-flex justify-center">
					<h3 class="d-flex align-center">
						<span class="mr-3"> ¿Aún no tienes cuenta?</span>
						<nuxt-link class="" :to="{ name: 'registro' }">
							<span>Crear una</span>
						</nuxt-link>
					</h3>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';
export default {
	auth: 'guest',

	components: { LoginForm },

	head: {
		title: 'Login',
	}
};
</script>

<style lang="scss" scoped>
.login {
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

a {
	font-weight: 500;
	color: #000;
	font-size: $fs-sm;
	span {
		color: #2cafe5;
		text-decoration: underline;
	}
}

@media screen and (min-width: $sm) {
}
</style>
