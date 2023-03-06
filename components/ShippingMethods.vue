<template>
	<div>
		<v-row class="mt-4">
			<v-col cols="12" class="">
				<h3>Métodos de Envío</h3>
			</v-col>
		</v-row>

		<v-row class="justify-center justify-sm-start">
			<v-col
				cols="auto"
				class="mb-3"
				v-for="(method, index) in [1, 2]"
				:key="index"
			>
				<!-- :class="{ selected: true }" -->
				<CardPayment :method="method" />
			</v-col>
		</v-row>
		<v-row class="mt-4">
			<v-col cols="12" sm="12" md="12">
				<v-btn
					class="button-primary"
					:loading="isLoading"
					type="submit"
					tag="button"
					v-if="true || true"
					depressed
					:disabled="false && isDisabled && invalid"
				>
					Continuar
				</v-btn>
				<v-btn
					class="button-primary"
					v-else
					x-large
					block
					max-width="100%"
					depressed
					:to="{ name: 'iniciar-sesion' }"
					dark
				>
					<span class="d-flex flex-wrap white--text text-center"
						>Para continuar favor de <br class="hidden-sm-and-up pb-2" />
						iniciar sesión</span
					>
				</v-btn>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import CardPayment from './CardPayment.vue';

export default {
	components: { CardPayment },
	data() {
		return {
			isLoading: false,
		};
	},
};
</script>

<style lang="scss" scoped>
h3 {
	font-style: normal;
	font-weight: 700;
	font-size: $fs-lg;
	color: #000000;
	text-transform: initial;
}

button {
	width: 100%;
	max-width: 374px !important;
	// height: 73px !important;
}
</style>
