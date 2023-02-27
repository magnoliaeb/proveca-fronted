<template>
	<v-row class="no-gutters mt-4">
		<v-col cols="12" sm="6" md="4" class="offset-sm-6 offset-md-8">
			<v-row tag="ul">
				<v-col cols="12" class="">
					<h3>Resumen</h3>
				</v-col>
				<v-col
					tag="li"
					cols="12"
					class="d-flex li justify-space-between align-center"
				>
					<p class="mb-0">Subtotal</p>
					<span>{{ $util.getMoneyFormat(25.23) }}</span>
				</v-col>
				<v-col
					tag="li"
					cols="12"
					class="d-flex li justify-space-between align-center"
				>
					<p class="mb-0">Descuento</p>
					<span>{{ $util.getMoneyFormat(23) }}</span>
				</v-col>
				<v-col
					tag="li"
					cols="12"
					class="d-flex justify-space-between align-center"
				>
					<p class="mb-0">Envio</p>
					<span>{{ $util.getMoneyFormat(0) }}</span>
				</v-col>
				<v-col cols="12" class="pt-0 px-0">
					<v-divider style="background-color: #2cafe5"></v-divider>
				</v-col>

				<v-col cols="12" class="d-flex justify-space-between align-center">
					<p class="total">Total</p>
					<span class="total">{{ $util.getMoneyFormat(2345) }}</span>
				</v-col>
				<!-- <v-col cols="12" class="d-flex justify-end mt-8 px-0">
					<v-btn
						depressed
						class="button-primary"
						:loading="isLoading"
						@click="add"
					>
						Agregar todo al carrito
					</v-btn>
				</v-col> -->
			</v-row>
		</v-col>
	</v-row>
</template>

<script>
export default {
	props: ['order'],

	data() {
		return {
			isLoading: false,
		};
	},

	computed: {
		discount() {
			return (
				this.order.amount_undiscounted -
				this.order.amount_total +
				this.order.amount_tax
			);
		},

		items() {
			return this.order.items.filter((i) => i.product);
		},

		itemsToAdd() {
			return this.$util.clone(this.items).map((item) => {
				item.variant = {
					id: item.product_product_id,
					price: item.price_unit,
				};

				item.qty = 1;

				return item;
			});
		},
	},

	methods: {
		add() {
			this.$store
				.dispatch('cart/addItems', {
					$nuxt: this.$nuxt,
					items: this.itemsToAdd,
				})
				.then((response) => {
					this.$nuxt.$emit('success-notify', 'Artículos agregados.');
				});
		},
	},
};
</script>

<style lang="scss" scoped>
h3 {
	font-weight: 500;
	font-size: 16.5744px;
	line-height: 22px;
	/* identical to box height */

	text-transform: uppercase;

	color: #000000;
}
p,
span {
	font-weight: 300;
	font-size: 16.5744px;
	line-height: 22px;
	/* identical to box height */

	color: #000000;
}
p.total,
span.total {
	font-weight: 900;
	font-size: 16.5744px;
	line-height: 22px;
	/* identical to box height */

	text-transform: uppercase;

	color: #2cafe5;
}

.li {
	border-bottom: 1px solid #e9e9e9;
}

@media screen and (min-width: $sm) {
	// p,
	// span {
	// 	font-size: 16px;
	// }
	// p.total,
	// span.total {
	// 	font-size: 19px;
	// }
}
</style>
