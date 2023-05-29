<template>
	<v-navigation-drawer
		style="background-color: #f5f5f5"
		v-click-outside="clickOutside"
		:value="$observer.showCart"
		width="473px"
		right
		fixed
	>
		<v-row
			class="d-flex align-center py-4 mb-2"
			style="position: relative; background: #fff"
		>
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
				<h2>Carrito del mercado de Proveeca</h2>
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
		<!-- <v-row class="mb-2">
			<v-col cols="12">
				<v-divider dark style="border-color: #2cafe5"></v-divider>
			</v-col>
		</v-row> -->
		<div class="">
			<!-- <v-row class="justify-space-between align-center">
				<v-col cols="auto">
					<p>Cantidad de productos:</p>
				</v-col>
				<v-col cols="auto" class="text-right pt-0">
					<p>{{ itemCount }}</p>
				</v-col>
			</v-row> -->
			<v-row class="justify-space-between align-center" v-if="!itemCount">
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

			<!-- <v-row class="justify-space-between align-center">
				<v-col cols="auto">
					<h5>Total</h5>
				</v-col>
				<v-col cols="auto" class="text-right pt-0">
					<h5>{{ formattedTotal }}</h5>
				</v-col>
			</v-row> -->
		</div>
		<template v-slot:append>
			<SuggestedArticles />
			<v-row class="">
				<v-col cols="12" class="">
					<v-btn
						style="position: relative"
						class="d-flex cart align-center"
						@click.native="closeCart"
						:to="'/carrito'"
						block
						depressed
					>
						<span>Hacer mi pedido </span>
						<h5 class="d-flex pa-2 rounded-lg">{{ formattedTotal }}</h5>
					</v-btn></v-col
				>
			</v-row>
		</template>
	</v-navigation-drawer>
</template>

<script>
import CartMixin from '~/mixins/CartMixin';
import SuggestedArticles from './SuggestedArticles.vue';

export default {
	components: { SuggestedArticles },
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
ul {
	background-color: #fff;
}
h2 {
	font-weight: 900;
	font-size: $fs-base;
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

a.cart,
button.cart {
	background: $primary !important;
	border-radius: 12px !important;
	font-weight: 800 !important;
	font-size: $fs-base !important;
	height: 50px !important;
	color: white !important;
	text-transform: inherit !important;
}

h5 {
	color: white;
	font-weight: 600;
	font-size: $fs-sm;
	position: absolute;
	right: 0px;
	background-color: rgb(30, 158, 212);
}

@media screen and (min-width: $sm) {
}
</style>
