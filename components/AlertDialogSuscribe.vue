<template>
	<v-dialog
		v-model="showAlert"
		max-width="710px"
		persistent
		content-class="card-dialog-contact"
	>
		<v-card class="py-4" style="position: relative" height="416px">
			<v-btn @click="closeAlert" color="#000000" text icon absolute top right>
				<v-icon>mdi-close</v-icon>
			</v-btn>
			<v-card-text class="d-flex fill-height">
				<v-row class="justify-center no-gutters">
					<v-col cols="12" class="d-flex justify-center align-center">
						<!-- <img
							:src="require(`../assets/imgs/iconos/email.svg`)"
							alt="email"
						/> -->
					</v-col>

					<v-col cols="12">
						<h2 class="mb-4 text-center">
							Gracias por suscribirte a nuestronewsletter
						</h2>

						<p>
							Pronto recibirás en tu correo todas nuestras promociones y
							descuentos para que siempre estes al día
						</p>
					</v-col>
					<v-col cols="12" md="auto" class="d-flex justify-center">
						<v-btn to="/productos" class="button-primary" depressed
							>Buscar dirección en el mapa</v-btn
						>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	data() {
		return {
			showAlert: true,
		};
	},
	methods: {
		closeAlert() {
			this.showAlert = false;
		},
	},
};
</script>

<style lang="scss" scoped>
h2 {
	font-style: normal;
	font-weight: 800;
	font-size: 18px;
	line-height: 230%;
	/* identical to box height, or 62px */

	text-transform: initial;

	color: #000;
}
p {
	font-weight: 400;
	font-size: 16px;
	line-height: 138%;
	/* identical to box height, or 29px */

	text-align: center;
}
a {
	width: 100% !important;
}

img {
	height: 30px;
	width: 30px;
}

@media screen and (min-width: $sm) {
	img {
		height: 60px;
		width: 60px;
	}
	h2 {
		font-size: $fs-xl;
	}
	p {
		font-size: 20px;
	}
	a {
		font-size: 16px !important;
		width: 459px !important;
	}
}
</style>
