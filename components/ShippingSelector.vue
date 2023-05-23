<template>
	<div>
		<v-btn
			depressed
			@click="selectedDellivery"
			outlined
			class="px-2 rounded-pill"
			color="black"
			style="border-width: 2px"
			>Delivery</v-btn
		>
		<v-btn
			depressed
			@click="selectedPickUp"
			class="px-2 rounded-pill"
			light
			color="rgb(230, 230, 230)"
			>Pickup</v-btn
		>
	</div>
</template>

<script>
export default {
	methods: {
		selectedDellivery() {
			console.log('selectedDellivery');
		},
		selectedPickUp() {
			console.log('selectedPickUp');
		},
	},
};
</script>

<style lang="scss" scoped>
button {
	text-transform: inherit !important;
}
</style>
