<template>
	<div class="content py-16">
		<HeadingTop :showBtnGoBack="true" />
		<v-row class="align-start mb-6">
			<v-col cols="12" sm="12" md="10" lg="7" class="">
				<!-- direccion -->
				<!-- <AddressList /> -->
				<DeliveryInformationForOrder />
				<!-- metodos -->
				<ShippingMethods />
			</v-col>
			<v-col
				cols="12"
				sm="auto"
				class="pa-0"
				style="position: sticky; top: 10%"
			>
				<!-- resume -->
				<CartResumen :hasCupon="true" />
			</v-col>
		</v-row>
	</div>
</template>

<script>
import AddressList from '../../components/AddressList.vue';
import CartResumen from '../../components/CartResumen.vue';
import ShippingMethods from '../../components/ShippingMethods.vue';
import HeadingTop from '../../components/HeadingTop.vue';
import DeliveryInformationForOrder from '../../components/DeliveryInformationForOrder.vue';
export default {
	middleware: [
		'intended'
	],
	
	components: {
		AddressList,
		ShippingMethods,
		CartResumen,
		HeadingTop,
		DeliveryInformationForOrder,
	},

	head: {
		title: 'Elegir dirección',
	},
};
</script>

<style lang="scss" scoped></style>
