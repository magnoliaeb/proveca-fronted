<template>
	<div class="">
		<!-- <v-row>
			<v-col cols="12">
				<h3 class="text-h5">{{ formTitle }}</h3>
			</v-col>
		</v-row> -->
		<validation-observer ref="observer" v-slot="{ invalid }">
			<v-form @submit.prevent="sendForm">
				<v-row class="">
					<v-col class="py-0" cols="12" sm="12">
						<validation-provider
							v-slot="{ errors }"
							name="El Número de tarjeta"
							rules="required"
						>
							<label for="">Número de tarjeta</label>
							<v-text-field
								solo
								flat
								outlined
								required
								:error-messages="errors"
								height="37px"
								type="text"
								v-model.trim="form.number"
								autocomplete="false"
							/>
						</validation-provider>
					</v-col>
					<v-col class="py-0" cols="12" sm="12">
						<validation-provider
							v-slot="{ errors }"
							name="Nombre del cliente"
							rules="required"
						>
							<label for="">Nombre del cliente</label>
							<v-text-field
								solo
								flat
								outlined
								required
								:error-messages="errors"
								height="37px"
								type="text"
								v-model.trim="form.name"
								autocomplete="false"
							/>
						</validation-provider>
					</v-col>

					<v-col class="py-0" cols="6" md="4">
						<validation-provider
							v-slot="{ errors }"
							name="El mes"
							rules="required"
						>
							<label for="">Mes</label>
							<v-text-field
								solo
								flat
								outlined
								required
								:error-messages="errors"
								height="37px"
								type="text"
								v-model.trim="form.month"
								autocomplete="false"
							/>
						</validation-provider>
					</v-col>
					<v-col class="py-0" cols="6" md="4">
						<validation-provider
							v-slot="{ errors }"
							name="El año"
							rules="required"
						>
							<label for="">Año</label>
							<v-text-field
								solo
								flat
								outlined
								required
								:error-messages="errors"
								height="37px"
								type="text"
								v-model.trim="form.year"
								autocomplete="false"
							/>
						</validation-provider>
					</v-col>
					<v-col class="py-0" cols="12" md="4">
						<validation-provider
							v-slot="{ errors }"
							name="El cvv"
							rules="required"
						>
							<label for="">CVV</label>
							<v-text-field
								solo
								flat
								outlined
								required
								:error-messages="errors"
								height="37px"
								type="text"
								v-model.trim="form.cvv"
								autocomplete="false"
							/>
						</validation-provider>
					</v-col>
					<v-col class="py-0" cols="12">
						<validation-provider
							v-slot="{ errors }"
							name="La dirección"
							rules="requiredF"
						>
							<label for="">Dirección</label>
							<v-text-field
								solo
								flat
								outlined
								required
								:error-messages="errors"
								height="37px"
								v-model.trim="form.address"
								autocomplete="false"
							/>
						</validation-provider>
					</v-col>

					<v-col cols="12" sm="12" class="">
						<v-btn
							class="button-primary"
							height="46px"
							:loading="isLoading"
							type="submit"
							:disabled="isDisabled && invalid"
							depressed
							block
							>Guardar datos</v-btn
						>
					</v-col>
				</v-row>
			</v-form>
		</validation-observer>
	</div>
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
			form: {
				number: '',
				name: '',
				month: '',
				year: '',
				address: '',
				cvv: '',
			},
			editedIndex: -1,
			isLoading: false,
			isDisabled: false,
			radios: undefined,
		};
	},
	computed: {
		formTitle() {
			return this.editedIndex === -1
				? 'Nuevo método de pago'
				: 'Editar método de pago';
		},
	},
	methods: {
		async sendForm() {
			this.isDisabled = true;
			if (await this.$refs.observer.validate()) {
				this.isLoading = true;
				// this.$nuxt.$emit("success-notify", "Pago realizado");

				// setTimeout(() => {
				//   this.isLoading = false;
				// }, 2000);
				// this.clear();
				// this.isDisabled = false;
				if (this.editedIndex > -1) {
					console.log('editar');
					// Object.assign(this.desserts[this.editedIndex], this.editedItem)
				} else {
					console.log('agregar');
					// this.desserts.push(this.editedItem)
				}
				this.close();
			}
		},

		clear() {
			this.$refs.observer.reset();
		},
		close() {
			this.$emit('closeDIalog');
		},
	},
};
</script>

<style lang="scss" scoped>
label {
	font-weight: 400;
	font-size: $fs-base;
	color: #000000;
}

button {
	width: 100%;
	max-width: 503px;
}
</style>
