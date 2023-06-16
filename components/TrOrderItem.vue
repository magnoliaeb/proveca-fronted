<template>
	<v-expansion-panel class="mb-4 border-radius-card">
		<v-expansion-panel-header color="#f5f5f5" hide-actions>
			<v-row class="justify-space-between">
				<v-col v-if="computedOrder.to_picking" cols="12" sm="auto">
					<h3 class="mb-2">Se recogerá el pedido en la tienda</h3>
				</v-col>

				<v-col v-else cols="12" sm="auto">
					<h3 class="mb-2">Fecha de entrega</h3>
					<p class="mb-0">
						{{ $util.getFormattedDate(computedOrder.date_order, 2) }}
					</p>
				</v-col>

				<v-col
					cols="12"
					sm="auto"
					class="d-sm-flex align-end justify-center flex-column"
				>
					<h3 class="text-uppercase">
						Pedido N.O {{ computedOrder.display_name }}
					</h3>
					<v-btn
						class="mt-2"
						depressed
						text
						color="#2cafe5"
						:to="{
							name: 'mis-pedidos-id',
							params: { id: this.computedOrder.id },
						}"
						>Ver detalle del pedido</v-btn
					>
				</v-col>
			</v-row>
		</v-expansion-panel-header>
		<v-expansion-panel-content class="py-4">
			<v-row class="justify-space-between">
				<v-col cols="auto">
					<p>{{ itemsCount }} Artículo(s)</p>
				</v-col>
				<v-col cols="auto">
					<p class="text-left">
						Total:
						<span>{{ formattedTotal }}</span>
					</p>
				</v-col>
			</v-row>

			<v-slide-group show-arrows>
				<v-slide-item v-for="(item, i) in items" :key="i">
					<v-img
						:max-width="`${heightAndWidthImg}px`"
						transition="scale-transition"
						:height="`${heightAndWidthImg}px`"
						:src="item.picture.url"
						:lazy-src="item.picture.url"
						:alt="item.name"
						aspect-ratio="1"
						contain
						class="img-product"
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
				</v-slide-item>
			</v-slide-group>

			<!-- <v-col cols="12" md="12" lg="12" class="pa-0">
				<v-row class="align-center justify-space-between">
					<v-col cols="auto" sm="auto" md="2" class="d-flex">
						<p class="text-left">
							<span>{{ computedOrder.display_name }}</span>
						</p>
					</v-col>
					<v-col cols="auto" sm="auto" md="1" class="d-flex">
						<p class="text-left">
							<span>{{ formattedTotal }}</span>
						</p>
					</v-col>

					<v-col cols="12" md="3" class="d-flex">
						<p>
							<span v-if="order.to_picking">
								Recoger el paquete en la tienda
							</span>

							<span v-else>
								{{ shippingAddress.full }}
							</span>
						</p>
					</v-col>

					<v-col cols="12" md="2" class="d-flex">
						<p>{{ $util.getFormattedDate(computedOrder.date_order, 2) }}</p>
					</v-col>

					<v-col cols="12" md="4" class="d-flex align-center">
						<v-btn
							class="button-primary mr-3"
							depressed
							:to="{
								name: 'mis-pedidos-id',
								params: { id: this.computedOrder.id },
							}"
							style="width: auto !important"
						>
							Ver pedido
						</v-btn>

						<nuxt-link
							v-if="order.payment_status == 'unpaid' && order.state != 'cancel'"
							:to="{ name: 'mis-pedidos-id-pagar', params: { id: order.id } }"
						>
							Pagar
						</nuxt-link>
						<span v-else-if="order.state == 'cancel'"> Cancelado </span>
						<span v-else>
							{{ order.payment_label }}
						</span>
					</v-col>
				</v-row>
			</v-col> -->
		</v-expansion-panel-content>
	</v-expansion-panel>
</template>

<script>
import OrderMixin from '~/mixins/OrderMixin';

export default {
	mixins: [OrderMixin],

	computed: {
		selectedBg() {
			// switch (this.order.payment_status) {
			switch (true) {
				case 'unpaid':
					return 'bg-red';
					break;
				case 'paid':
					return 'bg-green';
					break;
				case 'cancelled':
					return 'bg-black';
					break;

				default:
					return 'bg-gray';
					break;
			}
		},
		heightAndWidthImg() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return 80;
				case 'sm':
					return 90;
				case 'md':
					return 80;
				case 'lg':
					return 80;
				case 'xl':
					return 80;
			}
		},
	},

	created() {
		this.loadFullOrder();
	},
};
</script>

<style lang="scss" scoped>
h3 {
	font-weight: 800;
	font-size: $fs-base;
	color: #000000;
}

p {
	font-weight: 400;
	font-size: $fs-base;
	line-height: 25px;

	color: #7d7d7d;
	span {
		font-weight: 800;
	}
}
.img-product {
	// border: 1px solid red !important;
}

.bg-red {
	background-color: rgb(213, 7, 22) !important;
	color: white !important;
}
.bg-green {
	background-color: rgb(79, 175, 94) !important;
	color: black !important;
}
.bg-black {
	background-color: black !important;
	color: white !important;
}
.bg-gray {
	background-color: gray !important;
	color: black !important;
}
a {
	text-transform: initial;
}

@media screen and (min-width: $md) {
}
</style>
