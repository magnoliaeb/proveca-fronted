<template>
	<v-form @submit.prevent="submit">
		<div class="filters">
			<div class="mb-6">
				<h4 class="mb-4 fs-lg">Categoría</h4>

				<ul class="mr-lg-3">
					<li
						v-for="(item, index) in categories"
						:key="index"
					>
						<v-radio-group
                            v-model="$observer.routeQuery.category_id"
                            row=""
                            dense
                            hide-details
                        >
                            <v-radio :value="String(item.id)">
                                <template #label>
                                  	<span>{{ item.name }}</span>
                                </template>
                            </v-radio>
                        </v-radio-group>
                    </li>
                    
					<li>
                        <v-radio-group
							v-model="$observer.routeQuery.category_id"
							row=""
							dense
							hide-details
                        >
                            <v-radio :value="null">
                                <template #label>
                                  	<span>Todas las categorías</span>
                                </template>
                            </v-radio>
                        </v-radio-group>
                    </li>
                </ul>
			</div>
			
			<!-- <div class="mb-6">
				<h4 class="mb-4 fs-lg">Etiqueta</h4>

				<ul class="mr-lg-3">
					<li
						v-for="(item, index) in tags"
						:key="index"
					>
						<v-radio-group
                            v-model="$observer.routeQuery.tag_id"
                            row=""
                            dense
                            hide-details
                        >
                            <v-radio :value="String(item.id)">
                                <template #label>
                                  	<span>{{ item.name }}</span>
                                </template>
                            </v-radio>
                        </v-radio-group>
                    </li>
                    
					<li>
                        <v-radio-group
							v-model="$observer.routeQuery.tag_id"
							row=""
							dense
							hide-details
                        >
                            <v-radio :value="null">
                                <template #label>
                                  	<span>Todas las categorías</span>
                                </template>
                            </v-radio>
                        </v-radio-group>
                    </li>
                </ul>
			</div> -->
		</div>
	</v-form>
</template>

<script>
export default {
	// data() {
	// 	return {
	// 		isMounted: false,
	// 		brands: [],
	// 		rootCategory: null,
	// 		subCategory: null,
	// 		isLoading: false,
	// 		brand: null,
	// 		max_price: null,
	// 		categories: [],
	// 	};
	// },

	// data() {
	// 	return {
	// 		category_id: null
	// 	}
	// },

	computed: {
		categories() {
			return this.$store.getters['products/getCategories'];
		},

		tags() {
			return this.$store.getters['products/getTags']
		}
	},

	// methods: {
	// 	submit() {
	// 		this.$router.push({
	// 			name: 'productos',
	// 			query: {
	// 				brand: this.brand,
	// 				category: this.selectedCategory,
	// 				max_price: this.max_price,
	// 			},
	// 		});

	// 		this.$store.dispatch('product/filtered', {
	// 			brand: this.brand,
	// 			category: this.selectedCategory,
	// 			max_price: this.max_price,
	// 		});
	// 	},
	// },

	// mounted() {
	// 	let routeParams = this.$util.clone(this.$route.query) ?? {};

	// 	this.brand = routeParams.brand;
	// 	this.max_price = routeParams.max_price ?? 10000;

	// 	if (routeParams.category) {
	// 		let subCategory = this.subCategories.find(
	// 			(s) => s.id == routeParams.category
	// 		);

	// 		if (subCategory) {
	// 			this.$set(this, 'subCategory', subCategory.id);
	// 			this.$set(this, 'rootCategory', subCategory.parent_id);
	// 		} else {
	// 			let rootCategory = this.rootCategories.find(
	// 				(r) => r.id == routeParams.category
	// 			);

	// 			if (rootCategory) {
	// 				this.$set(this, 'rootCategory', rootCategory.id);
	// 			}
	// 		}
	// 	}

	// 	this.isMounted = true;
	// },
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
