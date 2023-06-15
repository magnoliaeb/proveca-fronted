<template>
	<v-dialog :value="dialogBirthdate" max-width="430">
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
						<h2 class="text-center">Editar fecha de nacimiento</h2>
					</v-col>
				</v-row>
			</v-card-title>
			<v-card-text>
				<div class="">
					<validation-observer ref="observer" v-slot="{ invalid }">
						<v-form @submit.prevent="updateProfile">
							<v-row class="">
								<v-col cols="12" class="py-0">
									<validation-provider
										v-slot="{ errors }"
										name="La fecha"
										rules="required"
									>
										<v-text-field
											outlined
											solo
											flat
											required
											height="37px"
											placeholder="Fecha de nacimiento"
											ref="birthdate"
											id="birthdate"
											type="date"
											v-model.trim="form.birthdate"
											:error-messages="errors"
										/>
									</validation-provider>
								</v-col>

								<v-col cols="12" md="12" class="d-flex justify-center">
									<v-btn
										block
										:loading="isLoading"
										type="submit"
										:disabled="isDisabled && invalid"
										depressed
										class="button-primary"
										>Actualizar</v-btn
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
			form: this.$util.clone(this.$auth.user),
		};
	},
	props: {
		dialogBirthdate: {
			type: Boolean,
			default: false,
		},
	},

	components: {
		ValidationProvider,
		ValidationObserver,
	},

	methods: {
		async updateProfile() {
			this.isDisabled = true;
			if (await this.$refs.observer.validate()) {
				this.isDisabled = true;
				this.isLoading = true;

				this.$authentication
					.updateProfile(this.form)
					.finally(() => {
						this.isDisabled = false;
						this.isLoading = false;
					});
			} else {
				Object.values(this.$refs).forEach((ref) => {
					if (ref.hasError) ref.focus();
				});
			}
		},

		clear() {
			this.form.birthdate = '';
			this.$refs.observer.reset();
		},
		close() {
			this.$emit('close');
		},

		clickOutside(event) {
			if (event.target.id !== 'btn-birthdate') {
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
