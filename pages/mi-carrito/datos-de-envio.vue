<template>
	<section class="py-16">
		<div class="content">
			<HeadingTop :showBtnGoBack="true" />
			<v-row class="align-start justify-space-between no-gutters">
				<v-col cols="12" md="12" lg="7">
					<v-row class="align-center mb-4">
						<v-col cols="12" sm="6" md="5" class="">
							<h3 class="text-center">¿Ya tienes una cuenta?</h3>
						</v-col>
						<v-col cols="12" sm="6" md="6" class="d-flex justify-start">
							<v-btn to="/login" class="button-primary" depressed>
								INICIA SESIÓN
							</v-btn>
						</v-col>
					</v-row>
					<InfoSendForm />
				</v-col>
				<v-col cols="12" md="12" lg="" style="position: sticky; top: 30%">
					<!-- resumen del carrito -->
					<CartResumen />
				</v-col>
			</v-row>
		</div>
	</section>
</template>

<script>
import BtnGoBack from '../../components/BtnGoBack.vue';
import InfoSendForm from '../../components/InfoSendForm.vue';
import CartResumen from '../../components/CartResumen.vue';
import HeadingTop from '../../components/HeadingTop.vue';
export default {
	head: {
		title: 'Información del envio',
	},
	components: { InfoSendForm, CartResumen, BtnGoBack, HeadingTop },
};
</script>

<style lang="scss" scoped>
h3 {
	font-weight: 700;
	font-size: $fs-lg;
	line-height: 30px;
	color: #000000;
}

a {
	width: 100%;
}

@media screen and (min-width: $sm) {
	a {
		max-width: 259px;
	}
}
@media screen and (min-width: $md) {
}
</style>
