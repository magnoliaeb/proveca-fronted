<template>
	<div>
		<OrderItem
			v-for="(item, index) in [1, 2, 3, 4]"
			:key="index"
			:item="{ ...item, index }"
		/>
	</div>
</template>

<script>
import OrderItem from './OrderItem.vue';
export default {
	components: { OrderItem },

	props: ['order'],
};
</script>

<style lang="scss" scoped></style>
