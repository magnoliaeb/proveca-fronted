<template>
	<v-navigation-drawer
		style="background-color: #fff"
		v-click-outside="clickOutside"
		:value="$observer.showCart"
		width="473px"
		right
		fixed
	>
		<v-row class="d-flex align-center mt-10" style="position: relative">
			<v-btn
				absolute
				left
				color="#000"
				@click="closeCart"
				text
				icon
				depressed
				small
			>
				<v-icon>mdi-close</v-icon>
			</v-btn>
			<v-col cols="12" class="text-center">
				<h2>Mi carrito</h2>
			</v-col>
		</v-row>
		<v-row class="mb-2">
			<v-col cols="12">
				<v-divider dark style="border-color: #2cafe5"></v-divider>
			</v-col>
		</v-row>
		<ul>
			<ItemCart
				v-for="(item, index) in items"
				:item="item"
				class="list-complete-item"
				:key="`key-${index}`"
			/>
		</ul>
		<v-row class="mb-2">
			<v-col cols="12">
				<v-divider dark style="border-color: #2cafe5"></v-divider>
			</v-col>
		</v-row>
		<div class="">
			<v-row class="justify-space-between align-center" v-if="itemCount">
				<v-col cols="auto">
					<p>Cantidad de productos:</p>
				</v-col>
				<v-col cols="auto" class="text-right pt-0">
					<p>{{ itemCount }}</p>
				</v-col>
			</v-row>
			<v-row class="justify-space-between align-center" v-else>
				<v-col class="text-right pt-0">
					<p>Tu carrito está vació.</p>
				</v-col>
			</v-row>

			<!-- <v-row class="justify-space-between align-center">
				<v-col cols="auto">
					<p>Envío::</p>
				</v-col>
				<v-col cols="auto" class="text-right pt-0">
					<p>{{ $util.getMoneyFormat(53.0) }}</p>
				</v-col>
			</v-row> -->

			<v-row class="justify-space-between align-center">
				<v-col cols="auto">
					<h5>Total</h5>
				</v-col>
				<v-col cols="auto" class="text-right pt-0">
					<h5>{{ formattedTotal }}</h5>
				</v-col>
			</v-row>
			<v-row class="my-6">
				<v-col cols="12" class="">
					<v-btn
						class="button-primary"
						@click.native="closeCart"
						:to="'/carrito'"
						block
						depressed
					>
						Hacer mi pedido
					</v-btn></v-col
				>
			</v-row>
		</div>
	</v-navigation-drawer>
</template>

<script>
import CartMixin from '~/mixins/CartMixin';

export default {
	mixins: [CartMixin],

	computed: {
		items() {
			return this.$store.getters['cart/getItems'];
		},
	},

	methods: {
		closeCart() {
			this.$observer.showCart = false;
		},

		clickOutside(event) {
			if (event.target.id !== 'cart') {
				this.closeCart();
			}
		},
	},
};
</script>

<style lang="scss" scoped>
h2 {
	font-weight: 900;
	font-size: $fs-xl;
	color: #000000;
}

p {
	font-weight: 300;
	font-size: $fs-base;
	line-height: 21px;
	/* identical to box height */

	color: #000000;
	margin-bottom: 0;
}

h5 {
	font-weight: 600;
	font-size: $fs-base;
	line-height: 21px;
	/* identical to box height */

	color: #2cafe5;
}

@media screen and (min-width: $sm) {
}
</style>
