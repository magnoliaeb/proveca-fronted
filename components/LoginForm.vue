<template>
	<client-only class="">
		<validation-observer ref="observer" v-slot="{ invalid }">
			<v-form @submit.prevent="loginUser">
				<v-row class="">
					<v-col class="py-0" cols="12">
						<validation-provider
							v-slot="{ errors }"
							name="El correo"
							:rules="{
								required: true,
								email: true,
							}"
						>
							<label :class="{ sider: loginSider }" for="email">Correo*</label>
							<v-text-field
								required
								ref="email"
								id="email"
								type="email"
								v-model.trim="form.email"
								solo
								flat
								height="37px"
								outlined
								:error-messages="errors"
							/>
						</validation-provider>
					</v-col>
					<v-col class="py-0" cols="12">
						<validation-provider
							v-slot="{ errors }"
							name="La contraseña"
							:rules="{
								requiredF: true,
							}"
						>
							<label :class="{ sider: loginSider }" for="password"
								>Contraseña*</label
							>
							<v-text-field
								required
								ref="password"
								id="password"
								type="password"
								class=""
								v-model.trim="form.password"
								solo
								flat
								height="37px"
								outlined
								:error-messages="errors"
							/>
						</validation-provider>
					</v-col>
					<v-col cols="12" class="pt-0">
						<nuxt-link
							@click.native="closeSiderLogin"
							:to="{ name: 'solicitar-contrasena' }"
							:class="'text-decoration-underline black--text'"
							>¿Olvidaste tu contraseña?</nuxt-link
						>
					</v-col>

					<v-col class="" cols="12">
						<v-btn
							class="button-primary"
							:loading="isLoading"
							:disabled="isDisabled && invalid"
							type="submit"
							block
							depressed
						>
							Procesar
						</v-btn>
					</v-col>
				</v-row>
			</v-form>
		</validation-observer>
	</client-only>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
	name: 'RegisterForm',
	props: {
		loginSider: {
			type: Boolean,
			default: false,
		},
	},
	components: {
		ValidationProvider,
		ValidationObserver,
	},
	data() {
		return {
			isDisabled: false,
			isLoading: false,
			form: {
				email: '',
				password: '',
			},
		};
	},
	methods: {
		async loginUser() {
			if (await this.$refs.observer.validate()) {
				this.isDisabled = true;
				this.isLoading = true;

				this.$auth
					.loginWith('local', {
						data: this.form,
					})
					.then((response) => {
						this.$nuxt.$emit('success-notify', '¡Bienvenido a FreshBox!');

						this.$auth.setUserToken(response.token);
						this.$auth.setUser(response.data);
						this.$auth.$storage.setUniversal('token', response.token);

						return this.$store.dispatch('identity/loadAddresses');
					})
					.then((addresses) => this.$store.dispatch('cart/loadShoppingCart'))
					.then((cart) => {
						let items = this.$store.getters['localcart/getItems'];

						return this.$store.dispatch('cart/addItems', {
							$nuxt: this.$nuxt,
							items: items,
						});
					})
					.then(() => {
						let cart = this.$store.state.cart.cart;

						this.$observer.showLogin = false
						this.clear();

						if (cart != null && cart.items.length != 0) {
							if (this.$route.name != 'carrito') {
								this.$router.push('/carrito');
							} else {
								this.$router.push('/');
							}
						} else {
							if (this.$route.name != 'index') {
								this.$router.push('/');
							} else {
								this.$router.push('/categorias');
							}
						}
					})
					.catch((error) => {
						this.isLoading = false;
						this.isDisabled = false;
						this.$nuxt.$emit(
							'error-notify',
							'Usuario o contraseña incorrectos.'
						);
					});
			} else {
				const inputForm = Object.keys(this.form);
				for (let i = 0; i < inputForm.length; i++) {
					const element = inputForm[i];
					if (this.$refs[element].hasError) {
						this.$refs[element].focus();
						return;
					}
				}
			}
		},
		clear() {
			this.form.email = '';
			this.form.password = '';
			this.$refs.observer.reset();
		},
		closeSiderLogin() {
			this.$observer.showLogin = false
		},
	},
};
</script>

<style lang="scss" scoped>
label.sider {
	font-weight: normal;
	font-size: $fs-sm;
	color: #3e3e3e;
}

a.link {
	font-weight: normal;
	font-size: $fs-sm;
	text-decoration-line: underline;

	color: #3e3e3e;
}
</style>
