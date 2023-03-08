<template>
	<div class="">
		<v-row class="no-gutters justify-center">
			<v-col cols="12" md="auto" class="d-none d-md-flex">
				<SlideProductGroup
					@changeImg="changeImgSelected"
					:imagesProduct="imagesProduct"
				/>
			</v-col>
			<v-col cols="auto" md="auto">
				<client-only>
					<v-card
						tile
						flat
						class="ma-2 d-flex justify-center align-center grey lighten-3 img-product"
						:min-height="heightImg"
						:height="heightImg"
						:width="heightImg"
						:max-width="heightImg"
					>
						<!-- <div style="width: 100%; height: 100%; position: relative"> -->
						<zoom-on-hover :img-normal="imgSelected" :scale="1"></zoom-on-hover>
						<!-- </div> -->
					</v-card>
				</client-only>
			</v-col>
		</v-row>
		<v-row class="justify-center d-md-none mt-md-4">
			<v-col cols="auto" sm="auto" class="px-0">
				<SlideProductGroup
					@changeImg="changeImgSelected"
					:imagesProduct="imagesProduct"
				/>
			</v-col>
		</v-row>

		<!-- <SliderGalleryProduct class="hidden-md-and-up" :imgs="imagesProduct" /> -->
	</div>
</template>

<script>
// import SliderGalleryProduct from './SliderGalleryProduct.vue';
import SlideProductGroup from './SlideProductGroup.vue';
export default {
	props: ['product'],
	components: { SlideProductGroup },

	computed: {
		imagesProduct() {
			// let imagesProduct = this.product.images.gallery.map((i) => i.original);

			// imagesProduct.unshift(this.product.images.original_profile);

			// return imagesProduct;
			return null;
		},
		heightImg() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return '300px';
				case 'sm':
					return '400px';
				case 'md':
					return '500px';
				case 'lg':
					return '550px';
				case 'xl':
					return '600px';
			}
		},
	},

	data() {
		return {
			// imgSelected: this.product.images.original_profile,
			imgSelected: null,
			products: [
				{
					id: 1,
					name: 'Soldadora inversor M 205',
					img: 'Producto1',
					brand: 'Xtools',
					price: '2,345',
					priceDesc: '2,85',
				},
				{
					id: 2,
					name: 'Soldadora inversor M 205',
					img: 'Producto2',
					brand: 'Xtools',
					price: '2,345',
					priceDesc: '2,85',
				},
				{
					id: 3,
					name: 'Soldadora inversor M 205',
					img: 'Producto3',
					brand: 'Xtools',
					price: '2,345',
					priceDesc: '2,85',
				},
				{
					id: 4,
					name: 'Soldadora inversor M 205',
					img: 'Producto4',
					brand: 'Xtools',
					price: '2,345',
					priceDesc: '2,85',
				},
				{
					id: 1,
					name: 'Soldadora inversor M 205',
					img: 'Producto1',
					brand: 'Xtools',
					price: '2,345',
					priceDesc: '2,85',
				},
				{
					id: 2,
					name: 'Soldadora inversor M 205',
					img: 'Producto2',
					brand: 'Xtools',
					price: '2,345',
					priceDesc: '2,85',
				},
				{
					id: 3,
					name: 'Soldadora inversor M 205',
					img: 'Producto3',
					brand: 'Xtools',
					price: '2,345',
					priceDesc: '2,85',
				},
				{
					id: 4,
					name: 'Soldadora inversor M 205',
					img: 'Producto4',
					brand: 'Xtools',
					price: '2,345',
					priceDesc: '2,85',
				},
			],
		};
	},
	methods: {
		changeImgSelected(img) {
			this.imgSelected = img;
		},
	},
};
</script>

<style lang="scss" scoped>
// @media screen and (min-width: $xl) {
.img-product {
	// width: 100%;
	// height: 100%;
	// height: 563px;
	// max-width: 100%;
	// background-color: orange;
	// object-fit: cover;
	// border: 1px solid red;
}
// }
</style>
