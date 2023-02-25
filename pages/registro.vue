<template>
	<div class="regiter py-16">
		<div class="content">
			<v-row class="mb-6">
				<v-col cols="12" class="text-center">
					<h1 class="mb-6 title-primary">Regístrate</h1>
					<p>
						Regístrate para que tengas grandes beneficios así como tener
						registro de tus pedidos, direcciones y métodos de pago
					</p>
				</v-col>
			</v-row>
			<RegisterForm />
		</div>
	</div>
</template>

<script>
import RegisterForm from '../components/RegisterForm.vue';
export default {
	head: {
		title: 'Registro',
	},
	components: { RegisterForm },
};
</script>

<style lang="scss" scoped>
* {
	// border: 1px solid red;
}

// @media screen and (min-width: $xl) {
.regiter {
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

p {
	font-weight: 300;
	font-size: 18px;
	line-height: 23px;
	color: #000000;
}
// }
</style>
