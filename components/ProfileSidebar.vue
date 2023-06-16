<template>
	<v-dialog
		v-model="$observer.showProfile"
		content-class="card-dialog"
		max-width="360"
	>
		<v-card class="">
			<v-btn
				class="btn-close"
				absolute
				left
				color="#000"
				@click="closeProfile"
				text
				icon
				small
				depressed
			>
				<v-icon>mdi-close</v-icon>
			</v-btn>
			<v-row class="d-flex align-center">
				<v-col cols="12" class="">
					<h2 class="text-center mb-3">Menú</h2>
					<v-divider dark style="border-color: #2cafe5"></v-divider>
				</v-col>
			</v-row>
			<v-row class="py-2 py-md-4">
				<v-col cols="12">
					<v-list>
						<v-list-item
							v-for="(item, index) in items"
							:key="index"
							@click.native="closeProfile"
							class="mb-3"
							color="primary"
							:to="item.to"
						>
							<v-list-item-avatar>
								<!-- <v-avatar size="40" color="primary" tile alt="John"></v-avatar> -->
								<img
									:alt="item.icon"
									:src="require(`../assets/imgs/iconos/${item.icon}.svg`)"
								/>
							</v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title
									tag="h3"
									v-text="item.title"
								></v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<v-btn
						class="btn-logout"
						text
						depressed
						block
						@click="$authentication.logout"
					>
						Cerrar sesión
					</v-btn>
				</v-col>
			</v-row>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	data() {
		return {
			dialog: true,
			items: [
				{
					icon: 'user',
					title: 'Mis datos',
					to: '/mi-perfil',
				},
				{
					icon: 'package',
					title: 'Historial de pedidos',
					to: '/mis-pedidos',
				},
			],
		};
	},

	methods: {
		closeProfile() {
			this.$observer.showProfile = false;
		},

		clickOutside(event) {
			if (event.target.id !== 'login') {
				this.closeProfile();
			}
		},
	},
};
</script>

<style lang="scss" scoped>
h2 {
	font-weight: 900;
	font-size: $fs-xl;
	color: #000000;
}

img {
	height: 25px !important;
	width: 25px !important;
}

h3 {
	font-weight: 400;
	font-size: $fs-base;
	color: #000000;
}
.btn-close {
	left: 20px !important;
	top: 10px !important;
}

button.btn-logout {
	font-weight: 800 !important;
	font-size: $fs-sm !important;
	color: #2cafe5 !important;
	border: 1px solid #000000 !important;
	border-radius: 11px !important;
	height: 55px !important;
	text-transform: initial !important;
}

@media screen and (min-width: $sm) {
}
</style>
