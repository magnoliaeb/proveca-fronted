<template>
	<nav>
		<div class="">
			<v-app-bar color="#F5F5F5" absolute flat class="nav">
				<div class="content">
					<v-row class="align-center justify-space-between">
						<v-col
							cols="auto"
							md="auto"
							class="pa-0 d-flex align-center d-lg-none"
						>
							<v-btn
								@click="openMenu"
								id="menu"
								fab
								text
								:small="$vuetify.breakpoint.smAndDown"
							>
								<img
									class="pa-1"
									height="35px"
									width="35px"
									src="../assets/imgs/iconos/menu.svg"
									alt="menu"
								/>
							</v-btn>
							<ShippingSelector class="ml-1 d-none d-sm-block" />
						</v-col>
						<v-col cols="auto" md="auto" class="pa-0">
							<nuxt-link :to="{ name: 'index' }" class="d-block logo">
								<img src="../assets/imgs/logo-proveca.svg" alt="logo-proveca" />
							</nuxt-link>
						</v-col>
						<v-col cols="12" md="auto" class="d-none d-lg-block">
							<SearchForm />
						</v-col>
						<v-col
							cols="auto"
							lg="auto"
							class="pa-0 d-flex align-center justify-end"
						>
							<ShippingSelector class="d-none d-lg-block" />
							<!-- codigo postal -->
							<PostcodeForm class="d-none d-sm-block mr-2 mr-lg-0" />

							<div class="mx-4 d-none d-lg-block" style="position: relative">
								<v-btn
									class="px-2"
									color="primary"
									id="login"
									depressed
									text
									@click="goToLogin"
									large
								>
									<div class="d-flex align-center">
										<img
											height="25px"
											width="25px"
											class="mr-sm-3"
											src="../assets/imgs/iconos/user.svg"
											alt="perfil"
										/>
										<p
											v-if="isAuthenticate"
											class="text-capitalize text-left hidden-xs-only my-0"
										>
											<span class="font-weight-black">{{
												$auth.user.name
											}}</span>
										</p>
										<p
											v-else
											class="text-capitalize text-left hidden-xs-only my-0"
										>
											<span>Iniciar sesión</span>
											<!-- <span class="">Regístrate</span> -->
										</p>
									</div>
								</v-btn>
							</div>
							<v-btn
								class="rounded-pill px-3"
								color="#2cafe5"
								id="cart"
								@click="openCart"
								depressed
							>
								<img
									class="mr-sm-3 pa-1 pa-sm-0"
									src="../assets/imgs/iconos/shopping-cart-white.svg"
									alt="shopping-cart"
								/>
								<p class="mb-0 white--text">
									{{ itemCount }}
								</p>
							</v-btn>
						</v-col>
					</v-row>

					<!-- <v-row class="hidden-md-and-up mx-0">
						<v-col cols="12" class="">
						</v-col>
					</v-row> -->
				</div>
			</v-app-bar>
			<SearchForm class="d-block d-lg-none" />
			<HeaderBottom class="d-none d-lg-block" />

			<!-- <LoginSiderbar /> -->
			<LoginDialog />
			<!-- <RegisterSidebar /> -->
			<RegisterDialog />
			<FilterSidebar />
			<ProfileSidebar />
			<CartSidebar />
			<MenuSidebar />
			<DialogProductInfo
				:key="$observer.productDialogInfo ? $observer.productDialogInfo.id : 0"
			/>

			<v-dialog
				v-model="$observer.showShippingTypeDialog"
				transition="dialog-bottom-transition"
				max-width="560px"
				content-class="dialog-address-box"
			>
				<v-card class="py-2 px-md-6 py-md-8">
					<v-btn
						absolute
						right
						top
						color="#000"
						@click="$observer.hideShippingTypeDialog"
						text
						icon
						depressed
						small
					>
						<v-icon>mdi-close</v-icon>
					</v-btn>

					<v-card-title class="d-flex justify-center">
						<h4 class="text-center mb-4">
							Seleccione una opción para continuar
						</h4>
					</v-card-title>

					<ShippingSelector></ShippingSelector>
				</v-card>
			</v-dialog>
		</div>
	</nav>
</template>

<script>
// import LoginSiderbar from './LoginSidebar.vue';
import LoginDialog from './LoginDialog.vue';
// import RegisterSidebar from './RegisterSidebar.vue';
import RegisterDialog from './RegisterDialog.vue';
import FilterSidebar from './FilterSidebar.vue';
import ProfileSidebar from './ProfileSidebar.vue';
import CartSidebar from './CartSidebar.vue';
import MenuSidebar from './MenuSidebar.vue';
import SearchForm from './SearchForm.vue';
import HeaderBottom from './HeaderBottom.vue';
import DialogProductInfo from './DialogProductInfo.vue';
import ShippingSelector from './ShippingSelector.vue';
export default {
	components: {
		// LoginSiderbar,
		LoginDialog,
		// RegisterSidebar,
		RegisterDialog,
		FilterSidebar,
		ProfileSidebar,
		MenuSidebar,
		CartSidebar,
		SearchForm,
		HeaderBottom,
		DialogProductInfo,
		ShippingSelector,
	},

	computed: {
		isAuthenticate() {
			return this.$auth.user;
		},
		itemCount() {
			return this.$store.getters['cart/getItemCount'];
		},
	},
	methods: {
		openMenu() {
			this.$observer.showMenu = true;
		},
		openProfile() {
			this.$observer.showProfile = true;
		},
		openCart() {
			this.$observer.showCart = true;
		},

		goToLogin() {
			if (this.isAuthenticate) {
				this.openProfile();
			} else {
				this.$observer.openLogin();

				// this.$router.push({ name: "login" });
			}
		},
	},
};
</script>

<style lang="scss" scoped>
* {
	//   border: 1px solid purple;
}
nav {
	z-index: 80;
	position: fixed;
	width: 100%;
}
.nav {
	//   border: 1px solid red;
	min-height: 85px;
}

.logo {
	width: 130px;
	height: 75px;
	object-fit: contain;
	img {
		height: 100%;
		width: 100%;
	}
}

p,
span {
	font-weight: 400 !important;
	font-size: $fs-xs !important;
	color: #434343 !important;
}

@media screen and (min-width: $md) {
	.logo {
		width: 180px;
		height: 80px;
	}
}
@media screen and (min-width: $lg) {
	.nav {
		min-height: 80px;
	}
}
</style>
