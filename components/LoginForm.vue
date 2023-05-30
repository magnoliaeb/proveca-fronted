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
							<v-text-field
								label="Correo electrónico"
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
							<v-text-field
								label="Contraseña"
								required
								ref="password"
								id="password"
								:type="showIconEye ? 'text' : 'password'"
								class=""
								v-model.trim="form.password"
								solo
								flat
								height="37px"
								outlined
								:append-icon="
									!showIconEye ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
								"
								@click:append="showPassword"
								:error-messages="errors"
							/>
						</validation-provider>
					</v-col>
					<v-col cols="12" class="py-0">
						<p>
							¿Olvidaste tu contraseña?
							<nuxt-link
								@click.native="closeSiderLogin"
								:to="{ name: 'solicitar-contrasena' }"
								>Restablecerlo</nuxt-link
							>
						</p>
					</v-col>

					<v-col class="" cols="12">
						<v-btn
							:loading="isLoading"
							:disabled="isDisabled && invalid"
							type="submit"
							block
							depressed
						>
							Iniciar Sesión
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
			showIconEye: false,
			form: {
				email: '',
				password: '',
			},
		};
	},
	methods: {
		async loginUser() {
			if (await this.$refs.observer.validate()) {
				this.isDisabled = true
				this.isLoading = true

				this.$authentication.loginWithCredentials(
					this.form
				)
				.catch(error => {
					this.isLoading = false
					this.isDisabled = false
				})
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
			this.$observer.showLogin = false;
		},
		showPassword() {
			this.showIconEye = !this.showIconEye;
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

p {
	a {
		font-weight: 500;
		font-size: $fs-sm;
		color: $primary;
	}
}
button {
	background: $primary !important;
	border-radius: 12px !important;
	font-weight: 800 !important;
	font-size: $fs-base !important;
	height: 50px !important;
	color: white !important;
	text-transform: inherit !important;
}
</style>
