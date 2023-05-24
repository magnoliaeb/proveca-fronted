<template>
	<v-row tag="li" class="align-start mb-2 justify-space-between">
		<span v-show="false">{{ item }}</span>

		<v-col cols="5" class="py-0">
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
						<p class="mb-0">{{ item.name }}</p>
						<p class="mb-0">{{ $util.getVariantFormat(variant) }}</p>
						<p>{{ getQty }} pieza(s)</p>
						<!-- <h4>{{ formattedTotal }}</h4> -->
					</nuxt-link>
				</div>
			</div>
		</v-col>
		<v-col cols="auto" class="d-flex justify-center py-0 align-center">
			<v-btn
				small
				@click="deleteItem"
				icon
				color="black"
				class=""
				:loading="isBusy"
			>
				<v-icon small>mdi-delete</v-icon>
			</v-btn>
			<span class="mx-2">50 Lbs</span>
			<v-btn
				small
				@click="deleteItem"
				icon
				color="primary"
				class=""
				:loading="isBusy"
			>
				<v-icon small>mdi-plus</v-icon>
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
	mixins: [CartItemMixin],

	data() {
		return {
			isBusy: false,
			positionItem: null,
		};
	},

	computed: {
		heightImg() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return 80;
				case 'sm':
					return 80;
				case 'md':
					return 60;
				case 'lg':
					return 60;
				case 'xl':
					return 60;
			}
		},
	},

	methods: {
		closeCart() {
			this.$observer.showCart = false;
		},
	},
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
