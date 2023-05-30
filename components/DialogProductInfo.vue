<template>
	<v-dialog
		v-if="product"
		v-model="$observer.showDialogInfo"
		content-class="product-dialog-info"
		persistent
		max-width="380"
	>
		<v-card class="py-4" style="position: relative">
			<div class="">
				<v-btn
					style="top: 6px; right: 4px"
					color="#000"
					small
					text
					@click="closeDialog"
					icon
					absolute
				>
					<v-icon>mdi-close</v-icon>
				</v-btn>
				<v-row class="pt-5">
					<v-col cols="12">
						<h3 class="text-center">
							{{ product.name }}
						</h3>
					</v-col>
				</v-row>

				<div>
					<!-- <PriceInfoItem
						v-for="(variant, i) in variants"
						:key="i"
						:product="product"
						:variant="variant"
					/> -->

					<VariantSelector :product="product"/>
				</div>
			</div>
		</v-card>
	</v-dialog>
</template>

<script>
// import PriceInfoItem from './PriceInfoItem.vue';
import VariantSelector from './VariantSelector.vue';
export default {
	components: {
		// PriceInfoItem
		VariantSelector
	},

	computed: {
		product() {
			return this.$observer.productDialogInfo
		},

		// variants() {
		// 	return this.product.variants.filter(
		// 		variant => variant.stock >= 1 && variant.price > 0
		// 	)
		// }
	},

	methods: {
		closeDialog() {
			this.$observer.showDialogInfo = false
		}
	}
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
