<template>
	<div class="">
		<v-row class="">
			<v-col cols="12">
				<v-expansion-panels flat v-model="panel" class="rounded-md">
					<v-expansion-panel>
						<v-expansion-panel-header color="#f5f5f5" hide-actions
							><h3>Información de la cuenta</h3></v-expansion-panel-header
						>
						<v-expansion-panel-content class="py-4">
							<ul>
								<li>
									<h4>Dirección de correo electrónico</h4>
									<p>{{ $auth.user.email }}</p>
								</li>
								<li class="d-flex align-center justify-space-between">
									<div class="">
										<h4>Teléfono</h4>
										<p>Tel. {{ $auth.user.phone }}</p>
									</div>
									<v-btn
										@click="dialogPhone = true"
										small
										color="#2cafe5"
										depressed
										text
										id="btn-phone"
										>Cambiar</v-btn
									>
								</li>
								<li class="d-flex align-center justify-space-between">
									<div class="">
										<h4>Nombre Completo</h4>
										<p>{{ $auth.user.name }}</p>
									</div>
									<v-btn
										@click="dialogName = true"
										small
										color="#2cafe5"
										depressed
										text
										id="btn-name"
										>Cambiar</v-btn
									>
								</li>
								<li class="d-flex align-center justify-space-between">
									<div class="">
										<h4>Fecha de nacimiento</h4>
										<p>{{ $auth.user.birthdate }}</p>
									</div>
									<v-btn
										@click="dialogBirthdate = true"
										small
										color="#2cafe5"
										depressed
										text
										id="btn-birthdate"
										>Cambiar</v-btn
									>
								</li>
								<li class="d-flex align-center justify-space-between">
									<div class="">
										<h4>Cambiar contraseña</h4>
									</div>
									<v-btn
										@click="dialogPassword = true"
										small
										color="#2cafe5"
										depressed
										text
										id="btn-password"
										>Cambiar</v-btn
									>
								</li>
							</ul>
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</v-col>
			<!-- <v-col cols="12" md="6" class="">
				<h3 class="mb-4 text-left">{{ $auth.user.name }}</h3>
				<p class="mb-4">{{ $auth.user.email }}</p>
				<p class="mb-4">Tel. {{ $auth.user.phone }}</p>
				<p class="mb-4">Fecha de nacimiento {{ $auth.user.birthdate }}</p>
			</v-col> -->
			<!-- <v-col cols="12" md="" class="pa-0">
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
			</v-col> -->
		</v-row>

		<EditPhoneProfile :dialogPhone="dialogPhone" @close="dialogPhone = false" />
		<EditNameProfile :dialogName="dialogName" @close="dialogName = false" />
		<EditBirthdateProfile
			:dialogBirthdate="dialogBirthdate"
			@close="dialogBirthdate = false"
		/>
	</div>
</template>
<script>
import EditBirthdateProfile from './EditBirthdateProfile.vue';
import EditNameProfile from './EditNameProfile.vue';
import EditPhoneProfile from './EditPhoneProfile.vue';
export default {
	components: { EditPhoneProfile, EditNameProfile, EditBirthdateProfile },
	data() {
		return {
			panel: 0,
			dialogPhone: false,
			dialogName: false,
			dialogBirthdate: false,
			dialogPassword: false,
		};
	},
};
</script>

<style lang="scss" scoped>
h3 {
	font-weight: 800;
	font-size: $fs-lg;
	color: #000000;
}
h4 {
	font-weight: 800;
	font-size: $fs-base;
	color: #000000;
}
.v-item-group.v-expansion-panels {
	border: 1px solid #f5f5f5;
}

p {
	font-weight: 400;
	font-size: $fs-base;
	color: #464646;
}

// button,
// a {
// 	max-width: 350px !important;
// 	width: 100% !important;
// 	// width: 350px;
// }

@media screen and (min-width: $sm) {
}
</style>
