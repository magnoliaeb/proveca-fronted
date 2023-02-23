<template>
	<div>
		<template v-if="$fetchState.pending">
			<client-only>
				<v-row>
					<v-col
						class="mb-3"
						v-for="(product, index) in numSkeleton"
						:key="index"
						cols="6"
						sm="6"
						md="4"
						lg="4"
						xl="3"
					>
						<SkeletonProduct />
					</v-col>
				</v-row>
			</client-only>
		</template>

		<p v-else-if="$fetchState.error">An error occurred :(</p>
		<div v-else>
			<div v-if="products && products.length > 0">
				<v-row class="" :dense="$vuetify.breakpoint.xsOnly">
					<v-col
						class=""
						v-for="(product, index) in products"
						:key="index"
						cols="6"
						sm="6"
						md="4"
						lg="4"
						xl="3"
					>
						<ProductCard :product="product" />
					</v-col>
				</v-row>

				<!-- <client-only>
          <infinite-loading
            @infinite="onBottom"
            :identifier="$store.state.product.filteredInfiniteScrollId"
          >
            <span slot="no-more"></span>
            <span slot="no-results"></span>
          </infinite-loading>
        </client-only> -->
			</div>

			<DataEmpty v-else />
		</div>
	</div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import SkeletonProduct from './SkeletonProduct.vue';

export default {
	components: { ProductCard, SkeletonProduct },

	async fetch() {
		// await this.$store
		//   .dispatch("product/filtered", this.$route.query)
		//   .then((r) => r.data);
	},

	computed: {
		numSkeleton() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return Array(4);
				case 'sm':
					return Array(4);
				case 'md':
					return Array(6);
				case 'lg':
					return Array(6);
				case 'xl':
					return Array(8);
			}
		},
		products() {
			// return [];
			return [
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
			];
		},
	},

	methods: {
		// onBottom($state) {
		//   //   this.$store
		//   //     .dispatch("product/filtered", {
		//   //       ...this.$route.query,
		//   //       paginate: true,
		//   //     })
		//   //     .then((r) => {
		//   //       if (r.data.length) {
		//   //         $state.loaded();
		//   //       } else {
		//   //         $state.complete();
		//   //       }
		//   //     });
		// },
	},
};
</script>

<style lang="scss" scoped></style>
