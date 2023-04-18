<template>
	<section class="pt-6 pb-10">
		<div class="content">
			<v-row class="">
				<v-col cols="12">
					<HeadingTitle :title="title" />
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
	components: { ProductCard, HeadingTitle },
	props: ['title', 'products'],
};
</script>

<style lang="scss" scoped>
* {
	// border: 1px solid orange;
}
</style>
