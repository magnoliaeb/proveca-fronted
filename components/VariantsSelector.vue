<template>
	<div class="variants-selector overflow-x-auto">
		<table>
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
		</table>

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
					<span :class="{ 'white--text': Boolean(qty) }"
						>Agregar al carrito</span
					>
				</v-btn>
			</v-col>
		</v-row>
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

@media screen and (min-width: $sm) {
	button.add {
		width: 200px !important;
	}
}
</style>
