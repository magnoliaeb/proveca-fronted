<template>
	<v-dialog
		v-if="product"
		v-model="$observer.showDialogInfo"
		content-class="product-dialog-info"
		persistent
		max-width="480"
	>
		<v-card class="py-4" style="position: relative">
			<div class="">
				<v-btn
					style="top: 10px; right: 10px"
					color="#000"
					text
					@click="closeDialog"
					icon
					absolute
				>
					<v-icon>mdi-close</v-icon>
				</v-btn>
				<v-card-title>
					<v-row class="">
						<v-col cols="12">
							<h3 class="text-center">
								{{ product.name }}
							</h3>
						</v-col>
					</v-row>
				</v-card-title>
				<v-card-text>
					<div>
						<!-- <PriceInfoItem
						v-for="(variant, i) in variants"
						:key="i"
						:product="product"
						:variant="variant"
					/> -->
						<VariantsSelector :product="product" />
					</div>
				</v-card-text>
			</div>
		</v-card>
	</v-dialog>
</template>

<script>
// import PriceInfoItem from './PriceInfoItem.vue';
// import VariantSelector from './VariantSelector.vue';
import VariantsSelector from './VariantsSelector.vue';
export default {
	components: {
		// PriceInfoItem
		VariantsSelector
	},

	computed: {
		product() {
			return this.$observer.productDialogInfo;
		},

		// variants() {
		// 	return this.product.variants.filter(
		// 		variant => variant.stock >= 1 && variant.price > 0
		// 	)
		// }
	},

	methods: {
		closeDialog() {
			this.$observer.showDialogInfo = false;
		},
	},
};
</script>

<style lang="scss" scoped>
// .card-info {
//   // position: relative;
//   position: absolute;
//   z-index: 200;
//   background: #ffffff;
//   box-shadow: 0px 2px 6px rgba(108, 108, 108, 0.5);
//   border-radius: 7px;
//   height: auto;
//   // height: 467px;
//   width: 95%;
//   max-width: 420px;
//   margin: 0 auto;
//   left: 0;
//   right: 0;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
// }
</style>
