<template>
	<v-navigation-drawer
		style="background-color: #f2f2f2"
		v-click-outside="clickOutside"
		:value="$observer.showProfile"
		width="373px"
		right
		fixed
	>
		<div>
			<v-row class="d-flex align-center mt-10" style="position: relative">
				<v-btn
					absolute
					left
					color="#000"
					@click="closeProfile"
					text
					icon
					depressed
					small
				>
					<v-icon>mdi-close</v-icon>
				</v-btn>
				<v-col cols="12" class="text-center">
					<h2>Menú</h2>
				</v-col>
			</v-row>
			<v-row class="mb-2">
				<v-col cols="12">
					<v-divider dark style="border-color: #2cafe5"></v-divider>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12">
					<v-list>
						<v-list-item
							@click.native="closeProfile"
							class="mb-3"
							color="primary"
							:to="item.to"
							v-for="(item, index) in items"
							:key="index"
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
		</div>
		<template v-slot:append>
			<v-row>
				<v-col cols="12">
					<v-btn class="btn-logout" @click="logout" text depressed block
						>Cerrar sesión</v-btn
					>
				</v-col>
			</v-row>
		</template>
	</v-navigation-drawer>
</template>

<script>
export default {
	data() {
		return {
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
			this.$observer.showProfile = false
		},
		logout() {
			this.closeProfile();
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
	font-size: 25px;
	line-height: 33px;
	color: #000000;
}

img {
	height: 25px !important;
	width: 25px !important;
}

h3 {
	font-weight: 400;
	font-size: 16px;
	line-height: 21px;

	color: #000000;
}

button.btn-logout {
	font-weight: 800 !important;
	font-size: 16px !important;
	line-height: 21px !important;
	/* identical to box height */

	color: #2cafe5 !important;
	border: 1px solid #000000 !important;
	border-radius: 11px !important;
	height: 55px !important;
	text-transform: initial !important;
}

@media screen and (min-width: $sm) {
}
</style>
