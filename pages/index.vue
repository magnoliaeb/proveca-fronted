<template>
	<div>
		<HomeSlider />
		<PopularProducts
			title="destacados"
			:products="featuredProducts"
		/>
		<PublicityCard />
		<PopularProducts
			title="más vendidos"
			:products="topProducts"
		/>
	</div>
</template>

<script>
import HomeSlider from '../components/HomeSlider.vue';
import PopularProducts from '../components/PopularProducts.vue';
import PublicityCard from '../components/PublicityCard.vue';
export default {
	auth: false,
	head: {
		title: 'Inicio',
	},
	components: { PopularProducts, PublicityCard, HomeSlider },

	computed: {
		featuredProducts() {
			return this.$store.getters["products/getFeaturedProducts"];
		},

		topProducts() {
			return this.$store.getters["products/getTopProducts"];
		}
	},

	created() {
		if(process.client) {
			this.$store.dispatch("products/loadFeaturedProducts")
			this.$store.dispatch("products/loadTopProducts")
		}
	}
};
</script>

<style lang="scss" scoped></style>
