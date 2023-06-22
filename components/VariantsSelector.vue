<template>
	<div class="content-dialog">
		<v-card-text class="d-sm-none">
			<div class="variants-selector">
				<v-row class="d-none d-sm-flex">
					<v-col
						v-for="(variantAttribute, i) in product.variants_attributes"
						:key="i"
						class=""
						cols="12"
						sm=""
					>
						<h4 class="text-center">
							{{ variantAttribute.name }}
						</h4>
					</v-col>

					<v-col cols="12" sm="3" class="">
						<h4
							class="text-center"
							style="text-transform: capitalize;"
						>
							{{ $util.uom(product).plural }}
						</h4>
					</v-col>

					<v-col cols="12" sm="3" class="">
						<h4 class="text-center">Total</h4>
					</v-col>
				</v-row>

				<v-row
					v-for="(variant, i) in variants"
					:key="i"
					class="align-center"
				>
					<v-col cols="12" sm="4" class="pa-0 d-sm-flex align-center">
						<v-row
							v-for="(variantAttribute, j) in product.variants_attributes"
							:key="j"
							class="flex-grow-1 align-center my-0"
						>
							<v-col class="d-sm-none" cols="6" sm="12">
								<h4 class="text-left">
									{{ variantAttribute.name }}
								</h4>
							</v-col>
							<v-col class="" cols="6" sm="12">
								<p class="mb-0 text-center">
									{{ attribute(variant, variantAttribute) }}
								</p>
							</v-col>
						</v-row>
					</v-col>

					<v-col cols="12" sm="3" class="pa-0">
						<v-row>
							<v-col class="d-flex d-sm-none" cols="6" md="auto">
								<h4 style="text-transform: capitalize;">
									{{ $util.uom(product).plural }}
								</h4>
							</v-col>
							<v-col class="py-0" cols="6" sm="12">
								<div
									class="elevation-2 group-btns justify-space-between d-flex align-center mx-auto"
								>
									<v-btn
										color="#ffffff"
										tile
										x-small
										fab
										@click="dec(i)"
										depressed
										:disabled="$store.state.cart.isBusy"
									>
										<v-icon>mdi-minus</v-icon>
									</v-btn>

									<span class="font-weight-medium">
										{{ variant.qty }}
									</span>

									<v-btn
										tile
										x-small
										fab
										@click="inc(i)"
										depressed
										color="rgba(0, 0, 0, 0.12)"
										:disabled="$store.state.cart.isBusy"
									>
										<v-icon>mdi-plus</v-icon>
									</v-btn>
								</div>
								<small class="d-block d-sm-none text-center">
									{{ $util.getMoneyFormat(variant.price) }} por {{ $util.uom(product).singular }}
								</small>
							</v-col>
						</v-row>

						<small class="d-none d-sm-block text-center">
							{{ $util.getMoneyFormat(variant.price) }} por {{ $util.uom(product).singular }}
						</small>
					</v-col>

					<v-col cols="12" sm="3" class="pa-0">
						<v-row>
							<v-col class="d-flex d-sm-none" cols="6" md="auto">
								<h4>Total</h4>
							</v-col>
							<v-col cols="6" sm="12">
								<p class="mb-0 text-center">
									{{ $util.getMoneyFormat(variant.price * variant.qty) }}
								</p>
							</v-col>
						</v-row>
					</v-col>
					<v-col cols="12" class="d-sm-none">
						<v-divider></v-divider>
					</v-col>
				</v-row>
			</div>
		</v-card-text>

		<v-card-text class="d-none d-sm-block">
			<div class="variants-selector overflow-x-auto">
				<table>
					<tr class="">
						<th
							v-for="(variantAttribute, i) in product.variants_attributes"
							:key="i"
							class="pb-4"
						>
							{{ variantAttribute.name }}
						</th>

						<th
							class="pb-4"
							style="text-transform: capitalize;"
						>
							{{ $util.uom(product).plural }}
						</th>

						<th class="pb-4">Total</th>
					</tr>

					<tr
						v-for="(variant, i) in variants"
						:key="i"
						class="mb-1"
					>
						<td
							v-for="(variantAttribute, j) in product.variants_attributes"
							:key="j"
						>
							{{ attribute(variant, variantAttribute) }}
						</td>

						<td class="">
							<div
								class="elevation-2 group-btns justify-space-between d-flex align-center mx-auto"
							>
								<v-btn
									color="#ffffff"
									tile
									x-small
									fab
									@click="dec(i)"
									depressed
									:disabled="$store.state.cart.isBusy"
								>
									<v-icon>mdi-minus</v-icon>
								</v-btn>

								<span class="font-weight-medium">
									{{ variant.qty }}
								</span>

								<v-btn
									tile
									x-small
									fab
									@click="inc(i)"
									depressed
									color="rgba(0, 0, 0, 0.12)"
									:disabled="$store.state.cart.isBusy"
								>
									<v-icon>mdi-plus</v-icon>
								</v-btn>
							</div>

							<small>
								{{ $util.getMoneyFormat(variant.price) }} por {{ $util.uom(product).singular }}
							</small>
						</td>

						<td>
							{{ $util.getMoneyFormat(variant.price * variant.qty) }}
						</td>
					</tr>
				</table>
			</div>
		</v-card-text>

		<v-card-actions>
			<v-row class="align-center mt-2 justify-end">
				<v-col cols="auto">
					<h3>Total: {{ fornattedTotal }}</h3>
				</v-col>
				<v-col cols="auto">
					<v-btn
						large
						depressed
						light
						class="add"
						:disabled="! Boolean(qty) || $store.state.cart.isBusy"
						@click="beforeAdd"
					>
						<span :class="{ 'white--text': Boolean(qty) }" class="d-flex"
							>Agregar <span class="d-none d-sm-flex">al carrito</span></span
						>
					</v-btn>
				</v-col>
			</v-row>
		</v-card-actions>
	</div>
