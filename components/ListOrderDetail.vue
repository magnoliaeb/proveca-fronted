<template>
	<div>
		<OrderItem
			v-for="(item, index) in items"
			:key="index"
			:item="{ ...item, index }"
		/>
	</div>
</template>

<script>
import OrderMixin from '~/mixins/OrderMixin'
import OrderItem from './OrderItem.vue'

export default {
	mixins: [
    	OrderMixin
  	],

	components: {
		OrderItem
	},

	computed: {
		items() {
			return this.order.items
		}
	}
};
</script>

<style lang="scss" scoped></style>
