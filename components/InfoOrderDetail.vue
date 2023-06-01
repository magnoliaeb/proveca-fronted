<template>
	<div class="inf-detail">
		<v-row class="mb-6 justify-space-between">
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
		</v-row>

		<v-row class="">
			<v-col cols="12">
				<div class="d-flex justify-space-between align-center">
					<h2 class="mb-0 mb-3 text-center text-md-left title-primary">
						Pedido {{ order.display_name }}
					</h2>
					<!-- <p class="hidden-sm-and-down">
              Realizado el {{ $util.getFormattedDate(order.date_order) }}
            </p> -->
				</div>
				<!-- <h4 class="mb-0 mb-3">{{ clientName }}</h4> -->
				<!-- <p class="mb-0 mb-3">Entrega: {{ deliveryDate }}</p> -->
				<!-- <p class="hidden-md-and-up">
            Realizado el {{ $util.getFormattedDate(order.date_order) }}
          </p> -->

				<!-- <div v-else-if="order.payment_label == 'Pagado'">Pedido Pagado</div> -->
			</v-col>
		</v-row>

		<v-row class="justify-space-between">
			<v-col cols="12" md="12">
				<h4 class="mb-0 mb-3">{{ clientName }}</h4>

				<p>
					Entrega: {{ shippingAddress.full }} {{ computedOrder.shipping_label }}
				</p>
			</v-col>
		</v-row>

		<v-row>
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

				<div
					v-else
					class="mr-3"
				>
					<v-btn
						depressed
						:class="selectedBg"
					>
						{{ order.payment_label }}
					</v-btn>

					<p>Método de Pago: {{ order.payment_method }}</p>
				</div>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import OrderMixin from '~/mixins/OrderMixin'
import BtnGoBack from './BtnGoBack.vue';

export default {
	mixins: [
    	OrderMixin
  	],

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
					disabled: true
				}
			]
		},

		clientName() {
			return this._.get(this.order, 'partner_id.1');
		},
		addresses() {
			return this.$store.getters['identity/getAddresses'];
		},
		deliveryDate() {
			return this.order.shipping_label;
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
		carrier() {
			return this._.get(this.order, 'carrier_id.1');
		},
		shippingAddress() {
			// return true;
			return this.addresses.find(
				(address) =>
					address.id == this._.get(this.order, 'partner_shipping_id.0')
			);
		},
		invoiceAddress() {
			let partner_invoice_id = this._.get(
				this.order,
				'partner_invoice_id.0',
				null
			);
			return this.addresses.find((address) => address.id == partner_invoice_id);
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
	font-weight: normal;
	font-size: $fs-xl;
	letter-spacing: 3.2px;
	color: #001f3f;
}
h4 {
	font-weight: 600;
	font-size: $fs-md;
	color: #1a1a1a;
}

p {
	font-weight: normal;
	font-size: $fs-base;
	color: #1a1a1a;
}
.bg-red {
	background-color: rgb(213, 7, 22) !important;
	color: white !important;
}
.bg-green {
	background-color: rgb(79, 175, 94) !important;
	color: black !important;
}
.bg-black {
	background-color: black !important;
	color: white !important;
}
.bg-gray {
	background-color: gray !important;
	color: black !important;
}

@media screen and (min-width: $sm) {
}
</style>
