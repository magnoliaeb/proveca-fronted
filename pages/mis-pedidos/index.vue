<template>
	<!-- <div class="content py-16">
			<OrdersHistory class="" />
		</div> -->

	<div>
		<div class="content py-16">
			<OrdersHistory class="" />
		</div>
	</div>
</template>

<script>
import OrdersHistory from '../../components/OrdersHistory.vue';

export default {
	components: { OrdersHistory },
	head: {
		title: 'Historial de pededios',
	},
};
</script>

<style lang="scss" scoped></style>
