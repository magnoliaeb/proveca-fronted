<template>
	<div class="">
		<v-row>
			<v-col cols="6">
				<v-btn
					tile
					class="button"
					:class="[! $observer.confirmation.to_picking ? 'selected' : '']"
					depressed
					block
					text
					large
					:disabled="! $observer.confirmation.to_picking"
					to="/carrito/delivery"
				>
					Reparto
				</v-btn>
			</v-col>
			<v-col cols="6">
				<v-btn
					tile
					class="button"
					depressed
					text
					block
					large
					:class="[$observer.confirmation.to_picking ? 'selected' : '']"
					:disabled="$observer.confirmation.to_picking"
					to="/carrito/pickup"
				>
					Recogida
				</v-btn>
			</v-col>
		</v-row>
		<v-expansion-panels accordion flat>
			<v-expansion-panel :disabled="$observer.confirmation.to_picking">
				<v-expansion-panel-header class="px-0">
					<div class="d-flex align-center">
						<v-icon color="#7d7d7d" class="mr-3" size="30px">
							mdi-map-marker-outline
						</v-icon>

						<div v-if="$observer.confirmation.to_picking">
							<h3 class="mb-1">
								Recogeré el pedido
							</h3>

							<p>
								21A Avenida Villa Nueva, 01064, Guatemala
							</p>
						</div>

						<div v-else>
							<h3 class="mb-1">
								Configurar envío del pedido
							</h3>

							<p>
								{{ shippingTypeText }}
							</p>
						</div>
					</div>
				</v-expansion-panel-header>

				<v-expansion-panel-content>
					<AddressList/>
				</v-expansion-panel-content>
			</v-expansion-panel>

			<v-expansion-panel>
				<v-expansion-panel-header class="px-0">
					<div class="d-flex align-center">
						<v-icon color="#7d7d7d" class="mr-3" size="30px">
							mdi-truck-fast-outline
						</v-icon>

						<div class="">
							<h3 class="mb-1">
								Déjanos instrucciones en general sobre este pedido
							</h3>

							<p class="mb-0">
								Instrucciones de entrega o recolecta del pedido
							</p>

							<p>
								<small>
									{{ $observer.confirmation.note.slice(0, 20) }}
								</small>
							</p>
						</div>
					</div>
				</v-expansion-panel-header>

				<v-expansion-panel-content>
					<v-textarea
						outlined
						autocomplete="off"
						v-model.trim="$observer.confirmation.note"
						auto-grow
						flat
						solo
					></v-textarea>
				</v-expansion-panel-content>
			</v-expansion-panel>

			<v-expansion-panel>
				<v-expansion-panel-header class="px-0">
					<div class="d-flex align-center">
						<v-icon color="#7d7d7d" class="mr-3" size="30px">
							mdi-clock-time-eight-outline
						</v-icon>

						<div class="">
							<h3 class="mb-1">
								<span v-if="$observer.confirmation.to_picking">
									Hora de recogida
								</span>

								<span v-else>
									Hora de entrega
								</span>
							</h3>

							<p>
								{{ $observer.confirmation.delivery_delivery_date }}
							</p>
						</div>
					</div>
				</v-expansion-panel-header>

				<v-expansion-panel-content>
					<v-date-picker
						v-model="$observer.confirmation.date"
						__allowed-dates="allowedDates"
						__min="2016-06-15"
						__max="2018-03-20"
					></v-date-picker>

					<v-time-picker
						v-model="$observer.confirmation.time"
						format="ampm"
					></v-time-picker>
				</v-expansion-panel-content>
			</v-expansion-panel>

			<v-expansion-panel>
				<v-expansion-panel-header class="px-0">
					<div class="d-flex align-center">
						<v-icon color="#7d7d7d" class="mr-3" size="30px">
							mdi-phone-in-talk-outline
						</v-icon>

						<div class="">
							<h3 class="mb-1">Número de móvil</h3>

							<p>
								{{ $observer.confirmation.phone }}
							</p>
						</div>
					</div>
				</v-expansion-panel-header>

				<v-expansion-panel-content>
					<v-text-field
						height="64px"
						color="blue-ligth"
						v-model.trim="$observer.confirmation.phone"
						solo
						flat
						outlined
						placeholder="Teléfono"
					/>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
	</div>
</template>

<script>
export default {
	computed: {
		selectedAddress() {
			return this.$store.getters['cart/getSelectedShippingAddress'];
		},

		shippingTypeText() {
			let selectAddress = this.selectedAddress;

			if (!this.$observer.confirmation.to_picking && selectAddress) {
				return selectAddress.full;
			} else if (this.$observer.confirmation.to_picking) {
				return 'Recogeré mi paquete en la tienda';
			}

			return 'Aún no se ha configurado el envío';
		}
	}
};
</script>

<style lang="scss" scoped>
.v-expansion-panel-header {
	border-bottom: 1px solid #f5f5f5;
	&:last-child {
		border-bottom: none;
	}
}

h3 {
	font-weight: 800;
	color: #1a1a1a;
	font-size: $fs-md;
}
p {
	font-weight: 400;
	font-size: $fs-base;
	color: #7d7d7d;
}
.button.selected {
	border-bottom: 1px solid #2cafe5 !important;
	color: #2cafe5 !important;
}
.button {
	font-size: $fs-base !important;
}
</style>
