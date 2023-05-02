<template>
	<article v-if="product" class="py-2">
		<div class="img-content my-5">
			<nuxt-link
				:to="{
					name: 'productos-id-slug',
					params: { id: product.id, slug: product.slug },
				}"
			>
				<client-only>
					<v-img
						:width="heightAndWidthImg"
						transition="scale-transition"
						:height="heightAndWidthImg"
						:src="picture"
						:lazy-src="picture"
						:alt="product.name"
						aspect-ratio="1"
						class="grey lighten-3 img mx-auto scale"
					>
						<template v-slot:placeholder>
							<v-row class="fill-height ma-0" align="center" justify="center">
								<v-progress-circular
									:size="30"
									:width="3"
									indeterminate
									color="primary"
								></v-progress-circular>
							</v-row>
						</template>
					</v-img>
				</client-only>
			</nuxt-link>
		</div>
		<div class="px-3 mt-4">
			<div class="product-title mb-4 mb-md-6">
				<h4>
					<nuxt-link
						:to="{
							name: 'productos-id-slug',
							params: { id: product.id, slug: product.slug },
						}"
					>
						{{ product.name }}
					</nuxt-link>
				</h4>
			</div>
			<div class="d-flex align-end justify-space-between">
				<div class="d-flex flex-wrap align-center">
					<p class="mb-0 mr-2">
						{{ $util.getMoneyFormat(product.price) }}
					</p>
					<!-- <span>{{
						$util.getMoneyFormat(product.price_without_discount)
					}}</span> -->
				</div>
				<v-btn
					class="cart px-1"
					depressed
					:disabled="false"
					@click="openDialogInfo"
				>
					<img
						src="../assets/imgs/iconos/cart-plus.svg"
						height="20"
						alt="carreta-icon"
					/>
				</v-btn>
			</div>
		</div>
	</article>
</template>

<script>
export default {
	props: {
		product: {
			type: Object,
		},
	},

	data() {
		return {
			alert: false,
			duration: 3000,
		};
	},

	computed: {
		picture() {
			return _.get(this.product, 'picture.url', '/loading.png')

			// let picture = this.product.pictures.find((p) => p.name == 'Principal');

			// return picture
			// 	? picture.url
			// 	: `https://picsum.photos/500/300?image=${8 * 5 + 10}`;
		},

		variant() {
			return this.product.variants[0];
		},

		heightAndWidthImg() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return 120;
				case 'sm':
					return 150;
				case 'md':
					return 180;
				case 'lg':
					return 170;
				case 'xl':
					return 150;
			}
		},
	},

	methods: {
		// add() {
		// 	this.loading = true;

		// 	this.$app.$cart
		// 		.addItem({
		// 			buyable_type: this.buyable.buyable_type,
		// 			buyable_id: this.buyable.buyable_id,
		// 			quantity: 1,
		// 		})
		// 		.then(() => this.showAlert())
		// 		.finally(() => (this.loading = false));
		// },

		openDialogInfo() {
			this.$observer.openDialogInfo(this.product);
		},

		showAlert() {
			this.alert = true;

			setTimeout(() => (this.alert = false), this.duration);
		},
	},
};
</script>

<style lang="scss" scoped>
article {
	border-bottom: 1px solid #ededed;
	background-color: white;
	// max-width: 250px;
}

.img-content {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
}
.product-title {
	min-height: 50px;
	width: 100%;
	height: 50px;
	// background: orange;
	text-align: center;
	margin: 0 auto;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

h4,
a {
	font-style: normal;
	font-weight: 500;
	font-size: $fs-md;
	// line-height: 25px;
	/* identical to box height */

	color: #aeaeae;
	&:hover {
		color: $primary;
	}
}

p {
	font-weight: 500;
	font-size: $fs-md;
	color: #aeaeae;
	span {
		font-weight: 300;
		font-size: $fs-base;
		color: #aeaeae;
	}
}
span {
	text-decoration-line: line-through !important;
}
button.cart {
	height: 34px !important;
	min-width: 34px !important;
	background-color: $primary !important;
	border-radius: 4px !important;
	display: flex !important;
	justify-content: center !important;
	align-items: center !important;
	img {
		height: 28px;
		width: 28px;
	}
}

@media screen and (min-width: $md) {
	.product-title {
		min-height: 55px;
		height: 55px;
	}
}
@media screen and (min-width: $lg) {
	.product-title {
		min-height: 60px;
		height: 60px;
	}
}
</style>
