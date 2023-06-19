<template>
	<div class="variants-selector">
		<table>
			<tr>
				<th
					v-for="variantAttribute, i in product.variants_attributes"
					:key="i"
				>
					{{ variantAttribute.name }}
				</th>

				<th>
					Libras
				</th>

				<th>
					P. Unitario
				</th>

				<th>
					Total
				</th>
			</tr>

			<tr
				v-for="variant, i in variants"
				:key="i"
			>
				<td
					v-for="variantAttribute, j in product.variants_attributes"
					:key="j"
				>
					{{ attribute(variant, variantAttribute) }}
				</td>

				<td>
					<div>
						<v-btn
							small
							fab @click="dec(i)"
							depressed
						>
							<v-icon>mdi-minus</v-icon>
						</v-btn>

						<span>
							{{ variant.qty }}
						</span>

						<v-btn
							small
							fab @click="inc(i)"
							depressed
						>
							<v-icon>mdi-plus</v-icon>
						</v-btn>
					</div>

					<small>
						Precio por libra: $0.34
					</small>
				</td>

				<td>
					{{ $util.getMoneyFormat(variant.price) }}
				</td>

				<td>
					{{ $util.getMoneyFormat(variant.price * variant.qty) }}
				</td>
			</tr>
		</table>

		<div>
			<span>
				Total: {{ fornattedTotal }}
			</span>

			<v-btn
				large
				depressed
				dark
				class="add mt-2"
				:disabled="! Boolean(qty)"
				@click="beforeAdd"
			>
				Agregar al carrito
			</v-btn>
		</div>
	</div>
</template>

<script>
import VariantsSelectorMixin from '~/mixins/VariantsSelectorMixin'

export default {
	mixins: [
		VariantsSelectorMixin
	],

	methods: {
		attribute(variant, variantAttribute) {
			return variant.config.find(c => c.name == variantAttribute.name).values[0].name
		},

		beforeAdd() {
			if (this.$observer.shippingType) {
				this.add();
			} else {
				this.$observer.openShippingTypeDialog(this.add)
			}
		}
	}
};
</script>

<style lang="scss">
// button {
// 	text-transform: initial !important;
// 	font-weight: 600 !important;
// }

// button.add {
// 	text-transform: initial !important;
// 	background-color: #2cafe5 !important;
// 	width: 100%;
// }

// @media screen and (min-width: $sm) {
// 	button.add {
// 		width: auto;
// 	}
// }
</style>
