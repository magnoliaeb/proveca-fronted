<!-- <template>
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
						sm="4"
						md="3"
						lg="3"
						xl="3"
					>
						<ProductCard :product="product" />
					</v-col>
				</v-row>
			</div>

			<DataEmpty v-else />
		</div>
	</div>
</template> -->

<template>
	<div class="content px-lg-12">
		<v-row :dense="$vuetify.breakpoint.smAndDown">
			<v-col
				v-for="(product, index) in products"
		  		:key="`product-${index}`"
		  		class="mb-lg-4"
		  		cols="6"
		  		sm="6"
		  		md="4"
		  		lg="3"
			>
				<ProductCard
					:product="product"
					class="fill-height"
		  		/>
			
			</v-col>
	  </v-row>
	  
	  <infinite-loading @infinite="loadProducts">
			<div slot="no-results"><p>Sin productos.</p></div>
  
			<template #spinner>
		  		<client-only>
					<v-row>
			  			<v-col
							v-for="(product, index) in numSkeleton"
							:key="index"
							class="mb-3"
							cols="6"
							sm="6"
							md="4"
							lg="3"
			  			>
							<SkeletonProduct />
			  			</v-col>
					</v-row>
		  		</client-only>
			</template>
	  </infinite-loading>
	</div>
</template>

<script>
	import ProductCard from "./ProductCard.vue"
	import SkeletonProduct from "./SkeletonProduct.vue"

	export default {
  		components: { ProductCard, SkeletonProduct },

  		data() {
    		return {
      			page: 1,
      			isLoading: false
    		}
  		},

  		computed: {
    		products() {
      			if (this.$route.query.sort_by) {
        			this.$store.dispatch(
          				'products/applySort',
          				this.$route.query.sort_by
        			)
      			}

      		return this.$store.getters['products/getProducts']
    	},

    	numSkeleton() {
      		switch (this.$vuetify.breakpoint.name) {
        		case "xs":
          			return Array(4);
        		case "sm":
          			return Array(4);
        		case "md":
          			return Array(6);
				case "lg":
          			return Array(8);
        		case "xl":
          			return Array(8);
      		}
    	}
  	},

  	watch: {
    	"$observer.routeQuery": {
      		immediate: false,
      		deep: true,
      		handler(routeQuery) {
        		this.$router.push({
          			path: this.$route.path,
          			query: routeQuery
        		})

        		this.$observer.updateKey('GridProducts')
      		}
    	}
  	},
  
  	methods: {
    	loadProducts($state) {
      		this.isLoading = true

      		let body = {
        		page: this.page,
        		...this.$route.query
      		}

      		this.$store.dispatch("products/searchProducts", body)
        		.then(() => {
          			this.page += 1

          			if (this.$store.getters['products/getEndOfList']) {
            			$state.complete()
          			} else {
            			$state.loaded()
          			}
        		})
        		.finally(() => this.isLoading = false)
    	}
  	},

  	created() {
    	this.$store.commit('products/SET_PRODUCTS', [])
  	}
}
</script>

<style lang="scss" scoped></style>
