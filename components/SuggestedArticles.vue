<template>
	<div class="">
		<v-row class="card-title">
			<v-col cols="12">
				<h2>Artículos sugeridos</h2>
			</v-col>
		</v-row>

		<v-row dense class="mt-1 mt-md-2">
			<v-col
				v-for="product in products"
				:key="product.id"
				cols="6"
				class="mb-2"
			>
				<CardMiniProduct :product="product" />
			</v-col>
		</v-row>
	</div>
</template>

<script>
import CardMiniProduct from './CardMiniProduct.vue';
export default {
	components: {
		CardMiniProduct,
	},

	data() {
		return {
			maxProducts: 6,
		};
	},

	computed: {
		topProducts() {
			return this.$store.getters['products/getTopProducts'];
		},

		products() {
			return this.$util
				.clone(this.topProducts)
				.sort(() => Math.random() - 0.5)
				.slice(0, this.maxProducts);
		},
	},

	created() {
		if (process.client) {
			this.$store.dispatch('products/loadTopProducts');
		}
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
