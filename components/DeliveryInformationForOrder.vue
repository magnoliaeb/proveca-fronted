<template>
	<v-expansion-panels
		accordion
		flat
	>
		<v-expansion-panel>
			<v-expansion-panel-header class="px-0">
				<div class="d-flex align-center">
					<v-icon
						color="#7d7d7d"
						class="mr-3"
						size="30px">
						mdi-map-marker-outline
					</v-icon>

					<div class="">
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
				<v-radio-group
              		v-model="shippingType"
              		column
            	>
              		<v-radio
                		label="Quiero recibir el pedido en mi casa"
                		value="delivery"
              		></v-radio>
              		
					<v-radio
                		label="Quiero recoger mi pedido en la tienda"
                		value="pickup"
              		></v-radio>
            	</v-radio-group>

				<AddressList v-if="shippingType == 'delivery'" />
			</v-expansion-panel-content>
		</v-expansion-panel>

		<v-expansion-panel>
			<v-expansion-panel-header class="px-0">
				<div class="d-flex align-center">
					<v-icon
						color="#7d7d7d"
						class="mr-3"
						size="30px"
					>
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
								{{ form.instructions.slice(0, 20) }}
							</small>
						</p>
					</div>
				</div>
			</v-expansion-panel-header>

			<v-expansion-panel-content>
				<v-textarea
					outlined
					autocomplete="off"
					v-model.trim="form.instructions"
					auto-grow
					flat
					solo
				></v-textarea>
			</v-expansion-panel-content>
		</v-expansion-panel>

		<v-expansion-panel :disabled="shippingType == 'pickup'">
			<v-expansion-panel-header class="px-0">
				<div class="d-flex align-center">
					<v-icon
						color="#7d7d7d"
						class="mr-3"
						size="30px"
					>
						mdi-clock-time-eight-outline
					</v-icon>

					<div class="">
						<h3 class="mb-1">
							Tiempo de entrega
						</h3>

						<p>
							{{ dateText }}
						</p>
					</div>
				</div>
			</v-expansion-panel-header>

			<v-expansion-panel-content>
				<v-date-picker
					v-model="form.date"
					__allowed-dates="allowedDates"
					__min="2016-06-15"
					__max="2018-03-20"
				></v-date-picker>

				<v-time-picker
					v-model="form.time"
					format="ampm"
				></v-time-picker>
			</v-expansion-panel-content>
		</v-expansion-panel>

		<v-expansion-panel>
			<v-expansion-panel-header class="px-0">
				<div class="d-flex align-center">
					<v-icon
						color="#7d7d7d"
						class="mr-3"
						size="30px">
						mdi-phone-in-talk-outline
					</v-icon>

					<div class="">
						<h3 class="mb-1">
							Número de móvil
						</h3>

						<p>
							{{ form.phone }}
						</p>
					</div>
				</div>
			</v-expansion-panel-header>

			<v-expansion-panel-content>
				<v-text-field
					height="64px"
					color="blue-ligth"
					v-model.trim="form.phone"
					solo
					flat
					outlined
					placeholder="Teléfono"
				/>
			</v-expansion-panel-content>
		</v-expansion-panel>
	</v-expansion-panels>
</template>

<script>
export default {
	data() {
		return {
			shippingType: null,
			form: {
				instructions: '',
				phone: '',
				date: '',
				time: ''
			}
		}
	},

	computed: {
		selectedAddress() {
            return this.$store.getters['cart/getSelectedShippingAddress']
        },

		shippingTypeText() {
			let selectAddress = this.selectedAddress

			if(this.shippingType == 'delivery' && selectAddress) {
				return selectAddress.full
			} else if(this.shippingType == 'pickup') {
				return 'Recogeré mi paquete en la tienda'
			}

			return 'Aún no se ha configurado el envío'
		},

		dateText() {
			return this.shippingType == 'pickup'
				? 'N\\A'
				: `${this.form.date} ${this.form.time}`
		}
	},

	created() {
		this.shippingType = this.$observer.shippingType
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
</style>
