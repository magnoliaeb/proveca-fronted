<template>
	<div class="ml-sm-2">
		<div class="btn-group rounded-pill d-flex align-center">
			<v-btn
				:small="$vuetify.breakpoint.xsOnly"
				depressed
				class="btn-l"
				:class="{ 'btn-selected': this.$observer.shippingType == 'delivery' }"
				:rounded="this.$observer.shippingType == 'delivery'"
				@click="$observer.setShippingTypeDelivery"
			>
				Envío
			</v-btn>

			<v-btn
				:small="$vuetify.breakpoint.xsOnly"
				depressed
				class="btn-r"
				:class="{ 'btn-selected': this.$observer.shippingType == 'pickup' }"
				:rounded="this.$observer.shippingType == 'pickup'"
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
	},
};
</script>

<style lang="scss" scoped>
.btn-group {
	display: inline-block;
	position: relative;
	width: 140px;
	height: 30px;
	overflow: hidden;
	button {
		text-transform: inherit !important;
		z-index: 0 !important;
		position: absolute;
		height: 100% !important;
		width: 90px;
		background-color: rgb(230, 230, 230) !important;
	}
	.btn-r {
		right: 0;
	}
	.btn-l {
		left: 0;
	}
	.btn-selected {
		width: 70px;
		z-index: 10 !important;
		transition: 0.1s width ease-in;
		background-color: #2cafe5 !important;
		color: #ffffff !important;
	}
}

@media screen and (min-width: $sm) {
	.btn-group {
		height: 40px;
	}
}
@media screen and (min-width: $md) {
	.btn-group {
		width: 188px;
		button {
			width: 120px;
		}
		.btn-selected {
			width: 90px;
		}
	}
}
@media screen and (min-width: $lg) {
}
</style>
