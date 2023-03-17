<template>
	<div>
		<!-- heading table -->
		<v-row class="hidden-sm-and-down table-header">
			<v-col cols="12" md="2"> <span>No. de Pedido</span> </v-col>
			<v-col cols="12" md="1"> <span>Cantidad</span> </v-col>
			<v-col cols="12" md="3"> <span>Domicilio de entrega</span> </v-col>
			<v-col cols="12" md="2"> <span>Fecha de pedido</span> </v-col>
			<v-col cols="12" md="2" class=""> </v-col>
		</v-row>
		<ul class="">
			<v-row tag="li" v-for="(order, index) in orders" :key="index">
				<TrOrderItem :order="order" />
			</v-row>
		</ul>
	</div>
</template>

<script>
import TrOrderItem from './TrOrderItem.vue';
export default {
	components: { TrOrderItem },

	props: ['orders'],
};
</script>

<style lang="scss" scoped>
.table-header {
	border-bottom: 1px solid #000000;
}
li {
	border-bottom: 1px solid rgba(0, 0, 0, 0.43);
	&:first-child {
		border-top: 1px solid #272727;
	}
	&:hover {
		background-color: #01141d28;
		cursor: pointer;
	}
}
span {
	font-weight: 300;
	font-size: $fs-md;
	color: #2cafe5;
}
</style>