</template>

<script>
import VariantsSelectorMixin from '~/mixins/VariantsSelectorMixin';

export default {
	mixins: [VariantsSelectorMixin],

	methods: {
		attribute(variant, variantAttribute) {
			return variant.config.find((c) => c.name == variantAttribute.name)
				.values[0].name;
		},

		beforeAdd() {
			if (this.$observer.shippingType) {
				this.add();
			} else {
				this.$observer.openShippingTypeDialog(this.add);
			}
		},

		dec(i) {
			let variant = this.variant(i)

			let firstNumber = this.$util.extractFirstNumber(variant)

            let qty = this.variant(i).qty

			if (qty > 0) {
                this.$set(this.variants[i], 'qty', qty - firstNumber)
			}
		},

		inc(i) {
			let variant = this.variant(i)

			let firstNumber = this.$util.extractFirstNumber(variant)

            let qty = variant.qty

            this.$set(this.variants[i], 'qty', qty + firstNumber)
		}
	}
};
</script>

<style lang="scss">
// button {
// 	text-transform: initial !important;
// 	font-weight: 600 !important;
// }
.content-dialog {
	height: 400px;
	position: relative;
	overflow-y: auto;
}
.group-btns {
	width: 100px;
}

button.add {
	width: 100% !important;
}
table {
	width: 100%;
}
td {
	text-align: center;
	font-size: $fs-base;
}
th {
	font-size: $fs-md;
}

h3 {
	color: #2cafe5;
	font-weight: 700;
	font-size: $fs-md;
}
small {
	font-size: $fs-caption;
	color: #545454;
}

.v-card__actions {
	position: sticky !important;
	background: #fff !important;
	width: 100% !important;
	bottom: 0 !important;
}

@media screen and (min-width: $sm) {
	.content-dialog {
		height: auto;
	}
	button.add {
		width: 200px !important;
	}
}
</style>
