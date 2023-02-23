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
h3 {
	font-weight: 600;
	font-size: 12px;
	line-height: 29px;
	/* identical to box height, or 181% */

	color: #1a1a1a;
}

article {
	border: 1px solid #979797;
	border-radius: 10px;
	max-width: 450px;
	h3 {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: normal;
		font-size: 15px;
		line-height: 20px;
		color: #000000;
	}
	h4 {
		font-weight: 300;
		font-size: 12px;
		line-height: 30px;
		color: #1a1a1a;
	}
}

.img-card {
	height: 30px;
}
.btn-change {
	font-weight: normal !important;
	font-size: 14px !important;
	text-decoration-line: underline !important;
	color: #3e3e3e !important;
	text-transform: initial !important;
}
@media screen and (min-width: $sm) {
	h3 {
		font-size: 16px;
	}
	article {
		h3 {
			font-size: 17.3752px;
		}
		h4 {
			font-size: 14px;
		}
	}
}
</style>
