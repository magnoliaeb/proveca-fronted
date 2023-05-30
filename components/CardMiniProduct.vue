<template>
	<article v-if="product" class="py-1">
		<div class="img-content py-3">
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
						class="grey lighten-3 img mx-auto"
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
			<h4 class="mb-3 text-center">
				<nuxt-link
					:to="{
						name: 'productos-id-slug',
						params: { id: product.id, slug: product.slug },
					}"
				>
					{{ product.name }}
				</nuxt-link>
			</h4>
			<div
				class="d-flex flex-column flex-md-row align-center justify-space-between mb-4 mb-md-6 text-center text-md-left"
			>
				<div class="">
					<h5 class="mb-0 mr-2 d-flex align-baseline">
						<span class="mr-1">{{ $util.getMoneyFormat(product.price) }}</span>
					</h5>
				</div>
				<v-btn
					small
					class="cart px-3 rounded-pill mt-3 mt-md-0"
					depressed
					:disabled="false"
					@click="openDialogInfo"
				>
					<span class="d-md-none">Agregar</span>
					<v-icon class="d-none d-md-block">mdi-plus</v-icon>
				</v-btn>
			</div>
		</div>
	</article>
</template>

<script>
export default {
	props: [
		'product'
	],

	computed: {
		picture() {
			return _.get(this.product, 'picture.url', '/loading.png')
		},

		heightAndWidthImg() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return 30;
				case 'sm':
					return 100;
				case 'md':
					return 110;
				case 'lg':
					return 110;
				case 'xl':
					return 110;
			}
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
		}
	}
}
</script>

<style lang="scss" scoped>
article {
	// border-bottom: 1px solid #ededed;
	// max-width: 250px;
}

.img-content {
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	border-radius: 9.1894px;
}

h4,
h5,
a {
	font-style: normal;
	font-weight: 500;
	font-size: $fs-sm;
	// line-height: 25px;
	/* identical to box height */

	color: #aeaeae;
	// color: #000;
}
h5 {
	font-size: $fs-xs;
}

a {
	&:hover {
		color: $primary;
	}
}

s {
	text-decoration: line-through;
}

span {
	font-size: $fs-sm;
	// text-decoration-line: line-through !important;
}
button.cart {
	background-color: $primary !important;
	color: #fff !important;
}

@media screen and (min-width: $md) {
	button.cart {
		height: 30px !important;
		width: 30px !important;
		min-width: 30px !important;
		border-radius: 4px !important;
	}
}
</style>
