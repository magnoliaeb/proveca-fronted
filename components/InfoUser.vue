<template>
	<div class="">
		<v-row class="justify-space-between">
			<v-col cols="12" md="6" class="">
				<h2 class="mb-6 text-left title-primary">Mi perfil</h2>
				<h3 class="mb-4 text-left">{{ $auth.user.name }}</h3>
				<p class="mb-4">{{ $auth.user.email }}</p>
				<p class="mb-4">Tel. {{ $auth.user.phone }}</p>
				<p class="mb-4">Fecha de nacimiento {{ $auth.user.birthdate }}</p>
			</v-col>
			<v-col cols="12" md="" class="pa-0">
				<v-row class="">
					<v-col cols="12" class="d-flex justify-center justify-md-end">
						<v-btn
							class="button-primary"
							depressed
							to="/mi-perfil/editar-perfil"
							>Editar</v-btn
						>
					</v-col>
					<v-col cols="12" class="d-flex justify-center justify-md-end">
						<v-btn
							class="button-primary"
							depressed
							to="/mi-perfil/cambiar-contrasena"
							>Cambiar contraseña</v-btn
						>
					</v-col>
					<v-col cols="12" class="d-flex justify-center justify-md-end">
						<v-btn
							depressed
							class="button-danger"
							@click="$authentication.logout"
						>
							Cerrar sesión
						</v-btn>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</div>
</template>

<style lang="scss" scoped>
h3 {
	font-weight: 700;
	font-size: $fs-xl;
	color: #000000;
}

p {
	font-weight: 400;
	font-size: $fs-md;
	color: #000000;
}

button,
a {
	max-width: 350px !important;
	width: 100% !important;
	// width: 350px;
}

@media screen and (min-width: $sm) {
}
</style>
