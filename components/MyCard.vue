<template>
	<!-- tarjeta -->
	<article>
		<v-row class="justify-space-between align-center">
			<v-col cols="2" sm="2">
				<img
					class="img-visa"
					:src="require(`../assets/imgs/iconos/visa-blue.svg`)"
					alt="Visa"
				/>
			</v-col>
			<v-col cols="6" sm="3" class="hidden-sm-and-up">
				<div class="d-flex justify-end">
					<v-btn @click.native="changeCard" class="btn-change" depressed text
						><span>Cambiar</span></v-btn
					>
				</div>
			</v-col>
			<v-col cols="12" sm="7">
				<h3>**0055</h3>
				<h4>CARLOS HERNÁNDEZ DÍAZ</h4>
			</v-col>
			<v-col cols="3" sm="3" class="d-flex justify-end">
				<v-btn
					@click.native="changeCard"
					class="btn-change hidden-sm-and-down d-sm-flex"
					depressed
					text
					><span>Cambiar</span></v-btn
				>
			</v-col>
		</v-row>
	</article>
</template>

<script>
export default {
	props: {
		card: {
			type: Object,
		},
	},
	methods: {
		changeCard() {
			this.$emit('change');
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
		line-height: 30px;
		color: #1a1a1a;
	}
}

.img-visa {
	width: 50px;
	height: 50px;
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
