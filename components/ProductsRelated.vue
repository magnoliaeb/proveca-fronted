<template>
	<v-row
		v-if="hasProducts"
		class="no-gutters"	
	>
		<v-col cols="12" class="mb-4 mb-md-10">
			<HeadingTitle :title="'relacionados'" />
		</v-col>
		<v-col cols="12" class="">
			<ProductRetaledSlider :products="products" />
		</v-col>
	</v-row>
</template>

<script>
import HeadingTitle from './HeadingTitle.vue';
import ProductRetaledSlider from './ProductRetaledSlider.vue';
export default {
	components: { ProductRetaledSlider, HeadingTitle },

	computed: {
		products() {
			return this.$store.getters["products/getRelatedProducts"];
		},

		hasProducts() {
			return this.products.length >= 1;
		},
	}
};
</script>

<style lang="scss" scoped></style>
