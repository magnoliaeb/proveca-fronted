<template>
	<v-navigation-drawer
		style="background-color: #f2f2f2"
		v-click-outside="clickOutside"
		:value="$observer.showLogin"
		width="373px"
		right
		fixed
	>
		<v-row class="d-flex align-center mt-10" style="position: relative">
			<v-btn
				absolute
				left
				color="#000"
				@click="closeLogin"
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
				<v-divider dark style="border-color: #2cafe5"></v-divider>
			</v-col>
		</v-row>

		<LoginForm />

		<v-row>
			<v-col cols="12">
				<p>
					¿No tienes una cuenta?
					<nuxt-link
						id="register"
						@click.native="openRegister"
						class=""
						:to="{ name: 'registro' }"
						>Regístrate</nuxt-link
					>
				</p>
			</v-col>
		</v-row>
	</v-navigation-drawer>
</template>

<script>
import LoginForm from './LoginForm.vue';

export default {
	components: {
		LoginForm,
	},

	methods: {
		closeLogin() {
			this.$observer.showLogin = false
		},
		clickOutside(event) {
			if (event.target.id !== 'popover' && event.target.id != 'login') {
				this.closeLogin();
			}
		},
		openRegister() {
			this.$observer.showLogin = false
			this.$observer.showRegister = true
		}
	}
};
</script>

<style lang="scss" scoped>
h2 {
	font-weight: 900;
	font-size: $fs-xl;
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
