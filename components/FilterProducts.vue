<template>
	<v-form @submit.prevent="submit">
		<div class="filters">
			<div class="mb-6">
				<h4 class="mb-4 fs-lg">Categoría</h4>

				<div>
					<div v-for="(item, index) in 7" :key="index" class="mb-3">
						<v-checkbox
							dense
							@change="changeRootCategory(item.id)"
							color="#00a0df"
							:value="item.name"
							v-model="categories"
							hide-details=""
						>
							<template v-slot:label>
								<span>categoria {{ index }} </span>
							</template>
						</v-checkbox>
					</div>
				</div>
			</div>
			<div class="mb-6">
				<h4 class="mb-4 fs-lg">Etiqueta</h4>
				<div>
					<div v-for="(item, index) in 4" :key="index" class="mb-3">
						<v-checkbox
							dense
							@change="changeRootCategory(item.id)"
							color="#00a0df"
							:value="item.name"
							v-model="categories"
							hide-details=""
						>
							<template v-slot:label>
								<span>Etiqueta {{ index }} </span>
							</template>
						</v-checkbox>
					</div>
				</div>
			</div>
		</div>
	</v-form>
</template>

<script>
export default {
	data() {
		return {
			isMounted: false,
			brands: [],
			rootCategory: null,
			subCategory: null,
			isLoading: false,
			brand: null,
			max_price: null,
			categories: [],
		};
	},

	async fetch() {
		// this.brands = await this.$store.dispatch("brand/all").then((r) => r.data);
		// await this.$store.dispatch("product/minMaxPrice");
	},

	computed: {
		computedBrands() {
			return [];
		},

		rootCategories() {
			return [];
		},

		subCategories() {
			return [];
		},

		childrenCategories() {
			return [];
		},

		selectedCategory() {
			return [];
		},
	},

	methods: {
		submit() {
			this.$router.push({
				name: 'productos',
				query: {
					brand: this.brand,
					category: this.selectedCategory,
					max_price: this.max_price,
				},
			});

			this.$store.dispatch('product/filtered', {
				brand: this.brand,
				category: this.selectedCategory,
				max_price: this.max_price,
			});
		},
	},

	mounted() {
		let routeParams = this.$util.clone(this.$route.query) ?? {};

		this.brand = routeParams.brand;
		this.max_price = routeParams.max_price ?? 10000;

		if (routeParams.category) {
			let subCategory = this.subCategories.find(
				(s) => s.id == routeParams.category
			);

			if (subCategory) {
				this.$set(this, 'subCategory', subCategory.id);
				this.$set(this, 'rootCategory', subCategory.parent_id);
			} else {
				let rootCategory = this.rootCategories.find(
					(r) => r.id == routeParams.category
				);

				if (rootCategory) {
					this.$set(this, 'rootCategory', rootCategory.id);
				}
			}
		}

		this.isMounted = true;
	},
};
</script>

<style lang="scss" scoped>
h4 {
	font-style: normal;
	font-weight: 700;
	color: #000000;
}

span {
	font-weight: 300;
	font-size: $fs-md;
	color: #000000;
}

@media screen and (min-width: $lg) {
}
</style>
