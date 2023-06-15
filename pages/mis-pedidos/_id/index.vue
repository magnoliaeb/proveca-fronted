<template>
	<div class="mt-16 pt-4 pt-sm-0">
		<div v-if="order" class="content pb-16">
			<InfoOrderDetail :order="order" />
			<ListOrderDetail :order="order" class="mt-md-4" />

			<!-- <SubtotalOrderDetail :order="order" /> -->
		</div>
	</div>
</template>

<script>
import InfoOrderDetail from '../../../components/InfoOrderDetail.vue';
import ListOrderDetail from '../../../components/ListOrderDetail.vue';
import SubtotalOrderDetail from '../../../components/SubtotalOrderDetail.vue';
export default {
	middleware: ['intended'],

	head: {
		title: 'Detalle del pedido',
	},

	components: { InfoOrderDetail, ListOrderDetail, SubtotalOrderDetail },

	computed: {
		order() {
			return this.$store.getters['orders/getOrder'];
		},
	},

	created() {
		this.isLoading = true;

		this.$store.dispatch('orders/getOrder', {
			order_id: this.$route.params.id,
		});
	},
};
</script>

<style lang="scss" scoped>
.content {
	max-width: 1000px;
}
</style>
