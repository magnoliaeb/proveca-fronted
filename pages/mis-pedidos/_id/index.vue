<template>
	<div
		v-if="order"
		class="content py-16"
	>
		<InfoOrderDetail :order="order" />
		<ListOrderDetail :order="order" class="mt-md-4" />

		<SubtotalOrderDetail :order="order" />
	</div>
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

	computed: {
		order() {
			return this.$store.getters["orders/getOrder"]
		},
	},

	created() {
    	this.isLoading = true;

    	this.$store
      		.dispatch("orders/getOrder", {
        		order_id: this.$route.params.id,
      		})
  	}
};
</script>

<style lang="scss" scoped></style>
