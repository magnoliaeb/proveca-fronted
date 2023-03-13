<template>
	<v-app dark>
		<v-row class="justify-center align-center">
			<v-col
				cols="8"
				sm="7"
				md="4"
				lg="3"
				class="d-flex justify-center flex-column"
			>
				<v-card class="" tile flat>
					<!-- <img src="../assets/img/Icono-404.svg" alt="error-404" /> -->
					<h1 class="my-4 text-center" v-if="error.statusCode === 404">
						Página no encontrada
					</h1>
					<h1 v-else>
						{{ otherError }}
					</h1>
				</v-card>
				<v-btn to="/" block depressed> Regresar </v-btn>
			</v-col>
		</v-row>
	</v-app>
</template>

<script>
export default {
	layout: 'empty',
	props: {
		error: {
			type: Object,
			default: null,
		},
	},
	data() {
		return {
			pageNotFound: '404 página no encontrada',
			otherError: 'An error occurred',
		};
	},
	head() {
		const title =
			this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
		return {
			title,
		};
	},
};
</script>

<style lang="scss" scoped>
h1 {
	font-size: $fs-base;
	color: #373736;
	font-weight: bold;
	font-family: 'Gotham';
}

img {
	display: block;
	margin: 0 auto;
	height: 100px;
	width: 100px;
}

.empty {
	height: 20vh;
}

a {
	height: 43px !important;
	font-size: $fs-sm;
	font-weight: bold;
	width: 100%;
	background-color: $primary !important;
	color: white !important;
}
</style>
