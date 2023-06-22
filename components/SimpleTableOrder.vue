<template>
	<div>
		<!-- heading table -->
		<!-- <v-row class="hidden-sm-and-down table-header">
			<v-col cols="12" md="2"> <span>No. de Pedido</span> </v-col>
			<v-col cols="12" md="1"> <span>Cantidad</span> </v-col>
			<v-col cols="12" md="3"> <span>Domicilio de entrega</span> </v-col>
			<v-col cols="12" md="2"> <span>Fecha de pedido</span> </v-col>
			<v-col cols="12" md="4" class=""> </v-col>
		</v-row> -->
		<!-- <ul class="">
			<v-row tag="li" v-for="(order, index) in orders" :key="index">
			</v-row>
		</ul> -->
		<v-expansion-panels accordion v-model="panel" flat class="" multiple>
			<TrOrderItem
				v-for="order in orders"
				:key="order.id"
				:order="order"
			/>
		</v-expansion-panels>
	</div>
</template>

<script>
import TrOrderItem from './TrOrderItem.vue';
export default {
	components: { TrOrderItem },

	props: ['orders'],
	created() {
		this.panel = this.orders.map((item, index) => {
			return index;
		});
	},
	data() {
		return {
			panel: [],
		};
	},
};
</script>

<style lang="scss" scoped>
.v-expansion-panel {
	border: 1px solid #f5f5f5;
}
// .table-header {
// 	border-bottom: 1px solid #000000;
// }
// li {
// 	border-bottom: 1px solid rgba(0, 0, 0, 0.43);
// 	&:first-child {
// 		border-top: 1px solid #272727;
// 	}
// 	&:hover {
// 		background-color: #01141d28;
// 		cursor: pointer;
// 	}
// }
// span {
// 	font-weight: 300;
// 	font-size: $fs-md;
// 	color: #2cafe5;
// }
</style>
