<template>
	<v-navigation-drawer
		style="background-color: #f2f2f2"
		v-click-outside="clickOutside"
		:value="$observer.showFilters"
		width="373px"
		right
		fixed
	>
		<v-row class="d-flex align-center mt-10" style="position: relative">
			<v-btn
				absolute
				left
				color="#000"
				@click="closeFilters"
				text
				icon
				depressed
				small
			>
				<v-icon>mdi-close</v-icon>
			</v-btn>
			<v-col cols="12" class="text-center">
				<h2>Filtros</h2>
			</v-col>
		</v-row>

		<v-row class="mb-4">
			<v-col cols="12">
				<v-divider dark style="border-color: #2cafe5"></v-divider>
			</v-col>
		</v-row>

		<v-row class="">
			<v-col cols="12">
				<FilterProducts />
			</v-col>
		</v-row>
	</v-navigation-drawer>
</template>

<script>
import FilterProducts from './FilterProducts.vue';

export default {
	components: {
		FilterProducts,
	},

	methods: {
		closeFilters() {
			this.$observer.showFilters = false
		},
		clickOutside(event) {
			if (event.target.id !== 'filters') {
				this.closeFilters();
			}
		},
	},
};
</script>

<style lang="scss" scoped>
h2 {
	font-weight: 900;
	font-size: 25px;
	line-height: 33px;
	color: #000000;
}

@media screen and (min-width: $sm) {
}
</style>
