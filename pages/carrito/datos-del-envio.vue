<template>
	<div class="content">
	  <HeadingTop />
	  <v-row class="align-start justify-space-between pt-8 pb-16">
		<v-col cols="12" sm="12" md="7" lg="8">
		  <v-row class="align-center">
			<v-col cols="12" md="auto">
			  <h3 class="text-center text-md-left">¿Ya tienes una cuenta?</h3>
			</v-col>
			<v-col cols="12" md="auto">
			  <v-btn
				:to="{ name: 'login' }"
				class="primary"
				block
				depressed
				height="46px"
				>Iniciar sesión</v-btn
			  >
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
  import HeadingTop from "../../components/HeadingTop.vue";
  import InfoSendForm from "../../components/InfoSendForm.vue";
  import CartResumen from "../../components/CartResumen.vue";
  export default {
	components: { InfoSendForm, CartResumen, HeadingTop },
  
	auth: false,
  
	head: {
	  title: "Datos del envio",
	},
  };
  </script>
  
  <style lang="scss" scoped>
  h3 {
	font-family: "Josefin Sans";
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 122.5%;
	letter-spacing: -0.02em;
	color: #eb539e;
  }
  a {
	width: 306px !important;
	border-radius: 4px !important;
	font-family: "Jost" !important;
	font-weight: 400 !important;
	font-size: 12px !important;
	line-height: 17px !important;
	letter-spacing: -0.02em !important;
  }
  @media screen and (min-width: $sm) {
	h3 {
	  font-size: 18px;
	}
  }
  </style>