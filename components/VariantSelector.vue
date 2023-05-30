<template>
	<div class="variant-selector">
		<div v-if="variants.length > 1">
			<div
				v-for="attribute, i in product.variants_attributes"
				:key="i"
			>
				<p>
					{{  attribute.name }}
				</p>

				<div
					v-for="value, i in attribute.values"
					:key="i"
				>
					<v-btn
						@click="change({
							attribute: attribute.id,
							value: value.id
						})"
						v-bind="bind({
							attribute: attribute.id,
							value: value.id
						})"
					>
						{{ value.name }}
					</v-btn>
				</div>
			</div>
		</div>

		<hr>

		<div v-if="variant">
			<div>
				PRECIO UNITARIO {{ formattedUnitPrice }}
			</div>

			<div>
				CANTIDAD {{ qty }}
			</div>

			<div>
				<v-btn
					@click="inc"
				>
					SUMAR 1
				</v-btn>
			</div>

			<div>
				TOTAL {{ formattedTotalPrice }}
			</div>

			<div>
				<v-btn
					@click="beforeAdd"
				>
					AGREGAR AL CARRITO
				</v-btn>
			</div>
		</div>
	</div>
</template>

<script>
import BuyableMixin from "~/mixins/BuyableMixin";

export default {
	mixins: [
		BuyableMixin
	],

	watch: {
		selected: {
			immediate: true,
			deep: true,
			handler() {
				this.findVariant()
			}
		}
	},

	data() {
		return {
			selected: {}
		}
	},

	methods: {
		beforeAdd() {
			if(this.$observer.shippingType) {
				this.makeAdd()
			} else {
				this.$observer.openShippingTypeDialog(this.makeAdd)
			}
		},

		makeAdd() {
			this.add()
				.then(
					() => this.selected = {}
				)
		},

		change(attributeValue) {
			this.$set(
				this.selected,
				attributeValue.attribute,
				attributeValue.value
			)
		},

		findVariant() {
			if(this.variants.length > 1) {
				let variant = this.variants.find(variant => {
					let configs = {}

					variant.config.forEach(c => {
						configs[c.id] = c.values[0].id
					})

					const obj1Length = Object.keys(this.selected).length
					const obj2Length = Object.keys(configs).length

					if (obj1Length === obj2Length) {
						return Object.keys(this.selected).every(
							key => configs.hasOwnProperty(key)
								&& configs[key] === this.selected[key]
						)
					}

					return null
				})

				this.setVariant(variant)
			}
		},

		bind(attributeValue) {
			if(this.selected[attributeValue.attribute] == attributeValue.value) {
				return {
					style: 'background-color: aqua;'
				}
			}
		}
	}
};
</script>

<style lang="scss">
	.variant-selector {
		//
	}
</style>
