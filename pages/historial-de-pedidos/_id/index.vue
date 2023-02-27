<template>
	<u-animate-container>
		<div class="content py-16">
			<InfoOrderDetail :order="order" />
			<ListOrderDetail :order="order" class="mt-md-4" />

			<SubtotalOrderDetail :order="order" />
		</div>
	</u-animate-container>
</template>

<script>
import InfoOrderDetail from '../../../components/InfoOrderDetail.vue';
import ListOrderDetail from '../../../components/ListOrderDetail.vue';
import SubtotalOrderDetail from '../../../components/SubtotalOrderDetail.vue';
export default {
	head: {
		title: 'Detalle del pedido',
	},
	components: { InfoOrderDetail, ListOrderDetail, SubtotalOrderDetail },

	async fetch() {
		// await this.$store.dispatch('orders/getOrder', {
		// 	$nuxt: this.$nuxt,
		// 	order_id: this.$route.params.id,
		// });
	},

	computed: {
		order() {
			return null;
			// return this.$store.getters['orders/getOrder'];
		},
	},
};
</script>

<style lang="scss" scoped></style>
