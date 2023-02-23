<template>
	<div class="content py-16">
		<HeadingTop :showBtnGoBack="true" />
		<div class="mb-10">
			<v-row class="align-start no-gutters">
				<v-col cols="12" sm="12" md="10" lg="7" class="">
					<!-- pagos -->
					<PaymentShipping />
				</v-col>
				<v-col cols="12" sm="auto" style="position: sticky; top: 10%">
					<!-- resume -->
					<CartResumen />
				</v-col>
			</v-row>
			<DataClient class="mt-6" />
		</div>
	</div>
</template>

<script>
import HeadingTop from '../../components/HeadingTop.vue';
import PaymentShipping from '../../components/PaymentShipping.vue';
import CartResumen from '../../components/CartResumen.vue';
import DataClient from '../../components/DataClient.vue';
export default {
	components: { CartResumen, HeadingTop, PaymentShipping, DataClient },
	head: {
		title: 'Métodos de pago',
	},
};
</script>

<style lang="scss" scoped></style>
