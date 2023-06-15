<template>
	<v-dialog :value="dialogPassword" max-width="430">
		<v-card v-click-outside="clickOutside">
			<v-btn
				absolute
				top
				left
				color="#000"
				@click="close"
				text
				icon
				depressed
				small
			>
				<v-icon>mdi-close</v-icon>
			</v-btn>
			<v-card-title>
				<v-row class="justify-center">
					<v-col cols="12">
						<h2 class="text-center">Editar contraseña</h2>
					</v-col>
				</v-row>
			</v-card-title>
			<v-card-text>
				<div class="">
					<validation-observer ref="observer" v-slot="{ invalid }">
						<v-form @submit.prevent="senfForm">
							<v-row class="">
								<v-col cols="12" class="py-0">
									<validation-provider
										v-slot="{ errors }"
										name="Contraseña actual"
										:rules="{
											requiredF: true,
											min: 6,
											max: 10,
										}"
										vid="confirmation"
									>
										<v-text-field
											outlined
											solo
											flat
											label="Contraseña actual"
											id="old_password"
											ref="old_password"
											type="password"
											v-model.trim="form.old_password"
											:error-messages="errors"
										/>
									</validation-provider>
								</v-col>

								<v-col cols="12" class="py-0">
									<validation-provider
										v-slot="{ errors }"
										name="Nueva contraseña"
										:rules="{
											requiredF: true,
											min: 6,
											max: 10,
										}"
										vid="confirmation"
									>
										<v-text-field
											outlined
											solo
											flat
											label="Nueva contraseña"
											id="new_password"
											ref="new_password"
											type="password"
											v-model.trim="form.new_password"
											:error-messages="errors"
										/>
									</validation-provider>
								</v-col>

								<v-col cols="12" class="py-0">
									<validation-provider
										v-slot="{ errors }"
										name="Confirmar la nueva contraseña"
										:rules="{ requiredF: true, confirmed: 'confirmation' }"
									>
										<v-text-field
											outlined
											solo
											flat
											ref="confirm_new_password"
											label="Repetir contraseña"
											id="confirm_new_password"
											type="password"
											v-model.trim="form.confirm_new_password"
											:error-messages="errors"
										/>
									</validation-provider>
								</v-col>

								<v-col cols="12" md="" class="d-flex justify-center">
									<v-btn
										class="button-primary"
										:loading="isLoading"
										type="submit"
										block
										:disabled="isDisabled && invalid"
										depressed
										>Confirmar contraseña</v-btn
									>
								</v-col>
							</v-row>
						</v-form>
					</validation-observer>
				</div>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
	data() {
		return {
			isDisabled: false,
			isLoading: false,
			form: {
				old_password: null,
				new_password: null,
				confirm_new_password: null,
			},
		};
	},

	props: {
		dialogPassword: {
			type: Boolean,
			default: false,
		},
	},

	components: {
		ValidationProvider,
		ValidationObserver,
	},

	methods: {
		async senfForm() {
			if (await this.$refs.observer.validate()) {
				this.isDisabled = true;
				this.isLoading = true;

				this.$authentication
					.changePassword(this.form)
					.finally(() => {
						this.isLoading = false;
						this.isDisabled = false;
						this.clear();
					});
			}
		},

		clear() {
			this.form = {};
			this.$refs.observer.reset();
		},
		close() {
			this.$emit('close');
		},

		clickOutside(event) {
			if (event.target.id !== 'btn-password') {
				this.close();
			}
		},
	},
};
</script>

<style lang="scss" scoped>
h2 {
	font-weight: 700;
	font-size: $fs-lg;
	// line-height: 36px;
	text-transform: uppercase;
	color: #2cafe5;
}
// a,
// button {
// 	width: 100% !important;
// 	max-width: 350px !important;
// }

// @media screen and (min-width: $sm) {

// }
</style>
