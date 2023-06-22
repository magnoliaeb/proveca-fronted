<template>
	<v-row class="no-gutters mt-4">
		<v-col cols="12" sm="6" md="4" class="offset-sm-6 offset-md-8">
			<v-row tag="ul">
				<v-col cols="12" class="">
					<h3>Resumen</h3>
				</v-col>
				<v-col
					tag="li"
					cols="12"
					class="d-flex li justify-space-between align-center"
				>
					<p class="mb-0">Subtotal</p>
					<span>{{ formattedSubtotal }}</span>
				</v-col>
				<!-- <v-col
					tag="li"
					cols="12"
					class="d-flex li justify-space-between align-center"
				>
					<p class="mb-0">Impuestos</p>
					<span>{{ formattedTax }}</span>
				</v-col> -->
				<v-col
					tag="li"
					cols="12"
					class="d-flex li justify-space-between align-center"
				>
					<p class="mb-0">Descuento</p>
					<span>{{ formattedDiscount }}</span>
				</v-col>

				<v-col
					v-for="(service, i) in computedOrder.services"
          			:key="i"
					tag="li"
					cols="12"
					class="d-flex li justify-space-between align-center"
				>
					<p class="mb-0">{{ service.name }}</p>
					<span>{{ $util.getMoneyFormat(service.price_total) }}</span>
				</v-col>
				
				<v-col cols="12" class="pt-0 px-0">
					<v-divider style="background-color: #2cafe5"></v-divider>
				</v-col>

				<v-col cols="12" class="d-flex justify-space-between align-center">
					<p class="total">Total</p>
					<span class="total">{{ formattedTotal }}</span>
				</v-col>
				<!-- <v-col cols="12" class="d-flex justify-end mt-8 px-0">
					<v-btn
						depressed
						class="button-primary"
						:loading="isLoading"
						@click="add"
					>
						Agregar todo al carrito
					</v-btn>
				</v-col> -->
			</v-row>
		</v-col>
	</v-row>
</template>

<script>
import OrderMixin from '~/mixins/OrderMixin'
export default {
	mixins: [
    	OrderMixin
  	]
};
</script>

<style lang="scss" scoped>
h3 {
	font-weight: 500;
	font-size: $fs-base;

	text-transform: uppercase;

	color: #000000;
}
p,
span {
	font-weight: 300;
	font-size: $fs-base;

	color: #000000;
}
p.total,
span.total {
	font-weight: 900;
	font-size: $fs-base;

	text-transform: uppercase;

	color: #2cafe5;
}

.li {
	border-bottom: 1px solid #e9e9e9;
}

@media screen and (min-width: $sm) {
}
</style>
