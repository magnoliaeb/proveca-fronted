<template>
	<section class="">
		<div class="content">
			<v-row class="mb-6">
				<v-col cols="12" class="text-center">
					<h1 class="mb-6 title-primary">Regístrate</h1>
					<p>
						Regístrate para que tengas grandes beneficios así como tener
						registro de tus pedidos, direcciones y métodos de pago
					</p>
				</v-col>
			</v-row>
			<div class="content-form mx-auto">
				<validation-observer ref="observer" v-slot="{ invalid }">
					<v-form @submit.prevent="registerUser">
						<v-row class="">
							<v-col cols="12" class="py-0">
								<validation-provider
									v-slot="{ errors }"
									name="El nombre"
									rules="required"
								>
									<v-text-field
										autocomplete="given-name"
										color="blue-ligth"
										id="name"
										type="text"
										ref="name"
										v-model.trim="form.name"
										solo
										flat
										outlined
										:error-messages="errors"
										placeholder="Nombre*"
									/>
								</validation-provider>
							</v-col>

							<v-col cols="12" class="py-0">
								<validation-provider
									v-slot="{ errors }"
									name="El correo"
									autocomplete="email"
									rules="required|email"
								>
									<v-text-field
										color="blue-ligth"
										id="email"
										type="email"
										ref="email"
										v-model.trim="form.email"
										solo
										flat
										outlined
										:error-messages="errors"
										placeholder="Correo electrónico*"
									/>
								</validation-provider>
							</v-col>
							<v-col cols="12" class="py-0">
								<validation-provider
									autocomplete="new-password"
									vid="confirmation"
									v-slot="{ errors }"
									name="La contraseña"
									:rules="{
										requiredF: true,
										min: 6,
									}"
								>
									<v-text-field
										:append-icon="
											showPassword ? 'mdi-eye-off-outline' : 'mdi-eye'
										"
										@click:append="showPassword = !showPassword"
										color="blue-ligth"
										id="password"
										:type="showPassword ? 'text' : 'password'"
										ref="password"
										v-model.trim="form.password"
										solo
										flat
										outlined
										:error-messages="errors"
										placeholder="Contraseña*"
									/>
								</validation-provider>
							</v-col>

							<v-col cols="12" md="12" class="py-0">
								<v-btn
									:loading="isLoading"
									:disabled="isDisabled && invalid"
									type="submit"
									depressed
									block
									class="button-primary"
									>Continuar</v-btn
								>
							</v-col>
						</v-row>
					</v-form>
				</validation-observer>
			</div>
			<v-row class="justify-center my-6">
				<v-col cols="12" md="auto" class="text-center">
					<nuxt-link to="/iniciar-sesion"
						>¿Ya tienes cuenta? <span>Inicia Sesión</span></nuxt-link
					>
				</v-col>
			</v-row>
		</div>
	</section>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
	name: 'RegisterForm',
	components: {
		ValidationProvider,
		ValidationObserver,
	},
	data() {
		return {
			isDisabled: false,
			isLoading: false,
			showPassword: false,
			form: {
				name: '',
				phone: '',
				email: '',
				password: '',
				password_confirmation: '',
			},
		};
	},
	methods: {
		async registerUser() {
			this.isDisabled = true;

			if (await this.$refs.observer.validate()) {
				this.isLoading = true;

				this.$app.$auth.register(this.form).catch(() => {
					this.isLoading = false;
					this.isDisabled = false;
					//this.clear()
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
			this.form.name = '';
			this.form.phone = '';
			this.form.email = '';
			this.form.password = '';
			this.form.password_confirmation = '';
			this.$refs.observer.reset();
		},
	},
};
</script>

<style lang="scss" scoped>
* {
	// border: 1px solid red;
}

p {
	font-weight: 300;
	font-size: 18px;
	line-height: 23px;
	color: #000000;
}

.content-form {
	max-width: 481px;
}

a {
	font-weight: 500;
	font-size: 18px;
	line-height: 23px;
	color: #000000;
	span {
		color: #2cafe5;
		text-decoration: underline;
	}
}
</style>
