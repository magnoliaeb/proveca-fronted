<template>
	<div class="content-dialog">
		<v-card-text class="d-sm-none">
			<div class="variants-selector">
				<v-row class="d-none d-sm-flex">
					<v-col
						class=""
						cols="12"
						sm=""
						v-for="(variantAttribute, i) in product.variants_attributes"
						:key="i"
					>
						<h4 class="text-center">
							{{ variantAttribute.name }}
						</h4>
					</v-col>

					<v-col cols="12" sm="3" class="">
						<h4 class="text-center">Libras</h4>
					</v-col>

					<v-col cols="12" sm="2" class="">
						<h4 class="text-center">P. Unit</h4>
					</v-col>

					<v-col cols="12" sm="3" class="">
						<h4 class="text-center">Total</h4>
					</v-col>
				</v-row>

				<!-- <v-row>
			<v-col cols="6">

			</v-col>
			<v-col cols="6">

			</v-col>
		</v-row> -->

				<v-row class="align-center" v-for="(variant, i) in variants" :key="i">
					<v-col cols="12" sm="4" class="pa-0 d-sm-flex align-center">
						<v-row
							class="flex-grow-1 align-center my-0"
							v-for="(variantAttribute, j) in product.variants_attributes"
							:key="j"
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
								<h4>Libras</h4>
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
									>
										<v-icon>mdi-plus</v-icon>
									</v-btn>
								</div>
								<small class="d-block d-sm-none text-center">
									Precio por libra: $0.34
								</small>
							</v-col>
						</v-row>

						<small class="d-none d-sm-block text-center">
							Precio por libra: $0.34
						</small>
					</v-col>

					<v-col cols="12" sm="2" class="pa-0">
						<v-row>
							<v-col class="d-flex d-sm-none" cols="6" md="auto">
								<h4>P. Unitario</h4>
							</v-col>
							<v-col class="py-0" cols="6" sm="12">
								<p class="mb-0 text-center">
									{{ $util.getMoneyFormat(variant.price) }}
								</p>
							</v-col>
						</v-row>
					</v-col>

					<v-col cols="12" sm="3" class="pa-0">
						<v-row>
							<v-col class="d-flex d-sm-none" cols="6" md="auto">
								<h4>Total</h4>
							</v-col>
							<v-col class="py-0" cols="6" sm="12">
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

				<!-- <table>
			<tr>
				<th
					v-for="(variantAttribute, i) in product.variants_attributes"
					:key="i"
				>
					{{ variantAttribute.name }}
				</th>

				<th>Libras</th>

				<th>P. Unitario</th>

				<th>Total</th>
			</tr>

			<tr class="mb-1" v-for="(variant, i) in variants" :key="i">
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
						<v-btn color="#ffffff" tile x-small fab @click="dec(i)" depressed>
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
						>
							<v-icon>mdi-plus</v-icon>
						</v-btn>
					</div>

					<small> Precio por libra: $0.34 </small>
				</td>

				<td>
					{{ $util.getMoneyFormat(variant.price) }}
				</td>

				<td>
					{{ $util.getMoneyFormat(variant.price * variant.qty) }}
				</td>
			</tr>
		</table> -->
			</div>
		</v-card-text>
		<v-card-text class="d-none d-sm-block">
			<div class="variants-selector overflow-x-auto">
				<table>
					<tr class="">
						<th
							class="pb-4"
							v-for="(variantAttribute, i) in product.variants_attributes"
							:key="i"
						>
							{{ variantAttribute.name }}
						</th>

						<th class="pb-4">Libras</th>

						<th class="pb-4">P. Unitario</th>

						<th class="pb-4">Total</th>
					</tr>

					<tr class="mb-1" v-for="(variant, i) in variants" :key="i">
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
								>
									<v-icon>mdi-plus</v-icon>
								</v-btn>
							</div>

							<small> Precio por libra: $0.34 </small>
						</td>

						<td>
							{{ $util.getMoneyFormat(variant.price) }}
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
						:disabled="!Boolean(qty)"
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
	},
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
