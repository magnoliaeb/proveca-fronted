<template>
	<v-row class="table">
		<v-col cols="12" class="px-0 px-lg-3">
			<!-- heading table -->
			<v-row class="d-none d-sm-flex">
				<v-col class="pl-0" sm="5">
					<h3 class="text-left">Producto</h3>
				</v-col>

				<v-col class="text-center" sm="2">
					<h3>Cantidad</h3>
				</v-col>
				<v-col class="text-center" sm="2">
					<h3>Precio</h3>
				</v-col>
				<v-col class="" sm="3">
					<h3 class="text-center">Total</h3>
				</v-col>
			</v-row>

			<v-row class="">
				<v-col cols="12" class="px-0 d-block d-sm-none text-center">
					<h1>Mi carrito</h1>
				</v-col>
				<v-col cols="12" class="px-0">
					<v-divider dark style="background-color: #000000"></v-divider>
				</v-col>
			</v-row>
			<!-- body table -->

			<ul>
				<CartItem
					v-for="(item, index) in 4"
					:key="index"
					:item="item"
					:index="index"
				/>
			</ul>
		</v-col>
	</v-row>
</template>

<script>
import CartItem from './CartItem.vue';
import SkeletonTableCart from './SkeletonTableCart.vue';
export default {
	components: { CartItem, SkeletonTableCart },

	computed: {
		items() {
			return [
				{
					item: {
						product: {
							id: 1,
							slug: 'product-1',
							picture: {
								url: '',
							},
						},
						name: 'product 1',
					},
				},
			];
			// return this.$store.getters['cart/getItem'];
		},
	},
};
</script>

<style lang="scss" scoped>
// .table {
// 	width: 700px;
// 	border: 2px solid red;
// }
h3 {
	font-weight: 400;
	font-size: $fs-sm;
	text-transform: uppercase;
	color: #000000;
}

h1 {
	font-weight: 700;
	font-size: $fs-lg;
	color: #2cafe5;
}

@media screen and (min-width: $xl) {
	// .table {
	// 	width: 100%;
	// 	border: 2px solid red;
	// }
}
</style>
