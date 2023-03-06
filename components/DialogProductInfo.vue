<template>
	<v-dialog
		:value="showDialogInfo"
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
						<h3 class="text-center">{{ 'Chocolate savoy 200 gr' }}</h3>
						<!--
              <h4 class="mt-4 text-center">Precio por kilo: $ {{ product.price }}</h4>
              -->
					</v-col>
				</v-row>

				<div>
					<PriceInfoItem
						v-for="(variant, i) in 4"
						:key="i"
						:product="product"
						:variant="variant"
					/>
				</div>

				<!-- <div v-else>
					<p class="text-center font-weight-bold font-italic pa-4">
						Producto actualmente no disponible
					</p>
				</div> -->
			</div>
		</v-card>
	</v-dialog>
</template>

<script>
import PriceInfoItem from './PriceInfoItem.vue';
export default {
	components: { PriceInfoItem },

	computed: {
		showDialogInfo() {
			return this.$store.getters['website/getShowDialogInfo'];
		},

		product() {
			return this.$store.getters['website/getDialogProduct'];
		},

		variants() {
			return this.product.variants.filter(
				(variant) => variant.stock >= 1 && variant.price > 0
			);
		},
	},

	methods: {
		closeDialog() {
			this.$store.dispatch('website/showDialogInfo', false);
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
