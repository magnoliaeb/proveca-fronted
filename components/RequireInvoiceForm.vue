<style lang="scss" scoped>
h3 {
	font-weight: 700;
	font-size: $fs-base;
	text-transform: uppercase;
	// color: $primary;
}
</style>

<template>
	<v-form @submit.prevent="submit" id="require-invoice-form">
		<v-row>
			<v-col cols="12" class="px-0">
				<h3>¿Requiere factura?</h3>
			</v-col>

			<v-col cols="12" class="py-0 px-0">
				<v-radio-group v-model="requireInvoice" dense row @change="submit">
					<v-radio :value="true">
						<template #label>
							<span class="text">Si</span>
						</template>
					</v-radio>

					<v-radio :value="false">
						<template #label>
							<span class="text">No</span>
						</template>
					</v-radio>
				</v-radio-group>
			</v-col>
		</v-row>
	</v-form>
</template>

<script>
export default {
	data() {
		return {
			requireInvoice: null,
		};
	},

	methods: {
		submit() {
			this.$store.dispatch('cart/setRequireInvoice', this.requireInvoice);
		},
	},

	created() {
		this.requireInvoice = this.$store.state.cart.requireInvoice;
	},
};
</script>
