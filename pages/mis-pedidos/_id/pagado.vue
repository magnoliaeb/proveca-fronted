<template>
	<div
		v-if="order"
		class="content py-16"
	>
		<div class="">
			<v-row>
				<v-col cols="12" class="text-center">
					<h2>¡Tu pedido ha sido confirmado!</h2>
					<h3>Hemos enviado el resumen de tu pedido a tu correo electrónico</h3>
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
						<article class="pa-3 pa-sm-6 py-4">
							<div class="py-2">
								<h4 class="mb-5">Pago</h4>

								<div class="d-flex justify-space-between my-2 mx-1 mx-sm-3">
									<p class="">Subtotal</p>
									<span>{{ $util.getMoneyFormat(order.items_subtotal) }}</span>
								</div>

								<div class="d-flex justify-space-between my-2 mx-1 mx-sm-3">
									<p class="">Impuestos</p>
									<span>{{ $util.getMoneyFormat(order.amount_tax) }}</span>
								</div>
								
								<div class="d-flex justify-space-between my-2 mx-1 mx-sm-3">
									<p class="">Descuento</p>
									<span>{{ $util.getMoneyFormat(discount) }}</span>
								</div>

								<div
									v-for="(service, i) in order.services"
									:key="i"
									class="d-flex justify-space-between my-2 mx-1 mx-sm-3"
								>
									<p class="">{{ service.name }}</p>
									<span>{{ $util.getMoneyFormat(service.price_total) }}</span>
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
									<span>{{ $util.getMoneyFormat(order.amount_total) }}</span>
								</div>
							</div>
							<div class="py-2">
								<h4 class="mb-5">Resumen de compra</h4>

								<v-row
									v-for="item, i in order.items"
									:key="i"
									class="flex justify-space-between py-3 d-md-none"
									tag="li"
								>
									<v-col
										cols="12"
										md="auto"
										class="flex-grow-0 d-flex justify-center justify-sm-start"
									>
										<nuxt-link
											class="d-block"
											:to="{ name: 'productos-id-slug', params: { id: item.product.id, slug: item.product.slug } }"
										>
											<v-img
												:width="heightImg"
												transition="scale-transition"
												:height="heightImg"
												:src="item.picture.url"
												:lazy-src="item.picture.url"
												:alt="item.name"
												aspect-ratio="1"
												class="grey lighten-3 scale"
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
										</nuxt-link>
									</v-col>
									<v-col cols="auto" md="" class="text-left flex-grow-1">
										<h3 class="mb-2">
											{{ item.name }}
										</h3>
										<p class="">{{ $util.getMoneyFormat(item.price_unit) }}</p>
									</v-col>
									<v-col cols="auto" md="auto" class="text-right d-md-block">
										<span class="">
											{{ $util.getMoneyFormat(item.price_total) }}
										</span>
										<small class="d-block my-3">{{ item.product_uom_qty }} pz</small>
									</v-col>
								</v-row>

								<!-- table -->
								<div class="d-none d-md-block">
									<table class="">
										<tr class="">
											<th class="text-left">Productos</th>
											<th>Cant</th>
											<th class="hidden-md-and-up">Precio</th>
											<th class="hidden-sm-and-down">P. Unitario</th>
											<th>Total</th>
										</tr>
										<tr
											v-for="item, i in order.items"
											:key="i"
											class=""
										>
											<td class="d-flex align-center">
												<v-img
													:width="heightImg"
													:max-width="heightImg"
													transition="scale-transition"
													:height="heightImg"
													:src="item.picture.url"
													:lazy-src="item.picture.url"
													:alt="item.name"
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
												<span>{{ item.name }}</span>
											</td>
											<td class="text-center">{{ item.product_uom_qty }}</td>
											<td class="text-center">
												{{ $util.getMoneyFormat(item.price_unit) }}
											</td>
											<td class="text-center">
												{{ $util.getMoneyFormat(item.price_total) }}
											</td>
										</tr>
									</table>
								</div>
							</div>

							<div class="py-2">
								<h4 class="mb-5">Dirección de envío</h4>

								<div class="my-2 mx-1 mx-sm-3">
									<p class="">
										{{ shippingAddress.street }}
									</p>
								</div>
							</div>

							<div class="py-2">
								<h4 class="mb-5">Método de Pago</h4>

								<div class="my-2 mx-1 mx-sm-3">
									<p class="">PayPal</p>
								</div>
							</div>
						</article>
					</v-col>
				</v-row>
				<v-row>
					<!-- <v-col cols="12" md="6">
						<v-btn
							@click="print"
							:loading="isLoading"
							:disabled="isDisabled && invalid"
							class="button-primary"
							block
							depressed
							>Imprimir resumen</v-btn
						>
					</v-col> -->
					<v-col cols="12" md="6">
						<v-btn
							class="button-primary"
							block
							:to="{ name: 'productos' }"
							depressed
							>Ver más productos</v-btn
						>
					</v-col>
				</v-row>
			</div>
		</div>

		<v-dialog
			:value="dialog"
			class="elevation-0"
			content-class="dialog-product"
			scrollable
		>
			<v-card class="pa-4">
				<h3>
					Gracias por su compra
				</h3>

				<br>

				<p>
					Es posible que su pago se siga procesando. <br>
					Usted recibirá una notificación en cuanto termine de ser verificado.
				</p>
			</v-card>
		</v-dialog>
	</div>
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
			dialog: false
		}
	},

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
			return 'paypal'
		},

		order() {
			return this.$store.getters['orders/getOrder'];
		},

		discount() {
            return this.order.amount_undiscounted - this.order.amount_total + this.order.amount_tax
        },

		charge() {
			// return this.gateway == 'openpay'
			// 	? this.$store.state.openpay.charge
			// 	: this.$store.state.paypal.charge;
			return null;
		},

		addresses() {
            return this.$store.getters['identity/getAddresses']
        },

		shippingAddress() {
			let partner_shipping_id = this._.get(
				this.order,
				'partner_shipping_id.0',
				null
			);
			return this.addresses.find(
				(address) => address.id == partner_shipping_id
			);
		}
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

	created() {
		if(this.$route.query['waiting-for-payment-confirmation']) {
			this.dialog = true
		}

		this.$store.dispatch('orders/getOrder', {
			$nuxt: this.$nuxt,
			order_id: this.$route.params.id,
		});

		// if (this.$route.query.id) {
		// 	this.$store.dispatch('openpay/getCharge', {
		// 		$nuxt: this.$nuxt,
		// 		id: this.$route.query.id,
		// 	});
		// }

		// if (this.$route.query.paymentId) {
		// 	this.$store.dispatch('paypal/getCharge', {
		// 		$nuxt: this.$nuxt,
		// 		id: this.$route.query.paymentId,
		// 		token: this.$route.query.token,
		// 	});
		// }
	},
};
</script>

