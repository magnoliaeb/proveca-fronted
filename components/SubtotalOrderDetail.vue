<template>
	<u-animate
		name="animate__fadeIn"
		delay="1s"
		duration="1s"
		:iteration="1"
		:offset="0"
		animateClass="animate__animated"
		:begin="$vuetify.breakpoint.mdAndDown ? true : false"
	>
		<v-row>
			<v-col cols="12" sm="6" md="4" class="offset-sm-6 offset-md-8">
				<v-row>
					<v-col cols="12" class="d-flex justify-space-between">
						<p>Subtotal</p>
						<span>{{ $util.getMoneyFormat(order.items_subtotal) }}</span>
					</v-col>
					<v-col cols="12" class="d-flex justify-space-between">
						<p>Descuento</p>
						<span>{{ $util.getMoneyFormat(discount) }}</span>
					</v-col>

					<v-col
						v-for="(service, i) in order.services"
						:key="i"
						cols="12"
						class="d-flex justify-space-between"
					>
						<p>{{ service.name }}</p>
						<span>{{ $util.getMoneyFormat(service.price_total) }}</span>
					</v-col>

					<v-col cols="12" class="d-flex justify-space-between">
						<p class="total">Total</p>
						<span class="total">{{
							$util.getMoneyFormat(order.amount_total)
						}}</span>
					</v-col>
					<v-col cols="12" class="d-flex justify-end mt-8 px-0">
						<v-btn depressed class="primary" :loading="isLoading" @click="add">
							Agregar todo al carrito
						</v-btn>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</u-animate>
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
* {
	font-size: 16px;
	color: #272727;
}
p,
span {
	font-size: 14px;
	font-family: 'Gotham';
	font-weight: normal;
	font-size: 16px;
	line-height: 20px;
	color: #272727;
}
p.total,
span.total {
	font-size: 16px;
	font-weight: 500;
}

@media screen and (min-width: $sm) {
	p,
	span {
		font-size: 16px;
	}
	p.total,
	span.total {
		font-size: 19px;
	}
}
</style>
