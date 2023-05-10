<template>
	<v-row class="mt-6 mt-lg-0">
		<v-col>
			<v-card flat color="#fff" width="" class="rounded-card py-6 px-3">
				<h3 class="mb-4">Resumen</h3>
				<ul>
					<li class="d-flex py-2 py-md-4 justify-space-between align-center">
						<p class="mb-0">Subtotal</p>
						<span>{{ formattedSubtotal }}</span>
					</li>

					<li class="d-flex py-2 py-md-4 justify-space-between align-center">
						<p class="mb-0">Impuestos</p>
						<span>{{ formattedTax }}</span>
					</li>

					<li class="d-flex py-2 py-md-4 justify-space-between align-center">
						<p class="mb-0">Descuento</p>
						<span>{{ formattedDiscount }}</span>
					</li>
					<!-- <div class="d-md-flex py-2 py-md-4 justify-space-between align-center ">
			  <h5>IVA</h5>
			  <span>{{ $util.getMoneyFormat($store.state.cart.content.tax) }}</span>
			</div> -->
					<!-- <li class="d-flex py-2 py-md-4 justify-space-between align-center">
						<p class="mb-0">Envio (Recoger en tienda)</p>
						<span>{{ $util.getMoneyFormat(0.0) }}</span>
					</li> -->
				</ul>

				<div class="d-flex mt-6 justify-space-between card-total px-2 py-3">
					<h4>Total</h4>
					<span>{{ formattedTotal }}</span>
				</div>

				<v-btn
					v-if="$route.name == 'carrito-elegir-direccion'"
					class="mt-7 button-primary"
					depressed
					block
					type="submit"
					:disabled="$store.state.cart.isBusy"
					@click="$observer.confirmCart"
				>
					{{ buttonText }}
				</v-btn>

				<!--
				<v-btn
					v-if="$route.name == 'carrito-datos-del-envio'"
					class="mt-7 button-primary"
					depressed
					block
					type="submit"
              		form="info-send-form"
					:disabled="$store.state.cart.isBusy"
				>
					{{ buttonText }}
				</v-btn>
				
				<v-btn
					v-else-if="$route.name == 'carrito-datos-del-cliente' && $store.state.cart.requireInvoice"
					class="mt-7 button-primary"
					depressed
					block
					type="submit"
              		form="form-tax-data"
					:disabled="$store.state.cart.isBusy"
				>
					{{ buttonText }}
				</v-btn>

				<v-btn
					v-else-if="$route.name == 'carrito-datos-del-cliente' && ! $store.state.cart.requireInvoice"
					class="mt-7 button-primary"
					depressed
					block
					type="submit"
					:disabled="$store.state.cart.isBusy"
					@click="$observer.confirmCart"
				>
					{{ buttonText }}
				</v-btn> -->

				<v-btn
					v-else
					class="mt-7 button-primary"
					depressed
					block
					@click="nextStep"
              		:disabled="$store.state.cart.isBusy || !isEnabled"
				>
					{{ buttonText }}
				</v-btn>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
	import CartMixin from '~/mixins/CartMixin'

	export default {
		mixins: [
			CartMixin
		],

		computed: {
			page() {
				return this.$route.name
			},

			buttonText() {
				let buttonText = "";

				switch (this.page) {
					case "carrito":
						buttonText = "Continuar";
					break

					case "carrito-datos-del-envio":
						buttonText = "Continuar"
					break

					case "carrito-elegir-direccion":
						// buttonText = "Continuar a facturación"
						buttonText = "Continuar con el pago"
					break

					case "carrito-datos-del-cliente":
						buttonText = "Continuar con el pago"
					break
				}

				return buttonText;
			},

			isEnabled() {
				let isEnabled = false;

				switch (this.page) {
					case "carrito":
						isEnabled = true
					break

					case "carrito-elegir-direccion":
						// isEnabled = this.$store.getters["cart/getSelectedShippingMethod"]
						isEnabled = this.$auth.user && this.$store.getters["cart/getSelectedShippingMethod"]
					break;

					case "carrito-datos-del-cliente":
						isEnabled = this.$auth.user
					break
				}

				return isEnabled;
			}
		},

		methods: {
			nextStep() {
				switch (this.$route.name) {
					case "carrito":
						if (this.$auth.user) {
							this.$router.push({ name: "carrito-elegir-direccion" })
						} else {
							this.$router.push({ name: "carrito-datos-del-envio" })
						}
					break;

					// case "carrito-elegir-direccion":
					// 	this.$router.push({ name: "carrito-datos-del-cliente" })
					// break;
				}
			},
		}
	}
</script>


<style lang="scss" scoped>
* {
	// color: #373736;
}
.rounded-card {
	//   border-radius: 5px !important;
	width: 100%;
	max-width: 400px;
	border: 1.18389px solid #000000 !important;
	border-radius: 8.28721px !important;
}

h3 {
	font-weight: 500;
	font-size: $fs-md;
	text-transform: uppercase;
	color: #000000;
}
p {
	font-weight: 300;
	font-size: $fs-base;
	color: #000000;
}
span {
	font-weight: 300;
	font-size: $fs-base;
	color: #000000;
}

li {
	border-bottom: 1px solid #e9e9e9;
	&:last-child {
		border: none;
	}
}

.card-total {
	border-top: 2px solid #2cafe5;

	h4,
	span {
		font-weight: 900;
		font-size: $fs-base;
		text-transform: uppercase;

		color: #2cafe5;
	}
}
button {
	width: 100% !important;
}
@media screen and (min-width: $sm) {
	.rounded-card {
		width: 375px;
	}
}
@media screen and (min-width: $md) {
	.rounded-card {
		width: 400px;
	}
}
</style>
