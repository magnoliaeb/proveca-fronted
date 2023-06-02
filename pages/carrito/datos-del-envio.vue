<template>
	<div class="content py-16">
		<HeadingTop />
		<v-row class="align-start justify-space-between">
			<v-col cols="12" sm="12" md="7" lg="8">
				<v-row class="align-center">
					<v-col cols="12" md="auto">
						<h3 class="text-center text-md-left">¿Ya tienes una cuenta?</h3>
					</v-col>
					<v-col cols="12" md="auto">
						<v-btn
							:to="{ name: 'login' }"
							class="button-primary"
							block
							depressed
							height="46px"
						>
							Iniciar sesión
						</v-btn>
					</v-col>
				</v-row>

				<v-row class="align-center">
					<v-col cols="12" md="auto">
						<h3 class="text-center text-md-left">¿Deseas registrarte?</h3>
					</v-col>
					<v-col cols="12" md="auto">
						<v-btn
							:to="{ name: 'registro' }"
							class="button-primary"
							block
							depressed
							height="46px"
						>
							Registrarme
						</v-btn>
					</v-col>
				</v-row>

				<v-row>
					<v-col cols="12">
						<v-divider></v-divider>
					</v-col>
				</v-row>
				<!-- <InfoSendForm /> -->
				<!-- <ShippingMethods /> -->
			</v-col>
			<v-col cols="12" sm="12" md="5" lg="4" style="position: sticky; top: 10%">
				<!-- resumen del carrito -->
				<CartResumen />
			</v-col>
		</v-row>
	</div>
</template>

<script>
import HeadingTop from '../../components/HeadingTop.vue';
import InfoSendForm from '../../components/InfoSendForm.vue';
import CartResumen from '../../components/CartResumen.vue';
export default {
	middleware: [
		'guest'
	],

	components: { InfoSendForm, CartResumen, HeadingTop },

	head: {
		title: 'Datos del envio',
	},
};
</script>

<style lang="scss" scoped>
h3 {
	font-weight: 700;
	font-size: $fs-md;
	color: #000000;
}
a {
	width: 306px !important;
}
@media screen and (min-width: $sm) {
}
</style>
