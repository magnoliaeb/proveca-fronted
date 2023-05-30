<template>
	<article v-if="product" class="">
		<div
			class="img-content"
			:style="`width: ${heightAndWidthImg}px; height: ${heightAndWidthImg}px`"
		>
			<v-btn
				absolute
				class="d-md-none btn-float"
				depressed
				fab
				dark
				color="#2cafe5"
				:disabled="false"
				@click="openDialogInfo"
			>
				<v-icon small class="">mdi-plus</v-icon>
			</v-btn>
			<nuxt-link
				:to="{
					name: 'productos-id-slug d-flex',
					params: { id: product.id, slug: product.slug },
				}"
			>
				<client-only>
					<v-img
						:width="'80%'"
						transition="scale-transition"
						:height="'80%'"
						:src="picture"
						:lazy-src="picture"
						:alt="product.name"
						aspect-ratio="1"
						contain
						class="img mx-auto"
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
		<div class="px-3 mt-2 mt-md-4">
			<h4 class="mb0 md-md-3 text-center">
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
					<h5 class="mb-0 d-flex align-baseline">
						<span class="mr-1">{{ $util.getMoneyFormat(product.price) }}</span>
					</h5>
				</div>
				<v-btn
					small
					class="cart px-3 rounded-pill mt-3 mt-md-0 d-none d-md-block"
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
	props: ['product'],

	computed: {
		picture() {
			return _.get(this.product, 'picture.url', '/loading.png');
		},

		heightAndWidthImg() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return 50;
				case 'sm':
					return 80;
				case 'md':
					return 100;
				case 'lg':
					return 100;
				case 'xl':
					return 100;
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
		},
	},
};
</script>

<style lang="scss" scoped>
article {
	// border-bottom: 1px solid #ededed;
	// max-width: 250px;
}

.img-content {
	position: relative;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	border-radius: 9.1894px;
	a {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
	}
}
button.btn-float {
	width: 20px !important;
	height: 20px !important;
	bottom: -4px;
	right: -4px;
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

@media screen and (min-width: $sm) {
	button.btn-float {
		width: 25px !important;
		height: 25px !important;
		bottom: -4px;
		right: -4px;
	}
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
