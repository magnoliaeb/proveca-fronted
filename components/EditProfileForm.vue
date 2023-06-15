<template>
	<div>
		<v-row class="justify-center">
			<v-col cols="12">
				<h1 class="text-center title-primary">Editar datos</h1>
			</v-col>
		</v-row>
		<div class="mt-4 content-form mx-auto">
			<validation-observer ref="observer" v-slot="{ invalid }">
				<v-form @submit.prevent="updateProfile">
					<v-row class="">
						<v-col cols="12" class="py-0">
							<validation-provider
								v-slot="{ errors }"
								name="El teléfono"
								:rules="{
									required: true,
								}"
							>
								<v-text-field
									outlined
									solo
									flat
									required
									height="37px"
									id="phone"
									type="text"
									placeholder="Teléfono"
									ref="phone"
									v-model.trim="form.phone"
									:error-messages="errors"
								/>
							</validation-provider>
						</v-col>
						<v-col cols="12" class="py-0">
							<validation-provider
								v-slot="{ errors }"
								name="El nombre"
								rules="required"
							>
								<v-text-field
									outlined
									solo
									flat
									required
									height="37px"
									ref="name"
									placeholder="Nombre"
									id="name"
									type="text"
									v-model.trim="form.name"
									:error-messages="errors"
								/>
							</validation-provider>
						</v-col>
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

						<!-- <v-col cols="12" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="El RFC"
                :rules="{ rfcValidate: true }"
              >
                <v-text-field outlined solo flat
                  height="37px"
                  placeholder="RFC"
                  id="vat"
                  type="text"
                  ref="vat"
                  v-model="form.vat"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col> -->

						<v-col cols="12" md="12" class="d-flex justify-center">
							<v-btn
								:loading="isLoading"
								type="submit"
								:disabled="isDisabled && invalid"
								depressed
								class="button-primary"
								>Actualizar perfil</v-btn
							>
						</v-col>
					</v-row>
				</v-form>
			</validation-observer>
		</div>
	</div>
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
					.then(() => this.$router.back())
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
			this.form.email = '';
			this.form.phone = '';
			this.form.name = '';
			this.form.birthdate = '';
			this.$refs.observer.reset();
		},
	},
};
</script>

<style lang="scss" scoped>
a,
button {
	width: 100% !important;
	max-width: 350px !important;
}

.content-form {
	max-width: 481px;
}

// @media screen and (min-width: $sm) {

// }
</style>
