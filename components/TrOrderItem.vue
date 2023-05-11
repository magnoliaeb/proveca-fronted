<template>
	<v-col cols="12" md="12" lg="12" class="pa-0">
		<v-row class="align-center justify-space-between">
			<v-col cols="auto" sm="auto" md="2" class="d-flex">
				<p class="text-left">
					<span>{{ computedOrder.display_name }}</span>
				</p>
			</v-col>
			<v-col cols="auto" sm="auto" md="1" class="d-flex">
				<p class="text-left">
					<span>{{ formattedTotal }}</span>
				</p>
			</v-col>

			<v-col cols="12" md="3" class="d-flex">
				<p>{{ shippingAddress.full }}</p>
			</v-col>

			<v-col cols="12" md="2" class="d-flex">
				<p>{{ $util.getFormattedDate(computedOrder.date_order, 2) }}</p>
			</v-col>

			<v-col cols="12" md="4" class="d-flex align-center">
				<v-btn
					class="button-primary mr-3"
					depressed
					:to="{ name: 'mis-pedidos-id', params: { id: this.computedOrder.id } }"
					style="width: auto !important;"
				>
					Ver pedido
				</v-btn>

				<nuxt-link
					v-if="order.payment_status == 'unpaid' && order.state != 'cancel'"
					:to="{ name: 'mis-pedidos-id-pagar', params: { id: order.id } }"
				>
					Pagar
				</nuxt-link>
				<span
					v-else-if="order.state == 'cancel'"
				>
					Cancelado
				</span>
				<span v-else>
					{{ order.payment_label }}
				</span>
			</v-col>

			<!-- <v-col cols="12" md="2" class="my-4">
          
          </v-col> -->
		</v-row>
	</v-col>
</template>

<script>
import OrderMixin from '~/mixins/OrderMixin'

export default {
	mixins: [
    	OrderMixin
  	],

	computed: {
		selectedBg() {
			// switch (this.order.payment_status) {
			switch (true) {
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
		}
	}
};
</script>

<style lang="scss" scoped>
p {
	font-weight: 400;
	font-size: $fs-base;
	line-height: 25px;

	color: #7d7d7d;
	span {
		font-weight: 800;
	}
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

a {
	width: 198.67px !important;
}

@media screen and (min-width: $md) {
	a {
		width: 100% !important;
	}
}
</style>
