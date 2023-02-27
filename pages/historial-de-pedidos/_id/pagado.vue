<template>
	<u-animate-container>
		<div class="content py-16">
			<div class="">
				<v-row>
					<v-col cols="12" class="text-center">
						<h2>¡Tu pedido ha sido confirmado!</h2>
						<h3>
							Hemos enviado el resumen de tu pedido a tu correo electrónico
						</h3>
					</v-col>
				</v-row>
				<!-- <v-col
            v-if="gateway == 'paypal' && charge.status != 'completed'"
            cols="12"
            class="text-center text-danger font-weight-bold"
          >
            Seguimos validando su pago. Le mandaremos un correo electrónico cuando el proceso esté completo
          </v-col> -->
				<div class="content-article">
					<v-row class="justify-center">
						<!-- <v-col cols="12" class="text-center">
      <h2 class="mb-3">Estamos procesando su pago</h2>
      <h3>Un momento por favor.</h3>
    </v-col> -->
						<v-col cols="12" sm="12">
							<article class="pa-6 py-4">
								<div class="py-2">
									<h4 class="mb-5">Pago</h4>

									<div class="d-flex justify-space-between my-2 mx-3">
										<p class="">Subtotal</p>
										<span>{{ $util.getMoneyFormat(100) }}</span>
									</div>
									<div class="d-flex justify-space-between my-2 mx-3">
										<p class="">Descuento</p>
										<span>{{ $util.getMoneyFormat(20) }}</span>
									</div>
									<div class="d-flex justify-space-between my-2 mx-3">
										<p class="">Envío</p>
										<span>{{ $util.getMoneyFormat(0) }}</span>
									</div>

									<!-- <div
                v-for="(service, i) in order.services"
                :key="i"
                class="d-flex justify-space-between mb-5"
              >
                <p class="">{{ service.name }}</p>
                <span>{{ $util.getMoneyFormat(35) }}</span>
              </div> -->
									<div
										class="d-flex justify-space-between card-total px-2 px-md-4 mb-4 py-2 py-md-4 my-3"
									>
										<h4>Total</h4>
										<span>{{ $util.getMoneyFormat(2562) }}</span>
									</div>
								</div>
								<div class="py-2">
									<h4 class="mb-5">Resumen de compra</h4>

									<!-- table -->
									<table>
										<tr class="">
											<th class="text-left">Productos</th>
											<th>Cant</th>
											<th class="hidden-md-and-up">Precio</th>
											<th class="hidden-sm-and-down">P. Unitario</th>
											<th>Total</th>
										</tr>
										<tr
											class=""
											v-for="(item, index) in [1, 2, 3, 4]"
											:key="index"
										>
											<td class="d-flex align-center">
												<v-img
													:width="heightImg"
													:max-width="heightImg"
													transition="scale-transition"
													:height="heightImg"
													:src="`https://picsum.photos/500/300?image=${
														8 * 5 + 10
													}`"
													:lazy-src="`https://picsum.photos/10/6?image=${
														8 * 5 + 10
													}`"
													:alt="'product.name'"
													aspect-ratio="1"
													class="grey lighten-3 img mr-3 scale"
												>
													<template v-slot:placeholder>
														<v-row
															class="fill-height ma-0"
															align="center"
															justify="center"
														>
															<v-progress-circular
																:size="30"
																:width="3"
																indeterminate
																color="primary"
															></v-progress-circular>
														</v-row>
													</template>
												</v-img>
												<span>{{ 'Coca Cola 600ml' }}</span>
											</td>
											<td class="text-center">{{ 15 }}</td>
											<td class="text-center">
												{{ $util.getMoneyFormat(30) }}
											</td>
											<td class="text-center">
												{{ $util.getMoneyFormat(3265) }}
											</td>
										</tr>
									</table>
								</div>

								<div class="py-2">
									<h4 class="mb-5">Dirección de envío</h4>

									<div class="my-2 mx-3">
										<p class="">
											Claudia Espinosa Monrroy Correo: clau.esmo@gmail.com
											<br />Donato Guerra #23 Colonia Centro C.P. 44210
											Guadalajara, Jalisco, México.
										</p>
									</div>
								</div>

								<div class="py-2">
									<h4 class="mb-5">Método de Pago</h4>

									<div class="my-2 mx-3">
										<p class="">
											Número de tarjeta: **** **** **** 2475
										</p>
									</div>
								</div>
							</article>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12" md="6">
							<v-btn
								@click="print"
								:loading="isLoading"
								:disabled="isDisabled && invalid"
								class="button-primary"
								block
								depressed
								>Imprimir resumen</v-btn
							>
						</v-col>
						<v-col cols="12" md="6">
							<v-btn
								class="button-primary"
								block
								:to="{ name: 'categorias' }"
								depressed
								>Ver más productos</v-btn
							>
						</v-col>
					</v-row>
				</div>
			</div>
		</div>
	</u-animate-container>
</template>

<script>
import HeadingTop from '../../../components/HeadingTop.vue';
export default {
	components: { HeadingTop },
	head: {
		title: 'Confirmar envio',
	},
	data() {
		return {
			isDisabled: false,
			isLoading: false,
			dialog: false,
		};
	},

	// watch: {
	// 	order: {
	// 		immediate: true,
	// 		handler() {
	// 			this.dialog = this.order && this.charge;
	// 		},
	// 	},

	// 	charge: {
	// 		immediate: true,
	// 		handler() {
	// 			this.dialog = this.order && this.charge;
	// 		},
	// 	},
	// },

	computed: {
		heightImg() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return 80;
				case 'sm':
					return 80;
				case 'md':
					return 90;
				case 'lg':
					return 90;
				case 'xl':
					return 90;
			}
		},
		gateway() {
			// return this.$route.query.id ? 'openpay' : 'paypal';
		},

		order() {
			// return this.$store.getters['orders/getOrder'];
		},

		charge() {
			// return this.gateway == 'openpay'
			// 	? this.$store.state.openpay.charge
			// 	: this.$store.state.paypal.charge;
			return null;
		},

		amountDiscount() {
			// return (
			// 	this.order.amount_undiscounted -
			// 	this.order.amount_total +
			// 	this.order.amount_tax
			// );
		},

		items() {
			// return this.order.items.filter((i) => i.product);
		},

		addresses() {
			// return this.$store.getters['identity/getAddresses'];
		},

		shippingAddress() {
			// let partner_shipping_id = this._.get(
			// 	this.order,
			// 	'partner_shipping_id.0',
			// 	null
			// );
			// return this.addresses.find(
			// 	(address) => address.id == partner_shipping_id
			// );
		},

		invoiceAddress() {
			// let partner_invoice_id = this._.get(
			// 	this.order,
			// 	'partner_invoice_id.0',
			// 	null
			// );
			// return this.addresses.find((address) => address.id == partner_invoice_id);
		},
	},

	// methods: {
	// 	print() {
	// 		this.isLoading = true;
	// 		this.$nuxt.$emit('success-notify', 'Resumen impreso');

	// 		setTimeout(() => {
	// 			this.isLoading = false;
	// 		}, 2000);
	// 		this.code = '';
	// 		this.isDisabled = false;
	// 	},
	// },

	// created() {
	// 	this.$store.dispatch('orders/getOrder', {
	// 		$nuxt: this.$nuxt,
	// 		order_id: this.$route.params.id,
	// 	});

	// 	if (this.$route.query.id) {
	// 		this.$store.dispatch('openpay/getCharge', {
	// 			$nuxt: this.$nuxt,
	// 			id: this.$route.query.id,
	// 		});
	// 	}

	// 	if (this.$route.query.paymentId) {
	// 		this.$store.dispatch('paypal/getCharge', {
	// 			$nuxt: this.$nuxt,
	// 			id: this.$route.query.paymentId,
	// 			token: this.$route.query.token,
	// 		});
	// 	}
	// },
};
</script>

<style lang="scss" scoped>
.content-article {
	max-width: 512px;
	width: 512px;
	margin: 0 auto;
}
article {
	background-color: #f0f0f0;
	border-radius: 10px;
}
h2 {
	font-weight: 700;
	font-size: 24px;
	line-height: 31px;
	text-transform: uppercase;

	color: #2cafe5;
}

h3 {
	font-weight: 300;
	font-size: 15px;
	line-height: 20px;
	/* identical to box height */

	color: #000000;
}
h4 {
	font-weight: 900;
	font-size: 18px;
	line-height: 23px;

	color: #000000;
}
p,
span {
	font-weight: 300;
	font-size: 15px;
	line-height: 20px;
	/* identical to box height */

	color: #000000;
}
.card-total {
	background: #ffffff;
	border-radius: 5px;
	h4,
	span {
		font-weight: 800;
		font-size: 18px;
		line-height: 23px;

		color: #2cafe5;
	}
}

table {
	width: 100%;
}
th {
	font-weight: 300;
	font-size: 14;
	line-height: 12px;
	padding-bottom: 10px;
	/* identical to box height */

	color: #000000;
}
tr {
	margin: 10px 0 !important;
	border: 2px solid red !important;
}
td {
	padding-bottom: 10px;
	font-weight: 500;
	font-size: 14px;
	line-height: 10px;
	/* identical to box height */

	color: #000000;
}

p.text {
	font-weight: 500;
	font-size: 9px;
	line-height: 12px;
	/* identical to box height */

	color: #000000;
}

@media screen and (min-width: $sm) {
	// h2 {
	// 	font-size: 25px;
	// }
	// h3 {
	// 	font-size: 16px;
	// }
	// h4 {
	// 	font-size: 19px;
	// }
	// p,
	// span {
	// 	font-size: 14px;
	// }
	// .card-total {
	// 	h4,
	// 	span {
	// 		font-size: 19px;
	// 	}
	// }

	// th {
	// 	font-size: 11px;

	// 	&:first-child {
	// 		h5 {
	// 			font-size: 19px;
	// 		}
	// 	}
	// }
	// td {
	// 	font-size: 14px;
	// }

	// h5 {
	// 	font-size: 19px;
	// }

	// p.text {
	// 	font-size: 14px;
	// }
}
@media screen and (min-width: $md) {
}
</style>
