<template>
	<div class="order">
		<template v-if="!ordersEmpty">
			<v-row class="justify-space-between align-center">
				<v-col cols="12">
					<h2 class="text-left">Historial de pedidos</h2>
				</v-col>
				<!-- <v-col cols="12" sm="auto">
					<div class="d-flex align-baseline">
						<h4 class="mr-3">Ordenar por mes</h4>
						<v-select
							flat
							dense
							outlined
							solo
							width="240px"
							hide-details
							:items="[1, 2, 3]"
							label="Todos"
						>
							<template v-slot:append>
								<v-icon class="icon"> mdi-chevron-down </v-icon>
							</template>
						</v-select>
					</div>
				</v-col> -->
			</v-row>

			<SimpleTableOrder class="mt-3 mt-md-6" :orders="orders" />
		</template>
		<NotData v-else :text="text" :title="title" :icon="icon" />
	</div>
</template>

<script>
import SimpleTableOrder from './SimpleTableOrder.vue';
export default {
	components: { SimpleTableOrder },
	data() {
		return {
			icon: 'box-empty',
			title: 'No se encontró ningún pedido',
			text: 'Aún no haz realizado ningún pedido, aquí podrás ver el historial de tus pedidos.',
		};
	},

	computed: {
		orders() {
			return this.$store.getters['orders/getOrders'];
		},

		ordersEmpty() {
			return this.orders.length <= 0;
		},
	},

	created() {
		this.$store.dispatch('orders/loadOrders');
	},
};
</script>

<style lang="scss" scoped>
.icon {
	color: black;
	font-size: $fs-base;
}

h4 {
	font-weight: 700;
	font-size: $fs-base;
}
h2 {
	font-weight: 800;
	font-size: $fs-xl;
	color: #000000;
}
</style>
