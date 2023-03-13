<template>
	<v-row>
		<v-col cols="12" v-for="(item, index) in [1, 2, 3, 4]" :key="index">
			<!-- tarjeta -->
			<article>
				<v-row class="justify-space-between align-center">
					<v-col cols="12" sm="9">
						<h3>**0055</h3>
						<h4>CARLOS HERNÁNDEZ DÍAZ</h4>
					</v-col>
					<v-col cols="12" sm="3" class="d-flex justify-end">
						<v-btn
							@click="selectedCardt({})"
							class="btn-change d-sm-flex"
							depressed
							text
							><span>Cambiar</span></v-btn
						>
					</v-col>
				</v-row>
			</article>
		</v-col>
	</v-row>
</template>

<script>
export default {
	data() {
		return {
			radios: 'tarjeta',
		};
	},
	methods: {
		selectedCardt(card) {
			this.$emit('selectedCard', card);
		},
	},
};
</script>

<style lang="scss" scoped>
article {
	border: 1px solid #979797;
	border-radius: 10px;
	max-width: 450px;
	h3 {
		font-style: normal;
		font-weight: normal;
		font-size: $fs-md;
		color: #000000;
	}
	h4 {
		font-weight: 300;
		font-size: $fs-sm;
		color: #1a1a1a;
	}
}

.img-card {
	height: 30px;
}
.btn-change {
	font-weight: normal !important;
	font-size: $fs-sm !important;
	text-decoration-line: underline !important;
	color: #3e3e3e !important;
	text-transform: initial !important;
}
@media screen and (min-width: $sm) {
}
</style>
