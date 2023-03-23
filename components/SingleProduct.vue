<template>
	<v-row class="justify-space-between py-md-6">
		<v-col cols="12" md="12" lg="auto" class="">
			<SliderSingleProduct :product="product" />
		</v-col>

		<v-col cols="12" sm="12" md="12" lg="5" xl="6" class="pa-0">
			<v-row class="justify-space-between align-end">
				<v-col cols="12">
					<h2>{{ product.name }}</h2>
				</v-col>

				<v-col cols="5" class="d-flex align-center">
					<h3 class="mr-3">Compartir:</h3>
					<div class="d-flex">
						<v-btn
							v-for="social, i in socials"
							:key="i"
							icon
							text
							:color="social.color"
							class="mr-3"
						>
							<ShareNetwork
								:network="social.network"
								:title="social.title"
								:description="social.description"
								:url="$util.getLocation()"
							>
								<img
									height="25"
									width="25"
									:src="require(`../assets/imgs/iconos/${social.icon}.svg`)"
									:alt="social.network"
								/>
							</ShareNetwork>
						</v-btn>
					</div>
				</v-col>
			</v-row>

			<v-row class="mt-4 mb-6">
				<v-col cols="12">
					<ul>
						<PriceInfoItem2
							v-for="(variant, i) in variants"
							:key="i"
							:product="product"
							:variant="variant"
						/>
					</ul>
				</v-col>
			</v-row>

			<!-- <v-row class="align-center justify-space-between">
				<v-col cols="12" sm="6">
					<v-btn
						depressed
						block
						class="blue-dark"
						:loading="loading"
						:disabled="false"
						@click="add"
					>
						Comprar
					</v-btn>
				</v-col>
				<v-col cols="12" sm="6">
					<v-btn
						depressed
						block
						class="blue-light"
						:loading="loading"
						:disabled="false"
						@click="add"
					>
						Agregar al carrito
					</v-btn>
				</v-col>
			</v-row> -->

			<v-row class="">
				<v-col cols="12">
					<h5>Descripción del producto</h5>
				</v-col>
				<v-col cols="12">
					<p v-html="product.description"></p>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>
import SliderSingleProduct from './SliderSingleProduct.vue';
import PriceInfoItem2 from './PriceInfoItem2.vue';

export default {
	components: {
		SliderSingleProduct,
		PriceInfoItem2
	},

	props: [
		'product'
	],

	data() {
		return {
			qty: 10,
			loading: false,
			// alert: false,
			// duration: 3000,

			socials: [
				{
					icon: "whatsapp",
					network: "whatsapp",
					title: this.product.meta_title,
					description: this.product.meta_description,
					color: 'success'
				},
				{
					icon: "facebook",
					network: "facebook",
					title: this.product.meta_title,
					description: this.product.meta_description,
					color: 'accent'
				}
			]
		}
	},

	computed: {
		variants() {
			return this.product.variants.filter(
				variant => variant.stock >= 1 && variant.price > 0
			)
		}
	}
};
</script>

<style lang="scss" scoped>
h2 {
	font-weight: 700;
	font-size: $fs-2xl;

	color: #2cafe5;
}
h3 {
	font-weight: 300;
	font-size: $fs-md;
	color: #2cafe5;
}
h4 {
	font-weight: 300;
	font-size: $fs-base;

	span {
		font-weight: 500;
		font-size: $fs-base;

		color: #2cafe5;
	}
	s {
		font-weight: 300;
		font-size: $fs-base;

		text-decoration-line: line-through;

		color: rgba(0, 0, 0, 0.2);
	}
}

h5 {
	font-weight: 700;
	font-size: $fs-md;
	color: #2cafe5;
}
p {
	font-weight: 400;
	font-size: $fs-base;
	color: #000000;
}

button.blue-dark {
	text-indent: initial !important;
	font-weight: 300 !important;
	font-size: $fs-md !important;
	line-height: 26px !important;

	color: #ffffff !important;
	border-radius: 11px !important;
	text-transform: initial !important;
	background: #196382 !important;
	height: 50px !important;
}
button.blue-light {
	text-indent: initial !important;
	font-weight: 300 !important;
	font-size: $fs-md !important;
	line-height: 26px !important;

	color: #ffffff !important;
	border-radius: 11px !important;
	text-transform: initial !important;
	background: #2cafe5 !important;
	height: 50px !important;
}

ul {
	li {
		border-bottom: 1px solid rgba(0, 0, 0, 0.15);
		&:last-child {
			border-bottom: none;
		}
	}
}

.group-input {
	// border: 1px solid red;
	position: relative;
	display: flex;
	align-items: center;
	// width: 89px;
	height: 30px;
	max-width: 80px;

	button {
		position: absolute;
		height: 25px;
		width: 25px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		border: 1px solid $primary;
		font-size: $fs-sm;
		span {
			color: #000000;
		}
	}
	button.left {
		left: -5px;
	}
	button.right {
		right: -5px;
	}
}

input {
	width: 100%;
	text-align: center;
	height: 100%;
	font-weight: 300;
	font-size: $fs-base;
	line-height: 23px;
	color: #2cafe5;
	&:focus {
		outline: none;
	}
}

@media screen and (min-width: $md) {
	button.blue-dark {
		height: 60px !important;
	}
	button.blue-light {
		height: 60px !important;
	}
}
</style>
