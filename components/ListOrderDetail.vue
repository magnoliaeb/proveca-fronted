<template>
	<div>
		<OrderItem
			class="mb-4"
			v-for="(item, index) in items"
			:key="item.id"
			:item="{ ...item, index }"
		/>
	</div>
</template>

<script>
import OrderMixin from '~/mixins/OrderMixin';
import OrderItem from './OrderItem.vue';

export default {
	mixins: [OrderMixin],

	components: {
		OrderItem,
	},

	computed: {
		items() {
			return this.order.items;
		},
	},
};
</script>

<style lang="scss" scoped></style>
