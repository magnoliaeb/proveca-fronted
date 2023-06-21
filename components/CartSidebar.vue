<template>
	<v-navigation-drawer
		style="background-color: #f5f5f5; z-index: 10"
		v-click-outside="clickOutside"
		:value="$observer.showCart"
		width="520px"
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
			<v-col cols="12" class="text-center py-0 py-md-2">
				<h2>Carrito del mercado de Proveeca</h2>
			</v-col>
		</v-row>

		<ul>
			<ItemCart
				v-for="item in items"
				:item="item"
				class="list-complete-item"
				:key="item.id"
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
			<SuggestedArticles />
		</div>
		<template v-slot:append>
			<v-row class="white py-2">
				<v-col cols="12" class="py-0">
					<v-btn
						style="position: relative"
						class="d-flex cart align-center"
						@click.native="closeCart"
						:to="'/carrito'"
						block
						depressed
						:disabled="disabledBtn"
					>
						<span class="mr-2">Hacer mi pedido </span>
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
		disabledBtn() {
			return this.items.length <= 0 || this.$store.state.cart.isBusy;
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
	height: 40px !important;
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
a.cart.v-btn--disabled {
	h5 {
		background-color: #e5e5e5;
		color: rgba(0, 0, 0, 0.26);
	}
}

@media screen and (min-width: $md) {
	a.cart,
	button.cart {
		height: 50px !important;
	}
}
</style>
