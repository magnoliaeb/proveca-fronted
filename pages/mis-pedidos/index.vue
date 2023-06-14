<template>
	<div class="mt-16 pt-4 pt-sm-0">
		<div class="content pb-16">
			<OrdersHistory class="" />
		</div>
	</div>
</template>

<script>
import OrdersHistory from '../../components/OrdersHistory.vue';

export default {
	middleware: ['intended'],
	components: { OrdersHistory },
	head: {
		title: 'Historial de pededios',
	},
};
</script>

<style lang="scss" scoped>
.content {
	max-width: 1000px;
}
h2 {
	font-weight: 800;
	font-size: $fs-xl;
	color: #000000;
}
</style>
