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
									id="currentPassword"
									ref="currentPassword"
									type="password"
									v-model.trim="form.currentPassword"
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
									id="newPassword"
									ref="newPassword"
									type="password"
									v-model.trim="form.newPassword"
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
									ref="confirmNewPassword"
									label="Repetir contraseña"
									id="confirmNewPassword"
									type="password"
									v-model.trim="form.confirmNewPassword"
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
        			currentPassword: null,
        			newPassword: null,
        			confirmNewPassword: null
      			}
    		}
  		},

  		methods: {
    		async senfForm() {
      			if (await this.$refs.observer.validate()) {
        			this.isDisabled = true
        			this.isLoading = true

        			await this.$store
          				.dispatch("identity/changePassword", {
            				$nuxt: this.$nuxt,
            				data: {
              					old_password: this.form.currentPassword,
              					new_password: this.form.newPassword
            				},
          				})
						.then(() => this.$router.back())
          				.finally(() => this.clear())

        			this.isLoading = false
        			this.isDisabled = false
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
