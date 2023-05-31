<template>
	<div class="variant-selector">
		<div v-if="variants.length > 1" class="">
			<div
				class="mb-3"
				v-for="(attribute, i) in product.variants_attributes"
				:key="i"
			>
				<h3 class="mb-2">
					{{ attribute.name }}
				</h3>
				<div class="d-flex mb-4">
					<div v-for="(value, i) in attribute.values" :key="i" class="">
						<v-btn
							class="mr-2"
							depressed
							large
							@click="
								change({
									attribute: attribute.id,
									value: value.id,
								})
							"
							v-bind="
								bind({
									attribute: attribute.id,
									value: value.id,
								})
							"
						>
							{{ value.name }}
						</v-btn>
					</div>
				</div>
			</div>
		</div>

		<!-- <hr /> -->

		<div v-if="variant" class="mt-4">
			<div class="d-flex justify-space-between align-center my-2">
				<h3>
					Precio Unitario: <strong>{{ formattedUnitPrice }}</strong>
				</h3>
				<v-btn small fab @click="inc" depressed>
					<v-icon>mdi-plus</v-icon>
				</v-btn>
			</div>
			<div class="d-sm-flex align-center mt-4 justify-space-between">
				<div class="d-flex justify-space-between d-sm-none">
					<h4>Cantidad: {{ qty }}</h4>
					<h4 class="mb-0">Total: {{ formattedTotalPrice }}</h4>
				</div>
				<h4 class="d-none d-sm-block">Cantidad: {{ qty }}</h4>
				<h4 class="d-none d-sm-block">Total: {{ formattedTotalPrice }}</h4>
				<v-btn large depressed dark class="add mt-2" @click="beforeAdd">
					Agregar al carrito
				</v-btn>
			</div>
		</div>
	</div>
</template>

<script>
import BuyableMixin from '~/mixins/BuyableMixin';

export default {
	mixins: [BuyableMixin],

	watch: {
		selected: {
			immediate: true,
			deep: true,
			handler() {
				this.findVariant();
			},
		},
	},

	data() {
		return {
			selected: {},
		};
	},

	methods: {
		beforeAdd() {
			if (this.$observer.shippingType) {
				this.makeAdd();
			} else {
				this.$observer.openShippingTypeDialog(this.makeAdd);
			}
		},

		makeAdd() {
			this.add().then(() => (this.selected = {}));
		},

		change(attributeValue) {
			this.$set(this.selected, attributeValue.attribute, attributeValue.value);
		},

		findVariant() {
			if (this.variants.length > 1) {
				let variant = this.variants.find((variant) => {
					let configs = {};

					variant.config.forEach((c) => {
						configs[c.id] = c.values[0].id;
					});

					const obj1Length = Object.keys(this.selected).length;
					const obj2Length = Object.keys(configs).length;

					if (obj1Length === obj2Length) {
						return Object.keys(this.selected).every(
							(key) =>
								configs.hasOwnProperty(key) &&
								configs[key] === this.selected[key]
						);
					}

					return null;
				});

				this.setVariant(variant);
			}
		},

		bind(attributeValue) {
			if (this.selected[attributeValue.attribute] == attributeValue.value) {
				return {
					style: 'background-color: #2cafe5; color: white',
				};
			}
		},
	},
};
</script>

<style lang="scss">
.variant-selector {
	//
}
button {
	text-transform: initial !important;
	font-weight: 600 !important;
}

button.add {
	text-transform: initial !important;
	background-color: #2cafe5 !important;
	width: 100%;
}

@media screen and (min-width: $sm) {
	button.add {
		width: auto;
	}
}
</style>
