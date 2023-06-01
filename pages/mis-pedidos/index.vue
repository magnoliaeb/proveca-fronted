<template>
	<div>
		<div class="content py-16">
			<OrdersHistory class="" />
		</div>
	</div>
</template>

<script>
import OrdersHistory from '../../components/OrdersHistory.vue';

export default {
	middleware: [
		'auth'
	],
	components: { OrdersHistory },
	head: {
		title: 'Historial de pededios',
	},
};
</script>

<style lang="scss" scoped></style>