<style lang="scss" scoped>
.content-article {
	max-width: 512px;
	// width: 512px;
	margin: 0 auto;
}
article {
	background-color: #f0f0f0;
	border-radius: 10px;
}
h2 {
	font-weight: 700;
	font-size: $fs-xl;
	text-transform: uppercase;
	color: #2cafe5;
}

h3 {
	font-weight: 300;
	font-size: $fs-md;
	color: #000000;
}
h4 {
	font-weight: 900;
	font-size: $fs-base;
	color: #000000;
}
p {
	font-weight: 300;
	font-size: $fs-base;
	color: #000000;
}

span {
	font-weight: 300;
	font-size: $fs-sm;
	color: #000000;
}
.card-total {
	background: #ffffff;
	border-radius: 5px;
	h4,
	span {
		font-weight: 800;
		font-size: $fs-base;
		color: #2cafe5;
	}
}

table {
	width: 100%;
}
th {
	font-weight: 300;
	font-size: $fs-xs;
	padding-bottom: 10px;
	color: #000000;
}
tr {
	margin: 10px 0 !important;
}
td {
	padding-bottom: 10px;
	font-weight: 500;
	font-size: $fs-xs;
	color: #000000;
}

@media screen and (min-width: $sm) {
}
@media screen and (min-width: $md) {
}
</style>
