<template>
	<div>
		<HomeSlider />
		<PopularProducts />
		<PublicityCard />
		<PopularProducts />
	</div>
</template>

<script>
import HomeSlider from '../components/HomeSlider.vue';
import PopularProducts from '../components/PopularProducts.vue';
import PublicityCard from '../components/PublicityCard.vue';
export default {
	head: {
		title: 'Inicio',
	},
	components: { PopularProducts, PublicityCard, HomeSlider },
};
</script>

<style lang="scss" scoped></style>
