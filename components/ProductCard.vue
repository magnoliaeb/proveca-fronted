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
			<div class="mb-4 mb-md-6 text-md-left">
				<div class="text-center">
					<h4 class="mb-0 mr-2">
						{{ $util.getMoneyFormat(product.price) }}
						<!--x (Unidad de medida)-->
					</h4>
					<h5>
						<nuxt-link
							:to="{
								name: 'productos-id-slug',
								params: { id: product.id, slug: product.slug },
							}"
						>
							{{ product.name }}
						</nuxt-link>
					</h5>
				</div>
				<h6 v-if="countVariants > 1" class="text-center">
					Opciones: <span>{{ countVariants }} variantes</span>
				</h6>
				<div class="d-flex justify-center">
					<v-btn
						class="cart px-3 rounded-pill mt-3"
						depressed
						:disabled="false"
						@click="openDialogInfo"
					>
						<!-- <img
						class="d-block d-sm-none"
						src="../assets/imgs/iconos/cart-plus.svg"
						height="15"
						alt="carreta-icon"
					/> -->
						<v-icon class="" left>mdi-plus</v-icon>
						<span class="">Añadir</span>
					</v-btn>
				</div>
			</div>
		</div>
	</article>
</template>

<script>
export default {
	props: ['product'],

	data() {
		return {
			alert: false,
			duration: 3000,
		};
	},

	computed: {
		picture() {
			return _.get(this.product, 'picture.url', '/loading.png');
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

		countVariants() {
			return this.product.variants.length;
		},
	},

	methods: {
		openDialogInfo() {
			if (this.$observer.shippingType) {
				this.makeOpenDialogInfo();
			} else {
				this.$observer.openShippingTypeDialog(this.makeOpenDialogInfo);
			}
		},

		makeOpenDialogInfo() {
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

h4 {
	font-style: normal;
	font-weight: 800;
	font-size: $fs-base;
	color: #000;
}
h5,
a {
	font-style: normal;
	font-weight: 500;
	font-size: $fs-base;
	// line-height: 25px;
	/* identical to box height */

	color: #aeaeae;
	// color: #000;
}

a {
	&:hover {
		color: $primary;
	}
}

h6 {
	font-size: $fs-xs;
	span {
		color: $primary;
		text-decoration: none !important;
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
	height: 30px !important;
	min-width: 40px !important;
	background-color: $primary !important;
	// border-radius: 4px !important;
	color: #fff !important;
	img {
		height: 25px;
		width: 25px;
	}
	span {
		text-decoration: none !important;
	}
}

@media screen and (min-width: $md) {
	.product-title {
		min-height: 55px;
		height: 55px;
	}
	button.cart {
		height: 32px !important;
		min-width: 40px !important;
	}
}
@media screen and (min-width: $lg) {
	.product-title {
		min-height: 60px;
		height: 60px;
	}
}
</style>
