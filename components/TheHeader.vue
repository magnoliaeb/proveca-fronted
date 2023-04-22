<template>
	<nav>
		<div class="">
			<v-app-bar color="#F5F5F5" absolute flat class="nav">
				<div class="content">
					<v-row class="align-center justify-space-between">
						<v-col cols="auto" md="auto" class="pa-0 d-lg-none">
							<v-btn
								@click="openMenu"
								id="menu"
								fab
								text
								:small="$vuetify.breakpoint.xsOnly"
							>
								<img
									class="pa-1"
									height="35px"
									width="35px"
									src="../assets/imgs/iconos/menu.svg"
									alt="menu"
								/>
							</v-btn>
						</v-col>
						<v-col cols="auto" md="auto" class="pa-0">
							<nuxt-link :to="{ name: 'index' }" class="d-block logo">
								<img src="../assets/imgs/logo-proveca.svg" alt="logo-proveca" />
							</nuxt-link>
						</v-col>
						<v-col cols="12" md="4" lg="4" xl="5" class="d-none d-lg-block">
							<SearchForm />
						</v-col>
						<v-col
							cols="auto"
							lg="auto"
							class="pa-0 d-flex align-center justify-end"
						>
							<!-- codigo postal -->
							<ModalSelectAddress class="d-none d-lg-block" />

							<div class="mx-4 d-none d-lg-block" style="position: relative">
								<v-btn
									color="primary"
									id="login"
									depressed
									text
									@click="goToLogin"
									large
								>
									<div class="d-flex align-center">
										<img
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
											<span>Iniciar sesión/</span> <br />
											<span class="">Regístrate</span>
										</p>
									</div>
								</v-btn>
							</div>
							<v-btn
								color="primary"
								id="cart"
								@click="openCart"
								depressed
								text
								:large="!$vuetify.breakpoint.xsOnly"
								:small="$vuetify.breakpoint.xsOnly"
								:fab="$vuetify.breakpoint.xsOnly"
								class=""
							>
								<img
									height="35px"
									width="35px"
									class="mr-sm-3 pa-1 psm-0"
									src="../assets/imgs/iconos/shopping-cart.svg"
									alt="shopping-cart"
								/>
								<p v-if="!$vuetify.breakpoint.xsOnly" class="mb-0">
									({{ itemCount }})
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

			<LoginSiderbar />
			<RegisterSidebar />
			<FilterSidebar />
			<ProfileSidebar />
			<CartSidebar />
			<MenuSidebar />
			<DialogProductInfo />
		</div>
	</nav>
</template>

<script>
import LoginSiderbar from './LoginSidebar.vue';
import RegisterSidebar from './RegisterSidebar.vue';
import FilterSidebar from './FilterSidebar.vue';
import ProfileSidebar from './ProfileSidebar.vue';
import CartSidebar from './CartSidebar.vue';
import MenuSidebar from './MenuSidebar.vue';
import SearchForm from './SearchForm.vue';
import HeaderBottom from './HeaderBottom.vue';
import DialogProductInfo from './DialogProductInfo.vue';
export default {
	components: {
		LoginSiderbar,
		RegisterSidebar,
		FilterSidebar,
		ProfileSidebar,
		MenuSidebar,
		CartSidebar,
		SearchForm,
		HeaderBottom,
		DialogProductInfo,
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
				this.$observer.showLogin = true;

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
