<template>
	<v-row class="mt-6 mt-lg-0">
		<v-col>
			<client-only>
				<v-card flat color="" class="rounded-card py-4 px-3">
					<v-row>
						<v-col cols="12">
							<h3 class="">Tu pedido</h3>
						</v-col>
					</v-row>

					<v-row class="justify-space-between align-center" tag="ul">
						<v-col cols="12" class="d-flex justify-space-between" tag="li">
							<p class="mb-0">Subtotal</p>
							<span>{{ formattedSubtotal }}</span>
						</v-col>

						<v-col cols="12" class="d-flex justify-space-between" tag="li">
							<p class="mb-0">Impuestos</p>
							<span>{{ formattedTax }}</span>
						</v-col>

						<v-col cols="12" class="d-flex justify-space-between" tag="li">
							<p class="mb-0">Descuento</p>
							<span>{{ formattedDiscount }}</span>
						</v-col>
					</v-row>
					<v-row>
						<v-col
							cols="12"
							tag="li"
							class="justify-space-between align-center d-flex"
							v-for="(service, i) in computedOrder.services"
							:key="i"
						>
							<p class="mb-0">{{ service.name }}</p>
							<span>{{ $util.getMoneyFormat(service.price_total) }}</span>
						</v-col>
					</v-row>

					<v-row class="my-2">
						<v-col
							cols="12"
							class="d-flex justify-space-between align-center card-total"
						>
							<h4 class="mb-0" :class="{ 'cupon-total': hasCupon }">Total</h4>
							<span :class="{ 'cupon-total': hasCupon }">{{
								formattedTotal
							}}</span>
						</v-col>
					</v-row>
					<!--
        <v-row
          :no-gutters="$vuetify.breakpoint.smAndDown"
          class="mt-3 mt-md-0"
        >
          <v-col cols="12" class="px-0">
            <v-btn
              class="primary"
              depressed
              block
            >
              PAGAR
            </v-btn>
          </v-col>
        </v-row>
        -->
				</v-card>
				<client-only>
					<sweet-modal icon="success" ref="modal">
						This is a success!
					</sweet-modal>
				</client-only>
			</client-only>
		</v-col>
	</v-row>
</template>

<script>
import OrderMixin from '~/mixins/OrderMixin';

export default {
	mixins: [OrderMixin],

	props: {
		hasCupon: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		itemsSubtotal() {
			return this.order.items_subtotal;
		},

		amountDiscount() {
			return (
				this.order.amount_undiscounted -
				this.order.amount_total +
				this.order.amount_tax
			);
		},

		amountTotal() {
			return this.order.amount_total;
		},

		shippingCosts() {
			return 400;
			// PENDIENTE
		},
	},

	methods: {
		//
	},
};
</script>

<style lang="scss" scoped>
* {
	// color: #373736;
}
.rounded-card {
	//   border-radius: 5px !important;
	width: 100%;
	max-width: 400px;
	border: 1.18389px solid #f5f5f5 !important;
	border-radius: 8.28721px !important;
}

h3 {
	font-weight: 500;
	font-size: $fs-md;
	text-transform: uppercase;
	color: #000000;
}
p {
	font-weight: 300;
	font-size: $fs-base;
	color: #000000;
}
span {
	font-weight: 300;
	font-size: $fs-base;
	color: #000000;
}

li {
	border-bottom: 1px solid #e9e9e9;
	&:last-child {
		border: none;
	}
}

.card-total {
	border-top: 2px solid #2cafe5;

	h4,
	span {
		font-weight: 900;
		font-size: $fs-base;
		text-transform: uppercase;

		color: #2cafe5;
	}
}
button {
	width: 100% !important;
}
@media screen and (min-width: $sm) {
	.rounded-card {
		width: 375px;
	}
}
@media screen and (min-width: $md) {
	.rounded-card {
		width: 400px;
	}
}
</style>
