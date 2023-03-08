<template>
	<v-row
		class="justify-space-between py-4"
		:class="{ 'li-select': isSelected }"
	>
		<v-col cols="12" class="">
			<div class="d-flex justify-space-between align-center flex-wrap">
				<div class="d-flex align-center flex-wrap">
					<h3 class="mr-3">Casa</h3>

					<span class="selected" v-if="isSelected"
						>Dirección predeterminada</span
					>
				</div>

				<v-btn
					class="d-none d-md-block"
					@click="selectAddress"
					depressed
					text
					:disabled="false"
				>
					<span class="">Cambiar</span>
				</v-btn>
			</div>
		</v-col>

		<v-col cols="12" md="12" lg="9">
			<p>
				Donato Guerra #23 Colonia Centro C.P. 44210 Guadalajara, Jalisco,
				México.
			</p>
			<p class="d-flex flex-column flex-sm-row">
				<span class="text-break mr-sm-4">Correo: clau.esmo@gmail.com</span>
				<span class="text-break">Teléfono: (33) 2345 6789</span>
			</p>
			<div class="d-block d-md-none">
				<v-btn dense @click="selectAddress" depressed text :disabled="false">
					<span class="">Cambiar</span>
				</v-btn>
			</div>
		</v-col>
	</v-row>
</template>

<script>
export default {
	props: ['address'],

	computed: {
		selected() {
			return null;
			// return this.$store.getters['cart/getSelectedShippingAddress'];
		},

		isSelected() {
			return true;
			// return this._.get(this.selected, 'id') == this.address.id;
		},
	},

	methods: {
		selectAddress() {
			// this.$store.dispatch('cart/setShippingAddress', {
			// 	address_id: this.address.id,
			// });
		},
	},
};
</script>

<style lang="scss" scoped>
button {
	font-weight: 500 !important;
	font-size: $fs-base !important;
	// text-decoration-line: underline !important;
	color: #000000 !important;
	text-transform: initial !important;
	span {
		text-decoration: underline !important;
		// color: purple !important;
	}
}

h3 {
	font-weight: 700;
	font-size: $fs-md;
	text-transform: uppercase;

	color: #000000;
}

span.selected {
	font-weight: 700;
	font-size: $fs-base;
	color: #2cafe5;
}

p {
	font-weight: 400;
	font-size: $fs-base;
	color: #000000;
}

@media screen and (min-width: $sm) {
}
</style>
