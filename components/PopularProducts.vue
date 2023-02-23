<template>
	<section class="py-10">
		<div class="content">
			<v-row class="">
				<v-col cols="12">
					<HeadingTitle />
				</v-col>
			</v-row>
			<v-row class="justify-center justify-md-start">
				<v-col
					class=""
					v-for="(product, index) in products"
					:key="index"
					cols="6"
					md="4"
					lg="3"
				>
					<ProductCard :product="product" />
				</v-col>
			</v-row>
		</div>
	</section>
</template>

<script>
import HeadingTitle from './HeadingTitle.vue';
import ProductCard from './ProductCard.vue';
export default {
	async fetch() {
		// this.products = await this.$store
		//   .dispatch("product/featured")
		//   .then((r) => r.data);
	},
	components: { ProductCard, HeadingTitle },
	computed: {
		products() {
			return [
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},

				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
			];
		},
	},
};
</script>

<style lang="scss" scoped>
* {
	// border: 1px solid orange;
}
</style>
