<template>
	<div class="">
		<div class="d-flex">
			<v-btn
				:small="$vuetify.breakpoint.xsOnly"
				depressed
				class="px-2 rounded-pill"
				v-bind="bind('delivery')"
				@click="$observer.setShippingTypeDelivery"
			>
				Delivery
			</v-btn>

			<v-btn
				:small="$vuetify.breakpoint.xsOnly"
				depressed
				class="px-2 rounded-pill"
				v-bind="bind('pickup')"
				@click="$observer.setShippingTypePickup"
			>
				Pickup
			</v-btn>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		// '#2cafe5'

		bind(type) {
			return this.$observer.shippingType == type
				? {
						style: 'border-width: 2px; background-color: #2cafe5;',
						color: 'white',
						outlined: true,
				  }
				: {
						light: true,
						color: 'rgb(230, 230, 230)',
				  };
		},
	},
};
</script>

<style lang="scss" scoped>
button {
	text-transform: inherit !important;
}
</style>
