<template>
	<section class="pt-6 pb-14">
		<v-row>
			<v-col cols="12" md="12" class="text-center">
				<h2 class="fs-2xl">Estamos para ayudarte</h2>
				<p class="mt-4 fs-md mt-8 d-block">
					Si tienes preguntas sobre tu orden o sobre nuestros productos, déjanos
					tus datos y nuestro equipo resolvera todas tus dudas
				</p>
			</v-col>
		</v-row>
		<div class="content-form mx-auto mt-md-10">
			<validation-observer ref="observer" v-slot="{ invalid }">
				<v-form @submit.prevent="sendForm">
					<v-row class="mt-4">
						<v-col cols="12" md="6" class="py-0">
							<validation-provider
								v-slot="{ errors }"
								name="El nombre"
								:rules="{
									required: true,
									min: 5,
								}"
							>
								<v-text-field
									height="64px"
									ref="name"
									autocomplete="name"
									color="blue-ligth"
									id="name"
									type="text"
									v-model.trim.trim="form.name"
									solo
									flat
									outlined
									:error-messages="errors"
									placeholder="Nombre*"
								/>
							</validation-provider>
						</v-col>
						<v-col cols="12" md="6" class="py-0">
							<validation-provider
								v-slot="{ errors }"
								name="El telefono"
								rules="required"
							>
								<v-text-field
									height="64px"
									autocomplete="tel"
									ref="phone"
									color="blue-ligth"
									id="phone"
									type="text"
									v-model.trim.trim="form.phone"
									solo
									flat
									outlined
									:error-messages="errors"
									placeholder="Teléfono*"
								/>
							</validation-provider>
						</v-col>
						<v-col cols="12" class="py-0">
							<validation-provider
								v-slot="{ errors }"
								name="El correo"
								rules="required|email"
							>
								<v-text-field
									height="64px"
									ref="email"
									autocomplete="email"
									color="blue-ligth"
									id="email"
									type="email"
									v-model.trim.trim="form.email"
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
								v-slot="{ errors }"
								name="El mensaje"
								rules="required"
							>
								<v-textarea
									ref="body"
									outlined
									autocomplete="off"
									v-model.trim="form.body"
									id="body"
									auto-grow
									flat
									solo
									:error-messages="errors"
									placeholder="Escribe tu mensaje*"
								></v-textarea>
							</validation-provider>
						</v-col>
						<v-col cols="12" class="py-0 d-flex justify-center mx-auto">
							<v-btn
								:loading="isLoading"
								:disabled="isDisabled && invalid"
								type="submit"
								depressed
								class="button-primary"
								outlined
								>Enviar</v-btn
							>
						</v-col>
					</v-row>
				</v-form>
			</validation-observer>
		</div>
		<AlertDialog
			@closeAlert="showAlert = false"
			:showAlert="showAlert"
			:titleAlert="titleAlert"
			:textAlert="textAlert"
			:iconAlert="iconAlert"
		/>
	</section>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
	components: {
		ValidationProvider,
		ValidationObserver,
	},
	data() {
		return {
			isDisabled: false,
			isLoading: false,
			form: {
				name: '',
				email: '',
				phone: '',
				body: '',
			},
			showAlert: false,
			titleAlert: '¡Gracias por tu mensaje!',
			textAlert: 'Pronto recibirás respuesta de nuestros ejecutivos ',
			iconAlert: 'like',
			email: '',
		};
	},
	methods: {
		async sendForm() {
			this.isDisabled = true;
			if (await this.$refs.observer.validate()) {
				this.isLoading = true
				this.isDisabled = true

				this.$store.dispatch('contact/contact', this.form)
				  .then(() => {
				    this.clear()
					this.showAlert = true
				  })
				  .catch(e => this.$swal("Error", e, "error"))
				  .finally(() => {
				    this.isLoading = false
				    this.isDisabled = false
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
			this.form.email = '';
			this.form.phone = '';
			this.form.body = '';
			this.$refs.observer.reset();
		},
	},
};
</script>

<style lang="scss" scoped>
button {
	width: 100% !important;
	max-width: 471px !important;
}

h2 {
	font-weight: 700;
	color: #000000;
}

p {
	font-weight: 400;
	text-align: center;
	color: #000000;
}

.content-form {
	max-width: 828px;
	// border: 1px solid orange;
}

@media screen and (min-width: $md) {
}
</style>
