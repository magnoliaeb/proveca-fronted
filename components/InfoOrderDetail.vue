<template>
	<div class="inf-detail">
		<!-- <v-row class="mb-6 justify-space-between">
			<v-col cols="12" sm="auto">
				<BtnGoBack />
			</v-col>
			<v-col cols="12" md="auto" class="d-flex justify-md-end">
				<v-breadcrumbs :items="links">
					<template v-slot:divider>
						<v-icon left>mdi-chevron-right </v-icon>
					</template>
					<template v-slot:item="{ item }">
						<v-breadcrumbs-item
							:active-class="item.href !== $route.path ? '' : undefined"
							:disabled="item.disabled"
							exact-active-class="active"
							:to="item.href"
						>
							{{ item.text }}
						</v-breadcrumbs-item>
					</template>
				</v-breadcrumbs>
			</v-col>
		</v-row> -->
		<v-row>
			<v-col cols="12">
				<h2 class="text-left">Detalle del pedido</h2>
			</v-col>
		</v-row>
		<v-expansion-panels disabled flat class="" multiple mandatory>
			<v-expansion-panel class="mb-4 border-radius-card">
				<v-expansion-panel-header color="#f5f5f5" hide-actions>
					<v-row class="justify-space-between">
						<v-col v-if="computedOrder.to_picking" cols="12" sm="auto">
							<h3 class="mb-2">Se recogerá el pedido en la tienda</h3>
						</v-col>

						<v-col v-else cols="12" sm="auto">
							<h3 class="mb-2">Fecha de entrega</h3>
							<p class="mb-0">
								{{ $util.getFormattedDate(computedOrder.delivery_date, 2) }}
							</p>
						</v-col>

						<v-col
							cols="12"
							sm="auto"
							class="d-sm-flex align-end justify-center flex-column"
						>
							<h3 class="text-uppercase">
								Pedido N.O {{ order.display_name }}
							</h3>
						</v-col>
					</v-row>
				</v-expansion-panel-header>
				<v-expansion-panel-content class="py-4">
					<v-row class="justify-space-between">
						<v-col cols="12" md="4">
							<h3>Dirección de envio</h3>

							<div v-if="order.to_picking">
								Entrega: Se recogerá en la tienda
							</div>

							<div v-else>
								<p>
									{{ shippingAddress.full }}
									{{ computedOrder.shipping_label }}
								</p>
							</div>
						</v-col>
						<v-col cols="12" md="4">
							<h3>Modo de pago</h3>
							<div
								v-if="
									order.payment_status == 'unpaid' && order.state != 'cancel'
								"
							>
								<p>Pedido no pagado</p>

								<v-btn
									class="mt-3 btn-pay"
									dark
									color="#2cafe5"
									:to="{
										name: 'mis-pedidos-id-pagar',
										params: { id: order.id },
									}"
									depressed
								>
									Pagar ahora
								</v-btn>
							</div>
							<v-btn
								v-else-if="order.state == 'cancel'"
								class="mr-3"
								depressed
								:class="selectedBg"
							>
								Cancelado
							</v-btn>

							<div v-else class="mr-3">
								<v-btn depressed :class="selectedBg">
									{{ order.payment_label }}
								</v-btn>

								<p>Método de Pago: {{ order.payment_method }}</p>
							</div>
						</v-col>
						<v-col cols="12" md="4">
							<h3>Resumen del pedido</h3>
							<div class="">
								<div class="d-flex justify-space-between">
									<p>Artículo(s) subtotal</p>
									<p>{{ formattedSubtotal }}</p>
								</div>

								<div class="d-flex justify-space-between">
									<p>Impuestos</p>
									<p>{{ formattedTax }}</p>
								</div>

								<div
									v-for="(service, i) in services"
									:key="i"
									class="d-flex justify-space-between"
								>
									<p>{{ service.name }}</p>
									<p>{{ $util.getMoneyFormat(service.price_total) }}</p>
								</div>
							</div>
						</v-col>
					</v-row>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>

		<!-- <v-row class="">
			<v-col cols="12">
				<div class="d-flex justify-space-between align-center">
					<h2 class="mb-0 mb-3 text-center text-md-left title-primary">
						Pedido {{ order.display_name }}
					</h2>
					<p class="hidden-sm-and-down">
              Realizado el {{ $util.getFormattedDate(order.date_order) }}
            </p>
				</div>
				<h4 class="mb-0 mb-3">{{ clientName }}</h4>
				<p class="mb-0 mb-3">Entrega: {{ deliveryDate }}</p>
				<p class="hidden-md-and-up">
            Realizado el {{ $util.getFormattedDate(order.date_order) }}
          </p>

				<div v-else-if="order.payment_label == 'Pagado'">Pedido Pagado</div>
			</v-col>
		</v-row> -->

		<!-- <v-row class="justify-space-between">
			<v-col cols="12" md="12">
				<h4 class="mb-0 mb-3">{{ clientName }}</h4>

				<div v-if="order.to_picking">Entrega: Se recogerá en la tienda</div>

				<div v-else>
					<p>
						Entrega: {{ shippingAddress.full }}
						{{ computedOrder.shipping_label }}
					</p>

					<p>Fecha deseada: {{ order.delivery_date }}</p>
				</div>

				<div>
					<p>Teléfono adicional de contacto: {{ order.phone }}</p>

					<p v-html="order.note"></p>
				</div>
			</v-col>
		</v-row> -->

		<!-- <v-row>
			<v-col cols="12">
				<div v-if="order.payment_status == 'unpaid' && order.state != 'cancel'">
					<p>Pedido no pagado</p>

					<v-btn
						class="primary mt-3"
						:to="{ name: 'mis-pedidos-id-pagar', params: { id: order.id } }"
						depressed
						style="width: auto !important"
					>
						Pagar ahora
					</v-btn>
				</div>
				<v-btn
					v-else-if="order.state == 'cancel'"
					class="mr-3"
					depressed
					:class="selectedBg"
				>
					Cancelado
				</v-btn>

				<div v-else class="mr-3">
					<v-btn depressed :class="selectedBg">
						{{ order.payment_label }}
					</v-btn>

					<p>Método de Pago: {{ order.payment_method }}</p>
				</div>
			</v-col>
		</v-row> -->
	</div>
