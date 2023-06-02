<template>
	<div class="content py-16">
		<HeadingTop />

		<v-row>
			<v-col>
				<RequireInvoiceForm />
			</v-col>
		</v-row>

		<v-row class="align-start justify-space-between">
			<v-col cols="12" sm="12" md="7" lg="8" class="pa-0">
				<FormTaxData
					v-if="$observer.confirmation.invoice_required"
					hideSubmitButton
					@success="$observer.confirmCart"
				/>
			</v-col>

			<v-col cols="12" sm="12" md="5" lg="4" style="position: sticky; top: 10%">
				<!-- resumen del carrito -->
				<CartResumen />
			</v-col>
		</v-row>
	</div>
</template>

<script>
import HeadingTop from '../../components/HeadingTop.vue';
import InvoiceForm from '../../components/InvoiceForm.vue';
import CartResumen from '../../components/CartResumen.vue';
import RequireInvoiceForm from '~/components/RequireInvoiceForm.vue';
import FormTaxData from '~/components/FormTaxData.vue';

export default {
	middleware: [
		'intended'
	],

	components: { CartResumen, HeadingTop, RequireInvoiceForm, FormTaxData },

	head: {
		title: 'Datos del envio',
	},

	// methods: {
	//   processCart() {
	//     console.log('processCart =) ... ///')
	//   }
	// },

	// created() {
	//   this.$root.$on('cart.process', this.processCart)
	// },

	// beforeDestroy() {
	//   console.log('beforeDestroy')
	//   this.$root.$off('cart.proccess', this.processCart)
	// }
};
</script>

<style lang="scss" scoped>
h3 {
	font-weight: 600;
	font-size: 14px;
	line-height: 29px;
	color: #1a1a1a;
}

@media screen and (min-width: $sm) {
	h3 {
		font-size: 19px;
	}
}
</style>
