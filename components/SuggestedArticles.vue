<template>
	<div class="">
		<v-row class="card-title">
			<v-col cols="12">
				<h2>Articulos sugeridos</h2>
			</v-col>
		</v-row>
		<v-row dense class="mt-2">
			<v-col cols="4" v-for="product in products" :key="product.id">
				<CardMiniProduct :product="product" />
			</v-col>
		</v-row>
	</div>
</template>

<script>
import CardMiniProduct from './CardMiniProduct.vue';
export default {
	components: { CardMiniProduct },
	data() {
		return {
			products: [
				{
					id: '1',
					slug: '1',
					picture:
						'https://proveeca.s3.amazonaws.com/odoo/3325c134a6d72993c7af585433fa101f53202ea1',
					name: 'Product name',
					price: '1',
				},
				{
					id: '1',
					slug: '1',
					picture:
						'https://proveeca.s3.amazonaws.com/odoo/3325c134a6d72993c7af585433fa101f53202ea1',
					name: 'Product name',
					price: '1',
				},
				{
					id: '1',
					slug: '1',
					picture:
						'https://proveeca.s3.amazonaws.com/odoo/3325c134a6d72993c7af585433fa101f53202ea1',
					name: 'Product name',
					price: '1',
				},
				{
					id: '1',
					slug: '1',
					picture:
						'https://proveeca.s3.amazonaws.com/odoo/3325c134a6d72993c7af585433fa101f53202ea1',
					name: 'Product name',
					price: '1',
				},
				{
					id: '1',
					slug: '1',
					picture:
						'https://proveeca.s3.amazonaws.com/odoo/3325c134a6d72993c7af585433fa101f53202ea1',
					name: 'Product name',
					price: '1',
				},
				{
					id: '1',
					slug: '1',
					picture:
						'https://proveeca.s3.amazonaws.com/odoo/3325c134a6d72993c7af585433fa101f53202ea1',
					name: 'Product name',
					price: '1',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.card-title {
	background-color: white;
	h2 {
		font-size: $fs-base;
	}
}
</style>
