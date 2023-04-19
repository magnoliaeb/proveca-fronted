<template>
	<div class="">
		<v-row class="justify-center">
			<v-col cols="12" md="auto" class="d-none d-md-flex">
				<SlideProductGroup
					v-if="product"
					:imagesProduct="product.pictures"
					@changeImg="changeImgSelected"
				/>
			</v-col>
			<v-col cols="auto" md="auto">
				<client-only v-if="imagesProduct != null">
					<v-card
						tile
						flat
						class="d-flex justify-center align-center grey lighten-3 img-product"
						:height="heightImg"
						:min-height="heightImg"
						:max-width="heightImg"
					>
						<!-- <div style="width: 100%; height: 100%; position: relative"> -->
						<zoom-on-hover
							:img-normal="imagesProduct.url"
							:scale="1"
						></zoom-on-hover>
						<!-- </div> -->
					</v-card>
				</client-only>
			</v-col>
		</v-row>
		<v-row class="justify-center d-md-none mt-md-4">
			<v-col cols="auto" sm="auto" class="">
				<SlideProductGroup
					v-if="product"
					:imagesProduct="product.pictures"
					@changeImg="changeImgSelected"
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

	components: {
		SlideProductGroup,
	},
	created() {
		// this.imgSelected = this.product?.pictures[0];
	},

	computed: {
		imagesProduct() {
			// let imagesProduct = this.product.images.gallery.map((i) => i.original);

			// imagesProduct.unshift(this.product.images.original_profile);

			if (this.imgSelected != null) {
				return this.imgSelected;
			} else if (this.product?.pictures[0]) {
				return this.product?.pictures[0];
			}
		},
		heightImg() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return '300px';
				case 'sm':
					return '400px';
				case 'md':
					return '450px';
				case 'lg':
					return '450px';
				case 'xl':
					return '550px';
			}
		},
	},

	data() {
		return {
			imgSelected: null,
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
	// border: 1px solid red !important;
}
// }
</style>
