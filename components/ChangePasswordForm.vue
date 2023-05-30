<template>
	<div>
		<v-row>
			<v-col cols="12">
				<h1 class="text-center title-primary">
					Cambiar <span>contraseña</span>
				</h1>
			</v-col>
		</v-row>
		<div class="mt-4 content-form mx-auto">
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
								:disabled="isDisabled && invalid"
								depressed
								>Confirmar contraseña</v-btn
							>
						</v-col>
					</v-row>
				</v-form>
			</validation-observer>
		</div>
	</div>
</template>

<script>
	import { ValidationProvider, ValidationObserver } from "vee-validate";

	export default {
  		components: {
    		ValidationProvider,
    		ValidationObserver
  		},
  
		data() {
			return {
      			isDisabled: false,
      			isLoading: false,
      			form: {
        			old_password: null,
        			new_password: null,
        			confirm_new_password: null
      			}
    		}
  		},

  		methods: {
    		async senfForm() {
      			if (await this.$refs.observer.validate()) {
        			this.isDisabled = true
        			this.isLoading = true

					this.$authentication.changePassword(
						this.form
					)
					.then(
						() => this.$router.back()
					)
					.finally(() => {
						this.isLoading = false
						this.isDisabled = false
						this.clear()
					})
      			}
			},

    		clear() {
      			this.form = {}
      			this.$refs.observer.reset()
    		}
  		}
	}
</script>

<style lang="scss" scoped>
a,
button {
	width: 100% !important;
	max-width: 280px !important;
}

.content-form {
	max-width: 481px;
	// border: 1px solid orange;
}
</style>
