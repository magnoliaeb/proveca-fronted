<template>
	<v-form class="register-form" @submit.prevent="registerUser">
		<validation-observer ref="observer" v-slot="{ invalid }">
			<div class="content-form mx-auto">
				<v-row class="">
					<v-col cols="12" class="py-0">
						<validation-provider
							v-slot="{ errors }"
							name="El nombre"
							rules="required"
						>
							<label v-if="hasLabel" for="">Nombre* </label>
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
								:placeholder="!hasLabel ? 'Nombre*' : null"
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
							<label v-if="hasLabel" for="">Correo electrónico* </label>

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
								:placeholder="!hasLabel ? 'Correo electrónico*' : null"
							/>
						</validation-provider>
					</v-col>

					<v-col cols="12" class="py-0">
						<validation-provider
							v-slot="{ errors }"
							name="El celular"
							autocomplete="phone"
							:rules="{
								required: true,
								numeric: true,
							}"
						>
							<label v-if="hasLabel" for="">Celular* </label>

							<v-text-field
								color="blue-ligth"
								id="phone"
								ref="phone"
								v-model.trim="form.phone"
								solo
								flat
								outlined
								:error-messages="errors"
								:placeholder="!hasLabel ? 'Celular*' : null"
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
							<label v-if="hasLabel" for="">Contraseña* </label>

							<v-text-field
								:append-icon="showPassword ? 'mdi-eye-off-outline' : 'mdi-eye'"
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
								:placeholder="!hasLabel ? 'Contraseña*' : null"
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
							>Continuar</v-btn
						>
					</v-col>
				</v-row>
			</div>
			<v-row class="justify-center my-6">
				<v-col cols="12" md="auto" class="text-center">
					<nuxt-link class="fs-base" @click.native="$observer.openLogin" to="">
						¿Ya tienes cuenta? <span>Inicia Sesión</span>
					</nuxt-link>
				</v-col>
			</v-row>
		</validation-observer>
	</v-form>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
	name: 'RegisterForm',
	components: {
		ValidationProvider,
		ValidationObserver,
	},
	props: {
		hasLabel: {
			type: Boolean,
			default: false,
		},
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
				confirm_password: '',
			},
		};
	},
	methods: {
		async registerUser() {
			this.isDisabled = true;

			if (await this.$refs.observer.validate()) {
				this.isLoading = true;
				this.isDisabled = true;

				this.form.confirm_password = this.form.password;

				this.$authentication.register(this.form).catch((error) => {
					this.isLoading = false;
					this.isDisabled = false;
				});
			} else {
				Object.values(this.$refs).forEach((ref) => {
					if (ref.hasError) ref.focus();
				});
			}
		},

		clear() {
			this.form.name = '';
			this.form.phone = '';
			this.form.email = '';
			this.form.password = '';
			this.form.confirm_password = '';
			this.$refs.observer.reset();
		},
	},
};
</script>

<style lang="scss" scoped>
.register-form {
	.content-form {
		max-width: 481px;
	}

	a {
		font-weight: 500;
		color: #000;
		font-size: $fs-sm;
		span {
			color: #2cafe5;
			// text-decoration: underline;
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
}
</style>
