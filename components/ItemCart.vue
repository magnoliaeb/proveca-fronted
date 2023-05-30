<template>
	<v-row tag="li" class="align-center py-2 my-1 justify-space-between">
		<span v-show="false">{{ item }}</span>

		<v-col cols="4" md="5" class="py-0">
			<div class="d-flex">
				<nuxt-link
					class="d-block"
					@click.native="closeCart"
					:to="{
						name: 'productos-id-slug',
						params: {
							id: item.product.id,
							slug: item.product.slug,
						},
					}"
				>
					<v-img
						:width="heightImg"
						transition="scale-transition"
						:height="heightImg"
						:src="image"
						:lazy-src="image"
						:alt="item.name"
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
				</nuxt-link>
				<div class="ml-2">
					<nuxt-link
						class="d-block"
						@click.native="closeCart"
						:to="{
							name: 'productos-id-slug',
							params: {
								id: item.product.id,
								slug: item.product.slug,
							},
						}"
					>
						<p class="mb-0">
							{{ item.product.name }}
						</p>
						<p
							class="mb-0"
							v-html="$util.getVariantFormat(variant)"
						>
						</p>
						<p class="mb-0">
							{{ formattedUnitPrice }}
						</p>
						<!-- <p class="mb-0">{{ getQty }} pieza(s)</p> -->
						<!-- <p class="mb-0"><span>23</span> La Libra</p> -->
						<!-- <h4>{{ formattedTotal }}</h4> -->
					</nuxt-link>
				</div>
			</div>
		</v-col>
		<v-col cols="auto" class="d-flex justify-center py-0 align-center">
			<v-btn
				:x-small="$vuetify.breakpoint.xsOnly"
				:small="$vuetify.breakpoint.smAndUp"
				@click="deleteItem"
				icon
				color="black"
				class=""
				:loading="isBusy"
			>
				<v-icon
					:x-small="$vuetify.breakpoint.xsOnly"
					:small="$vuetify.breakpoint.smAndUp"
				>
					mdi-delete
				</v-icon>
			</v-btn>

			<span class="mx-2">
				{{ getQty }}
			</span>

			<v-btn
				:x-small="$vuetify.breakpoint.xsOnly"
				:small="$vuetify.breakpoint.smAndUp"
				@click="inc"
				icon
				color="primary"
				class=""
				:loading="isBusy"
			>
				<v-icon
					:x-small="$vuetify.breakpoint.xsOnly"
					:small="$vuetify.breakpoint.smAndUp"
				>
					mdi-plus
				</v-icon>
			</v-btn>
		</v-col>
		<v-col cols="auto" class="py-0">
			<span>{{ formattedTotal }}</span>
		</v-col>
	</v-row>
</template>

<script>
import CartItemMixin from '~/mixins/CartItemMixin';

export default {
	mixins: [
		CartItemMixin
	],

	data() {
		return {
			isBusy: false
		}
	},

	computed: {
		heightImg() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return 50;
				case 'sm':
					return 70;
				case 'md':
					return 70;
				case 'lg':
					return 70;
				case 'xl':
					return 70;
			}
		}
	},

	methods: {
		closeCart() {
			this.$observer.showCart = false
		}
	}
};
</script>

<style lang="scss" scoped>
.img {
	// width: 100%;
	object-fit: cover;
	//   max-width: 81px;
}

p {
	font-weight: 700;
	font-size: $fs-xs;
	color: #000000;
	span {
		font-size: $fs-caption;
		font-weight: 700;
		color: $primary;
	}
}
span {
	font-weight: 500;
	font-size: $fs-xs;
	color: #000000;
}

h4 {
	font-weight: 600;
	font-size: $fs-xs;
	color: #00bedc;
}

// h4 {
// 	font-weight: 600;
// 	font-size: $fs-xs;
// 	color: #00bedc;
// }

@media screen and (min-width: $sm) {
}
</style>
