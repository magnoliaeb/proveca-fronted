<template>
	<v-dialog :value="dialogAddress" max-width="430">
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
						<h2 class="text-center">Crear nueva dirección</h2>
					</v-col>
				</v-row>
			</v-card-title>
			<v-card-text>
				<div class="">
					<validation-observer ref="observer" v-slot="{ invalid }">
						<v-form @submit.prevent="sendForm">
							<v-row>
								<v-col cols="12" class="py-0">
									<validation-provider
										v-slot="{ errors }"
										name="El nombre de la dirección"
										rules="required"
									>
										<v-text-field
											solo
											flat
											outlined
											required
											:error-messages="errors"
											type="text"
											ref="name"
											v-model.trim="form.name"
											placeholder="Nombre de la dirección"
										/>
									</validation-provider>
								</v-col>

								<v-col cols="12" class="py-0">
									<validation-provider
										v-slot="{ errors }"
										name="La calle y número"
										rules="required"
									>
										<v-text-field
											solo
											flat
											outlined
											:error-messages="errors"
											id="street"
											type="text"
											v-model.trim="form.street"
											ref="street"
											placeholder="Calle y número"
										/>
									</validation-provider>
								</v-col>

								<v-col cols="12" lg="12" class="py-0">
									<validation-provider
										v-slot="{ errors }"
										name="El apartamento / habitación / negocio"
										rules="required"
									>
										<v-text-field
											solo
											flat
											outlined
											:error-messages="errors"
											id="street2"
											type="text"
											v-model.trim="form.street2"
											ref="street2"
											placeholder="Apartamento / habitación / negocio"
										/>
									</validation-provider>
								</v-col>

								<v-col cols="12" lg="12" class="py-0">
									<validation-provider
										v-slot="{ errors }"
										name="La localidad / ciudad"
										rules="requiredF"
									>
										<v-text-field
											solo
											flat
											outlined
											:error-messages="errors"
											id="city"
											type="text"
											v-model.trim="form.city"
											ref="city"
											placeholder="Localidad / ciudad"
										/>
									</validation-provider>
								</v-col>

								<v-col cols="12" md="12" class="py-0">
									<validation-provider
										v-slot="{ errors }"
										name="El país"
										rules="required"
									>
										<v-select
											solo
											flat
											outlined
											v-model="form.country_id"
											ref="country_id"
											:error-messages="errors"
											:items="countries"
											placeholder="País"
											item-text="name"
											item-value="id"
											v-on:change="loadStates"
										>
											<template v-slot:append>
												<v-icon class="icon"> mdi-chevron-down </v-icon>
											</template>
										</v-select>
									</validation-provider>
								</v-col>

								<v-col cols="12" md="12" class="py-0">
									<validation-provider
										v-slot="{ errors }"
										name="El estado"
										rules="required"
									>
										<v-select
											solo
											flat
											outlined
											v-model="form.state_id"
											ref="state_id"
											:error-messages="errors"
											:items="states"
											placeholder="Estado"
											item-text="name"
											item-value="id"
										>
											<template v-slot:append>
												<v-icon class="icon"> mdi-chevron-down </v-icon>
											</template>
										</v-select>
									</validation-provider>
								</v-col>

								<v-col cols="12" sm="12" class="py-0">
									<validation-provider
										v-slot="{ errors }"
										name="El código postal"
										:rules="{
											required: true,
										}"
									>
										<v-text-field
											solo
											flat
											outlined
											:error-messages="errors"
											id="zip"
											type="text"
											v-model.trim="form.zip"
											ref="zip"
											placeholder="Código postal"
										/>
									</validation-provider>
								</v-col>

								<!-- <v-col
						v-if="$google.lastGeocode && $google.lastGeocode.postal_code"
						cols="12"
						class="text-right"
					>
						<v-btn
							@click="useSavedAddress"
							class="button-primary"
							depressed
							style="height: 40px !important; width: auto !important;"
						>
							Usar C.P. {{ $google.lastGeocode.postal_code }}
						</v-btn>
					</v-col> -->
							</v-row>

							<v-row class="mt-2 mt-md-4">
								<v-col cols="12" sm="12" class="">
									<v-btn
										block
										class="button-primary"
										:loading="isLoading"
										:disabled="isLoading"
										type="submit"
										depressed
										>Agregar dirección</v-btn
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
			states: [],
			form: {},
		};
	},
	props: {
		dialogAddress: {
			type: Boolean,
			default: false,
		},
	},

	components: {
		ValidationProvider,
		ValidationObserver,
	},
	computed: {
		address() {
			return this.$store.state.identity.addresses.find(
				(a) => a.id == this.$util.getSlug()
			);
		},

		countries() {
			return this.$store.getters['identity/getCountries'];
		},
	},

	methods: {
		async loadStates() {
			this.states = await this.$store.dispatch(
				'identity/loadStates',
				this.form.country_id
			);
		},

		async sendForm() {
			this.isDisabled = true;
			if (await this.$refs.observer.validate()) {
				try {
					this.isLoading = true;
					if (this.address) {
						await this.$store
							.dispatch('identity/updateAddress', {
								$nuxt: this.$nuxt,
								id: this.address.id,
								data: this.form,
							})
							.then(() => this.$router.back())
							.finally(() => (this.isLoading = false));
					} else {
						await this.create();
					}

					this.isDisabled = false;
				} catch (err) {
					this.$nuxt.$emit('error-notify', 'Error al guardar la dirección.');
				}
			}
		},

		async useSavedAddress() {
			this.$set(this.form, 'street', this.$google.lastGeocode.route);
			this.$set(this.form, 'street2', this.$google.lastGeocode.street_number);
			this.$set(this.form, 'city', this.$google.lastGeocode.locality);
			this.$set(this.form, 'zip', this.$google.lastGeocode.postal_code);

			if (Boolean(this.countries.length)) {
				let country = this.countries.find((c) => c.name == 'Mexico');

				if (country) {
					this.$set(this.form, 'country_id', country.id);

					await this.loadStates();

					let state = this.states.find(
						(s) =>
							s.name == this.$google.lastGeocode.administrative_area_level_1
					);

					if (state) {
						this.$set(this.form, 'state_id', state.id);
					}
				}
			}
		},

		create() {
			this.$store
				.dispatch('identity/addAddress', {
					$nuxt: this.$nuxt,
					data: this.form,
				})
				.then((address) => {
					this.clear();

					this.$store.dispatch('cart/setShippingAddress', {
						$nuxt: this.$nuxt,
						address_id: address.id,
						dontEmit: true,
					});

					this.$router.back();
				})
				.finally(() => (this.isLoading = false));
		},
		close() {
			this.$emit('close');
		},

		clickOutside(event) {
			if (event.target.id !== 'btn-new-address') {
				this.close();
			}
		},

		clear() {
			this.form = {};
			// this.$refs.observer.reset();
		},
	},

	async mounted() {
		this.clear();
		// if (this.address) {
		// 	try {
		// 		this.form.type = this.address.type;
		// 		// this.form.vat = this.address.vat;
		// 		this.form.name = this.address.name;
		// 		this.form.street = this.address.street;
		// 		this.form.street2 = this.address.street2;
		// 		this.form.country_id = this.address.country_id[0];
		// 		this.states = await this.$axios.get(
		// 			`/catalog/country/${this.form.country_id}`
		// 		);
		// 		this.form.state_id = this.address.state_id[0];
		// 		this.form.city = this.address.city;
		// 		this.form.zip = this.address.zip;
		// 	} catch (e) {
		// 		this.goBack(-1);
		// 	}
		// }
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
