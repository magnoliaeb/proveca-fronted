<template>
	<v-col cols="12" md="12" lg="12" class="pa-0">
		<v-row class="align-center justify-space-between">
			<v-col cols="auto" sm="auto" md="2" class="d-flex">
				<p class="text-left">
					<span> 2353685</span>
				</p>
			</v-col>
			<v-col cols="auto" sm="auto" md="1" class="d-flex">
				<p class="text-left">
					<span>{{ $util.getMoneyFormat(345.0) }}</span>
				</p>
			</v-col>

			<v-col cols="12" md="3" class="d-flex">
				<p>
					Entregado al domicilio:
					{{ 'Entregado en: Donato Guerra #23' }}
				</p>
			</v-col>

			<v-col cols="12" md="2" class="d-flex">
				<p>3 Productos</p>
			</v-col>
			<v-col cols="12" md="2" class="d-flex">
				<p>{{ '15 de Enero 2021' }}</p>
			</v-col>

			<v-col cols="12" md="2" class="d-flex">
				<v-btn
					class="button-primary"
					depressed
					:class="selectedBg"
					:to="{ name: 'historial-de-pedidos-id', params: { id: 1 } }"
				>
					Pagar
				</v-btn>
			</v-col>

			<!-- <v-col cols="12" md="2" class="my-4">
          
          </v-col> -->
		</v-row>
	</v-col>
</template>

<script>
export default {
	props: {
		order: {
			type: Object,
			default: {},
		},
	},

	computed: {
		addresses() {
			// return this.$store.getters['identity/getAddresses'];
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

		shippingAddress() {
			// return this.addresses.find(
			// 	(address) =>
			// 		address.id == this._.get(this.order, 'partner_shipping_id.0')
			// );
		},
	},
};
</script>

<style lang="scss" scoped>
p {
	font-weight: 400;
	font-size: 19.5574px;
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
