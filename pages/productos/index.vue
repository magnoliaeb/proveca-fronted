<template>
	<section class="py-16">
		<div class="content">
			<HeaderFilter />

			<v-row class="mt-3 mt-md-6">
				<v-col cols="12" lg="2" xl="2" class="d-none d-lg-block">
					<FilterProducts />
				</v-col>
				<v-col cols="12" lg="10" xl="10" class="pa-0 pa-lg-3">
					<GridProducts :key="$observer.keys.GridProducts" />
				</v-col>
			</v-row>
		</div>
	</section>
</template>

<script>
import HeaderFilter from '../../components/HeaderFilter.vue';
import GridProducts from '../../components/GridProducts.vue';
import FilterProducts from '../../components/FilterProducts.vue';
export default {
	head() {
		return {
			title: 'Lista de Productos',
			meta: [
				// {
				//   hid: "description",
				//   name: "Productos",
				//   content: "Nuestos productos",
				// },
				// { hid: "keywords", name: "keywords", content: "" },
			],
		};
	},

	components: { GridProducts, HeaderFilter, FilterProducts },

	auth: false
};
</script>

<style lang="scss" scoped>
* {
	// border: 1px solid orange;
}
</style>
