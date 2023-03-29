<template>
	<v-navigation-drawer
		style="background-color: #fff; opacity: 0.9"
		v-click-outside="clickOutside"
		:value="$observer.showMenu"
		width="428px"
		right
		fixed
	>
		<div>
			<v-row class="d-flex align-center mt-10" style="position: relative">
				<v-btn
					absolute
					left
					color="#000"
					@click="closeMenu"
					text
					icon
					depressed
					small
				>
					<v-icon>mdi-close</v-icon>
				</v-btn>
				<v-col cols="12" class="text-center">
					<div class="d-flex justify-center align-center">
						<h2
							class="text-break flex-column flex-sm-row d-flex align-center justify-center"
							style="position: relative"
						>
							<div class="circle left"></div>
							<span class="d-block d-sm-inline">Menú</span>
							<div class="circle right"></div>
						</h2>
					</div>
				</v-col>
			</v-row>
			<v-row class="">
				<v-col cols="12">
					<v-divider dark style="border-color: #d9d9d9"></v-divider>
				</v-col>
			</v-row>
			<v-row class="align-center">
				<!-- <v-col cols="5" class="py-0">
					<ModalSelectAddress />
				</v-col>
				<v-col cols="1" class="py-0">
					<v-divider
						vertical
						dark
						style="border-color: #d9d9d9; height: 49px"
					></v-divider>
				</v-col> -->
				<v-col cols="5" class="py-0">
					<v-btn
						@click="openLogin"
						color="primary"
						large
						class="login"
						text
						block
						depressed
						>Iniciar sesión/ <br />
						Registrarte</v-btn
					>
				</v-col>
			</v-row>
			<v-row class="">
				<v-col cols="12">
					<v-divider dark style="border-color: #d9d9d9"></v-divider>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12">
					<v-list>
						<div v-for="(item, index) in categories" :key="index">
							<v-list-group
								v-if="item.subcategories.length > 0"
								color="primary"
								:value="false"
								no-action
							>
								<template v-slot:activator>
									<v-list-item-avatar>
										<img
											:alt="item.icon"
											:src="require(`../assets/imgs/iconos/${item.icon}.svg`)"
										/>
									</v-list-item-avatar>
									<v-list-item-content>
										<v-list-item-title>{{ item.title }}</v-list-item-title>
									</v-list-item-content>
								</template>

								<v-list-item
									@click.native="closeMenu"
									to="/"
									v-for="(subcategory, i) in item.subcategories"
									:key="i"
									link
								>
									<v-list-item-title>{{ subcategory.title }}</v-list-item-title>
								</v-list-item>
							</v-list-group>
							<v-list-item v-else @click.native="closeMenu" exact to="/">
								<v-list-item-avatar>
									<img
										:alt="item.icon"
										:src="require(`../assets/imgs/iconos/${item.icon}.svg`)"
									/>
								</v-list-item-avatar>
								<v-list-item-content>
									<v-list-item-title>{{ item.title }}</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</div>
					</v-list>
				</v-col>
			</v-row>
		</div>
	</v-navigation-drawer>
</template>

<script>
import HeadingTitle from './HeadingTitle.vue';
import ModalSelectAddress from './ModalSelectAddress.vue';

export default {
	components: {
		ModalSelectAddress,
		HeadingTitle,
	},

	data() {
		return {
			categories: [
				{
					icon: 'user',
					title: 'Todo',
					to: '/mi-perfil',
					subcategories: [
						{
							icon: 'user',
							title: 'Todo',
							to: '/mi-perfil',
						},
						{
							icon: 'user',
							title: 'Todo',
							to: '/mi-perfil',
						},
						{
							icon: 'user',
							title: 'Todo',
							to: '/mi-perfil',
						},
					],
				},
				{
					icon: 'package',
					title: 'Fruta y Verdura',
					to: '/mis-pedidos',
					subcategories: [],
				},
				{
					icon: 'user',
					title: 'Carnes',
					to: '/mi-perfil',
					subcategories: [
						{
							icon: 'user',
							title: 'Todo',
							to: '/mi-perfil',
						},
						{
							icon: 'user',
							title: 'Todo',
							to: '/mi-perfil',
						},
						{
							icon: 'user',
							title: 'Todo',
							to: '/mi-perfil',
						},
					],
				},
			],
		};
	},

	methods: {
		closeMenu() {
			this.$observer.showMenu = false;
		},

		clickOutside(event) {
			if (event.target.id !== 'menu') {
				// console.log('afuerra');
				this.closeMenu();
			}
		},
		openLogin() {
			this.$observer.showLogin = true;
			this.closeMenu();
		},
	},
};
</script>

<style lang="scss" scoped>
h2 {
	font-weight: 900;
	font-size: $fs-xl;
	line-height: 33px;
	color: #000000;
	span {
		font-weight: 900;
		color: #000;
	}
}
.circle {
	position: absolute;
	width: 10px;
	height: 10px;
	background: #2cafe5;
	border-radius: 50%;
}
.circle.left {
	left: -30%;
	// bottom: 0;
}
.circle.right {
	right: -30%;
	// bottom: 0;
}

img {
	height: 25px !important;
	width: 25px !important;
}

h3 {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 300;
	font-size: $fs-base;
	color: #000000;
}

a.login,
button.login {
	font-weight: 400 !important;
	font-size: $fs-sm !important;
	color: #434343 !important;
	text-transform: initial !important;
}
@media screen and (min-width: $sm) {
}
</style>
