<template>
	<div>
		<client-only>
			<v-btn
				color="primary"
				class="px-1 px-sm-2"
				block
				depressed
				text
				@click.stop="$observer.openPostcodesDialog"
				:large="$vuetify.breakpoint.smAndUp"
			>
				<img
					class="mr-1 mr-sm-3"
					src="../assets/imgs/iconos/map-ping.svg"
					alt="perfil"
				/>
				<p v-if="!hasCode" class="text-capitalize text-left my-0">
					<span>ingresa tu </span> <br class="d-none d-sm-block" />
					código postal
				</p>
				<p v-else class="text-capitalize text-left my-0">
					C.P. {{ $observer.postcode }}
				</p>
			</v-btn>

			<v-dialog
				v-model="$observer.showPostcodesDialog"
				transition="dialog-bottom-transition"
				max-width="560px"
				content-class="dialog-address-box"
			>
				<v-card class="py-2 px-md-6 py-md-8">
					<v-btn
						absolute
						right
						top
						color="#000"
						@click="$observer.hidePostcodesDialog"
						text
						icon
						depressed
						small
					>
						<v-icon>mdi-close</v-icon>
					</v-btn>

					<v-card-title class="d-flex justify-center">
						<h2 class="text-center mb-4">
							Introduce tu código postal de entrega
						</h2>
					</v-card-title>

					<v-card-text>
						<v-form @submit.prevent="sendForm">
							<v-row>
								<v-col class="py-0" cols="12">
									<v-text-field
										solo
										flat
										outlined
										required
										height="37px"
										type="text"
										v-model.trim="postcode"
										autocomplete="false"
										placeholder="Código postal"
										prepend-inner-icon="mdi-map-marker"
										:disabled="isDisabled"
									>
									</v-text-field>
								</v-col>
							</v-row>
						</v-form>

						<v-btn
							class="current mt-8 justify-space-between"
							depressed
							@click="useCurrentAdresss"
							block
							large
							tile
							:disabled="isDisabled"
						>
							<div class="d-flex align-center">
								<img
									class="mr-3 d-none d-sm-block"
									width="20px"
									height="20px"
									src="../assets/imgs/iconos/focus.svg"
									alt="focus"
								/>
								<span> Utilizar mi ubicacion </span>
							</div>
							<img
								class=""
								width="20px"
								height="20px"
								src="../assets/imgs/iconos/chevron-right.svg"
								alt="chevron-right"
							/>
						</v-btn>

						<div v-if="hasCode">
							<br />
							Código postal: {{ $observer.postcode }}
						</div>
					</v-card-text>
				</v-card>
			</v-dialog>
		</client-only>
	</div>
</template>

<script>
export default {
	data() {
		return {
			postcode: null,
			isDisabled: false,
		};
	},

	computed: {
		hasCode() {
			return Boolean(this.$observer.postcode);
		},
	},

	methods: {
		sendForm() {
			this.isDisabled = true;

			this.setPostcode(this.postcode);
		},

		useCurrentAdresss() {
			this.isDisabled = true;

			this.$google.geocodeByCurrentDevicePosition().then(() => {
				if (this.$google.lastGeocode?.postal_code) {
					this.setPostcode(this.$google.lastGeocode.postal_code);
				} else {
					this.isDisabled = false;
					this.$nuxt.$emit('error-notify', 'No podemos obtener su C.P');
				}
			});
		},

		setPostcode(postcode) {
			this.$observer.setPostcode(postcode).finally(() => {
				this.isDisabled = false;
			});
		},
	},
};
</script>

<style lang="scss" scoped>
h2 {
	font-weight: 900;
	font-size: $fs-xl;

	color: #000000;
}
button.add {
	font-weight: 400 !important;
	font-size: $fs-sm !important;
	line-height: 21px !important;
	/* identical to box height */

	color: #000000 !important;
	background: #f7f7f7 !important;
	border: 1px solid #959595 !important;
	border-radius: 10px !important;
	height: 50px !important;
	text-transform: initial !important;
}
button.current {
	font-weight: 400 !important;
	font-size: $fs-sm !important;
	line-height: 21px !important;
	/* identical to box height */

	color: #000000 !important;
	border-bottom: 0.5px solid #7e7e7e !important;
	height: 50px !important;
	text-transform: initial !important;
	background-color: transparent !important;
}

p {
	font-weight: 800;
	font-size: $fs-xs !important;

	color: #434343;
}
@media screen and (min-width: $md) {
}
</style>
