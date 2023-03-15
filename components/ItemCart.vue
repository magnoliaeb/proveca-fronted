<template>
	<v-row tag="li" class="align-start mb-2">
		<v-col cols="auto" class="py-0">
			<nuxt-link
				class="d-block"
				@click.native="closeCart"
				:to="{
					name: 'productos-id-slug',
					params: { id: 1, slug: 10 },
				}"
			>
				<v-img
					:width="heightImg"
					transition="scale-transition"
					:height="heightImg"
					:src="`https://picsum.photos/500/300?image=${8 * 5 + 10}`"
					:lazy-src="`https://picsum.photos/10/6?image=${8 * 5 + 10}`"
					:alt="'product.name'"
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
						params: { id: 1, slug: 10 },
					}"
				>
					<p class="mb-0">Pan blanco Bimbo</p>
					<p class="mb-0">Mediano</p>
					<p>1 pieza 680g</p>
				</nuxt-link>

				<h4>{{ $util.getMoneyFormat(45.0) }}</h4>
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
export default {
	props: ['item'],

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
		},
	},

	methods: {
		deleteItem() {
			this.isBusy = true;
			this.positionItem = this.item.product.id;

			setTimeout(() => {
				this.$store
					.dispatch('cart/deleteItem', {
						$nuxt: this.$nuxt,
						item: this.item,
						$store: this.$store,
					})
					.finally(() => {
						this.isBusy = false;
						this.positionItem = this.null;
					});
			}, 1000);
		},

		closeCart() {
			this.$observer.showCart = false
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