</template>

<script>
import OrderMixin from '~/mixins/OrderMixin';
import BtnGoBack from './BtnGoBack.vue';

export default {
	mixins: [OrderMixin],

	computed: {
		links() {
			return [
				{
					text: 'Mis Pedidos  ',
					disabled: false,
					href: '/mis-pedidos',
				},
				{
					text: this.order ? `Pedido ${this.order.display_name}` : null,
					disabled: true,
				},
			];
		},

		selectedBg() {
			switch (this.order.payment_status) {
				case 'unpaid':
					return 'bg-red';
					break;
				case 'paid':
					return 'bg-green';
					break;
				case 'cancelled':
					return 'bg-black';
					break;
				default:
					return 'bg-gray';
					break;
			}
		},
	},
	methods: {
		goBack() {
			this.$router.go(-1);
		},
	},
	components: { BtnGoBack },
};
</script>

<style lang="scss" scoped>
h2 {
	font-weight: 800;
	font-size: $fs-xl;
	color: #000000;
}

h3 {
	font-weight: 800;
	font-size: $fs-base;
	color: #000000;
}

p {
	font-weight: 400;
	font-size: $fs-base;
	color: #7d7d7d;
	span {
		font-weight: 800;
	}
}

.btn-pay {
	text-transform: initial;
}

.v-expansion-panel {
	border: 1px solid #f5f5f5;
}
// .bg-red {
// 	background-color: rgb(213, 7, 22) !important;
// 	color: white !important;
// }
// .bg-green {
// 	background-color: rgb(79, 175, 94) !important;
// 	color: black !important;
// }
// .bg-black {
// 	background-color: black !important;
// 	color: white !important;
// }
// .bg-gray {
// 	background-color: gray !important;
// 	color: black !important;
// }

@media screen and (min-width: $sm) {
}
</style>
