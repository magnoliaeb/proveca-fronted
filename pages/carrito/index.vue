<template>
	<div class="mt-16 pt-4 pt-sm-0">
		<div class="content pb-16">
			<!-- <HeadingTop class="d-block d-sm-none" /> -->

			<v-row class="align-start no-gutters">
				<v-col cols="12" sm="12" md="12" lg="7" xl="8" class="">
					<!-- table cart -->
					<TableCart />
				</v-col>
				<v-col cols="12" sm="auto" md="auto" style="position: sticky; top: 10%">
					<!-- resume -->
					<CartResumen />
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
import CartResumen from '../../components/CartResumen.vue';
import TableCart from '../../components/TableCart.vue';
import HeadingTop from '../../components/HeadingTop.vue';
export default {
	components: {
		CartResumen,
		TableCart,
		HeadingTop,
	},
	head: {
		title: 'Mi carrito',
	},
};
</script>

<style lang="scss" scoped>
h1 {
	font-weight: 700;
	font-size: $fs-lg;
	color: #000000;
}
</style>
