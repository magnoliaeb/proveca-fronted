<template>
	<div>
		<v-row class="no-gutters">
			<v-col cols="12" md="10">
				<v-row>
					<v-col cols="12">
						<h2 class="text-left">Envío</h2>
					</v-col>
					<v-col cols="12">
						<v-divider></v-divider>
					</v-col>
				</v-row>
				<v-row no-gutters>
					<v-col cols="12" sm="6" md="6">
						<v-row class="justify-space-between">
							<v-col cols="auto">
								<h3>Datos de cliente</h3>
							</v-col>
							<!-- <v-col cols="auto">
								<v-btn depressed text :to="{ name: 'mi-perfil-editar-perfil' }"
									>Editar</v-btn
								>
							</v-col> -->
						</v-row>
						<v-row>
							<v-col cols="12">
								<p class="mb-4">{{ shippingAddress.full }}</p>
								<p>{{ clientName }}</p>
								<!-- <p>Correo: clau.esmo@gmail.com</p> -->
							</v-col>
						</v-row>
					</v-col>
					<v-col cols="12" sm="6" md="6">
						<v-row class="justify-space-between">
							<v-col cols="auto">
								<h3>Método de envío</h3>
							</v-col>

							<v-col cols="auto">
								<!-- <v-btn depressed text :to="{ name: 'index' }">Editar</v-btn> -->

								<span>
									Local
								</span>

								<!-- <span>
									{{ carrier }}
								</span> -->
							</v-col>
						</v-row>

						<!-- <v-row>
							<v-col cols="12">
								<CardPayment />
								<p class="mb-4">recoger en la tienda</p>
							</v-col>
						</v-row> -->
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import OrderMixin from '~/mixins/OrderMixin'
// import CardPayment from './CardPayment.vue';

export default {
	mixins: [
    	OrderMixin
  	],

	computed: {
		// shippingMethod() {
		// 	// return this._.get(this.order, 'carrier_id.1');
		// 	return null;
		// },
		// addresses() {
		// 	// return this.$store.getters['identity/getAddresses'];
		// 	return [];
		// },
		// shippingAddress() {
		// 	// let partner_shipping_id = this._.get(
		// 	// 	this.order,
		// 	// 	'partner_shipping_id.0',
		// 	// 	null
		// 	// );
		// 	// return this.addresses.find(
		// 	// 	(address) => address.id == partner_shipping_id
		// 	// );
		// 	return null;
		// },
		// invoiceAddress() {
		// 	// let partner_invoice_id = this._.get(
		// 	// 	this.order,
		// 	// 	'partner_invoice_id.0',
		// 	// 	null
		// 	// );
		// 	// return this.addresses.find((address) => address.id == partner_invoice_id);
		// 	return null;
		// },
	},
	// components: { CardPayment },
};
</script>

<style lang="scss" scoped>
h2 {
	font-weight: 800;
	font-size: $fs-lg;
	color: #000000;
}
h3 {
	font-weight: 700;
	font-size: $fs-md;
	color: #000000;
}
a {
	font-weight: 400 !important;
	font-size: $fs-sm !important;
	text-decoration-line: underline !important;
	color: #aeaeae !important;
	text-transform: initial !important;
}

@media screen and (min-width: $sm) {
}
</style>
