<template>
	<div class="order">
		<template v-if="!ordersEmpty">
			<v-row class="justify-space-between align-center">
				<v-col cols="12" sm="auto" class="">
					<h1 class="text-center text-sm-left title-primary">mis pedidos</h1>
				</v-col>
				<v-col cols="12" sm="auto">
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
				</v-col>
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
	async fetch() {
		await this.$store.dispatch('orders/loadOrders');
	},

	computed: {
		orders() {
			// return this.$store.getters['orders/getOrders'];
			return [1, 2, 3];
		},
		ordersEmpty() {
			return this.orders.length <= 0;
		},
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
</style>
