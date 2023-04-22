<template>
	<div class="">
		<validation-observer ref="observer" v-slot="{ invalid }">
			<v-form @submit.prevent="sendForm">
				<v-row class="">
					<v-col class="py-0" cols="12" sm="12">
						<validation-provider
							v-slot="{ errors }"
							name="La calle y número *"
							rules="requiredF"
						>
							<label for="">Calle y número <span>*</span></label>
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
							name="Código postal"
							rules="required"
						>
							<label for="">Código postal <span>*</span> </label>
							<v-text-field
								solo
								flat
								outlined
								required
								:error-messages="errors"
								height="37px"
								type="text"
								v-model.trim="form.code"
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
							>Buscar</v-btn
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
				code: '',
			},
			isLoading: false,
			isDisabled: false,
		};
	},

	methods: {
		async sendForm() {
			this.isDisabled = true;
			if (await this.$refs.observer.validate()) {
				// this.isLoading = true;
				// this.$nuxt.$emit("success-notify", "Pago realizado");

				// setTimeout(() => {
				//   this.isLoading = false;
				// }, 2000);
				// this.clear();
				// this.isDisabled = false;

				// this.isLoading = true
				// this.isDisabled = true

				let street = `${this.form.number}, cp ${this.form.code}`

				this.$google.geocodeByAddress(street, {first: true, customObject: true})
					.then(() => {
						this.isLoading = false
						this.isDisabled = false
						this.$nuxt.$emit('success-notify', '¡Listo!')

						this.$emit('closeModel')
					})
			}
		},

		clear() {
			this.$refs.observer.reset();
		},
	},
};
</script>

<style lang="scss" scoped>
label {
	font-weight: 400;
	font-size: $fs-base;
	color: #000000;
	span {
		color: $primary;
	}
}

button {
	width: 100%;
	max-width: 503px;
}
</style>
