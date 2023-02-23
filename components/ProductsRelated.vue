<template>
	<v-row class="no-gutters">
		<v-col cols="12" class="mb-4 mb-md-10">
			<HeadingTitle :title="'relacionados'" />
		</v-col>
		<v-col cols="12" class="">
			<ProductRetaledSlider />
		</v-col>
	</v-row>
</template>

<script>
import HeadingTitle from './HeadingTitle.vue';
import ProductRetaledSlider from './ProductRetaledSlider.vue';
export default {
	props: ['product'],

	components: { ProductRetaledSlider, HeadingTitle },

	// async fetch() {
	// 	await this.$store.dispatch('product/related', this.product.id);
	// },
};
</script>

<style lang="scss" scoped></style>
