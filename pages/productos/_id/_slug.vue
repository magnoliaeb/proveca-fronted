<template>
	<div v-if="product" class="mt-16 pt-4 pt-sm-0">
		<!-- <template v-if="$fetchState.pending">
			<client-only class="">
				<SkeletonProductDetail class="pb-16" />
			</client-only>
		</template> -->
		<!-- <p v-else-if="$fetchState.error">An error occurred :(</p> -->
		<section class="pb-16">
			<div class="content">
				<v-row class="align-center">
					<v-col cols="auto">
						<v-btn depressed text @click="$router.back()">
							<v-icon dark left>mdi-arrow-left </v-icon>
							<span class="">Back</span></v-btn
						>
					</v-col>
					<!-- <v-col cols="auto">
						<v-breadcrumbs :items="links" class="px-0">
							<template v-slot:divider>
								<v-icon>mdi-chevron-right</v-icon>
							</template>
						</v-breadcrumbs>
					</v-col> -->
				</v-row>
				<SingleProduct :product="product" />
			</div>
			<div class="content">
				<v-row class="py-4 py-md-8">
					<v-col cols="12">
						<v-divider style="background-color: #2cafe5"></v-divider>
					</v-col>
				</v-row>
				<ProductsRelated />
			</div>
		</section>
	</div>
</template>

<script>
// import SkeletonProductDetail from '../../../components/SkeletonProductDetail.vue';
import ProductsRelated from '../../../components/ProductsRelated.vue';
import SingleProduct from '../../../components/SingleProduct.vue';
export default {
	data() {
		return {
			ready: false,
		};
	},

	components: {
		ProductsRelated,
		SingleProduct,
	},

	computed: {
		product() {
			return this.$store.getters['products/getProduct'];
		},

		links() {
			let links = [
				{
					text: 'Productos',
					disabled: false,
					to: {
						name: 'productos',
					},
				},
			];

			if (this.product && this.product.category) {
				links.push({
					text: this.product.category.name,
					disabled: false,
					to: {
						name: 'productos',
						query: {
							category_id: this.product.category.id,
						},
					},
				});
			}

			if (this.product && this.product.brand) {
				links.push({
					text: this.product.brand.name,
					disabled: false,
					to: {
						name: 'productos',
						query: {
							brand_id: this.product.brand.id,
						},
					},
				});
			}

			return links;
		},
	},

	watch: {
		$route(to, from) {
			console.log('route change to', to);
			console.log('route change from', from);
			this.$store.dispatch('products/getProductById', this.$route.params.id);
		},
	},

	created() {
		this.$store.dispatch('products/getProductById', this.$route.params.id);
	},
};
</script>

<style lang="scss" scoped>
button {
	font-weight: 600 !important;
	font-size: $fs-sm !important;
	text-transform: initial !important;
}

@media screen and (min-width: $md) {
}
</style>
