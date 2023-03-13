<template>
	<div>
		<client-only>
			<v-btn
				color="primary"
				class=""
				block
				depressed
				text
				@click.stop="dialog = true"
				large
			>
				<img
					class="mr-3"
					src="../assets/imgs/iconos/map-ping.svg"
					alt="perfil"
				/>
				<p v-if="!hasCode" class="text-capitalize text-left my-0">
					<span>ingresa tu </span> <br />
					ubicación
				</p>
				<p v-else class="text-capitalize text-left my-0">C.P. 44210</p>
			</v-btn>
			<v-dialog
				v-model="dialog"
				transition="dialog-bottom-transition"
				max-width="560px"
				content-class="dialog-address-box"
			>
				<v-card v-model="dialog" class="py-2 px-md-6 py-md-8">
					<v-btn
						absolute
						right
						top
						color="#000"
						@click="closeModel"
						text
						icon
						depressed
						small
					>
						<v-icon>mdi-close</v-icon>
					</v-btn>
					<v-card-title class="d-flex justify-center">
						<h2 class="text-center mb-4">
							Selecciona una dirección de entrega
						</h2>
					</v-card-title>
					<v-window v-model="step">
						<v-window-item :value="1">
							<v-card-text>
								<v-btn
									class="add justify-start text-break"
									depressed
									@click="step = 2"
									block
									large
								>
									<img
										class="mr-3 d-none d-sm-block"
										width="20px"
										height="20px"
										src="../assets/imgs/iconos/ping-black.svg"
										alt="ping"
									/>
									Agregar una nueva dirección</v-btn
								>
								<v-btn
									class="current mt-8 justify-space-between"
									depressed
									@click="dialog.value = false"
									block
									large
									tile
								>
									<div class="d-flex align-center">
										<img
											class="mr-3 d-none d-sm-block"
											width="20px"
											height="20px"
											src="../assets/imgs/iconos/focus.svg"
											alt="focus"
										/>
										<span>Utilizar mi dirección actual</span>
									</div>
									<img
										class=""
										width="20px"
										height="20px"
										src="../assets/imgs/iconos/chevron-right.svg"
										alt="chevron-right"
									/>
									<!-- <v-icon icon="mdi-chevron-right"></v-icon> -->
								</v-btn>
							</v-card-text>
						</v-window-item>

						<v-window-item :value="2">
							<v-card-text>
								<CardFormAddress />
							</v-card-text>
						</v-window-item>
					</v-window>
				</v-card>
			</v-dialog>
		</client-only>
	</div>
</template>

<script>
import CardFormAddress from './CardFormAddress.vue';
export default {
	components: {
		CardFormAddress,
	},
	data() {
		return {
			code: '',
			dialog: false,
			hasCode: false,
			isDisabled: false,
			isLoading: false,
			step: 1,
		};
	},
	methods: {
		closeModel() {
			this.dialog = false;
		},
		sendForm() {
			if (this.code.length > 0) {
				this.isLoading = true;
				this.dialog = false;
				this.$nuxt.$emit('success-notify', '¡Código correcto!');

				setTimeout(() => {
					this.isLoading = false;
					this.hasCode = true;
				}, 2000);
				this.code = '';
				this.isDisabled = false;
			}
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
	font-weight: 400;
	font-size: $fs-xs !important;

	color: #434343;
}
@media screen and (min-width: $md) {
}
</style>
