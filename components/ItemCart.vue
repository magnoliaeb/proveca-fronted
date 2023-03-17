<template>
	<v-row tag="li" class="align-start mb-2">
		<span v-show="false">{{ item }}</span>

		<v-col cols="auto" class="py-0">
			<nuxt-link
				class="d-block"
				@click.native="closeCart"
				:to="{
					name: 'productos-id-slug',
					params: {
						id: item.product.id,
						slug: item.product.slug
					}
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
		</v-col>
		<v-col cols="" class="flex-grow-1 py-0">
			<div class="">
				<nuxt-link
					class="d-block"
					@click.native="closeCart"
					:to="{
						name: 'productos-id-slug',
						params: {
							id: item.product.id,
							slug: item.product.slug
						}
					}"
				>
					<p class="mb-0">{{ item.name }}</p>
					<p class="mb-0">{{ $util.getVariantFormat(variant) }}</p>
					<p>{{ item.qty }} pieza(s)</p>
				</nuxt-link>

				<h4>{{ formattedTotal }}</h4>
			</div>
		</v-col>
		<v-col cols="2" class="d-flex justify-center py-0">
			<v-btn @click="deleteItem" icon color="error" class="" :loading="isBusy">
				<img
					height="20px"
					width="20px"
					src="../assets/imgs/iconos/delete.svg"
					alt="delete"
				/>
			</v-btn>
		</v-col>
	</v-row>
</template>

<script>
import CartItemMixin from '~/mixins/CartItemMixin'

export default {
	mixins: [
    	CartItemMixin
	],

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
					return 90;
				case 'lg':
					return 90;
				case 'xl':
					return 90;
			}
		}
	},

	methods: {
		closeCart() {
			this.$observer.showCart = false
		}
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
	font-weight: 400;
	font-size: $fs-sm;
	color: #000000;
}

h4 {
	font-weight: 600;
	font-size: $fs-xs;
	color: #00bedc;
}

@media screen and (min-width: $sm) {
}
</style>
