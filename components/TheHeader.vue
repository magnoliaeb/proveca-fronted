<template>
	<nav>
		<div class="">
			<v-app-bar color="#F5F5F5" absolute flat class="nav">
				<div class="content">
					<v-row class="align-center justify-space-between">
						<v-col cols="2" md="auto" class="pa-0">
							<nuxt-link :to="{ name: 'index' }" class="d-block">
								<img class="logo" src="../assets/imgs/logo.svg" alt="" />
							</nuxt-link>
						</v-col>
						<v-col cols="12" md="4" lg="4" xl="5" class="">
							<SearchForm />
						</v-col>
						<v-col cols="6" md="6" lg="auto" class="pa-0 d-flex align-center">
							<!-- codigo postal -->
							<ModalSelectAddress />

							<div class="mx-4" style="position: relative">
								<v-btn color="primary" depressed text @click="goToLogin" large>
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
											<span class="font-weight-black">{{ user.name }}</span>
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
								<v-expand-transition>
									<LoginPopover
										v-if="showPopover"
										@closePopover="showPopover = false"
									/>
								</v-expand-transition>
							</div>
							<v-btn color="primary" depressed text large class="">
								<img
									class="mr-3"
									src="../assets/imgs/iconos/shopping-cart.svg"
									alt="shopping-cart"
								/>
								<p class="mb-0">($143.00)</p>
							</v-btn>
						</v-col>
					</v-row>

					<v-row class="hidden-md-and-up mx-0">
						<v-col cols="12" class="">
							<!-- <SearchForm /> -->
						</v-col>
					</v-row>
				</div>
			</v-app-bar>

			<!-- siderbar login -->
			<!-- <LoginSiderbar /> -->
			<!-- sider cart -->

			<!-- menu rigth filtros -->
			<!-- <v-navigation-drawer
        v-model="drawerFilter"
        right
        class="menu-filter"
        fixed
      >
        <v-row class="justify-center pt-10">
          <v-col cols="11" class="pt-0">
            <FilterProducts />
          </v-col>
        </v-row>
      </v-navigation-drawer> -->
		</div>
		<!-- <HeaderBottom /> -->
	</nav>
</template>

<script>
import LoginSiderbar from './LoginSiderbar.vue';
// import LoginSiderbar from "./LoginSiderbar.vue";
import SearchForm from './SearchForm.vue';
export default {
	components: { LoginSiderbar, SearchForm },
	data() {
		return {
			drawer: false,
			showPopover: false,
		};
	},
	//   components: { SearchForm },

	computed: {
		isAuthenticate() {
			// return this.$store.getters["user/gethIsAutenticate"];
			//   return this.$auth.loggedIn || false;
			return false;
		},
		user() {
			//   return this.$auth.user || false;
			return false;
		},

		drawerFilter: {
			get() {
				return this.$store.getters['website/getDrawerFilter'];
			},
			set(value) {
				this.$store.dispatch('website/drawerFilter', value);
			},
		},
	},
	methods: {
		openPopover() {
			this.showPopover = !this.showPopover;
		},
		// closeLoginSider() {
		//   this.drawerLogin = false;
		// },
		goToLogin() {
			if (this.isAuthenticate) {
				this.openPopover();
			} else {
				this.$store.dispatch('website/showLogin', false);

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
	min-height: 80px;
}

.logo {
	width: 119px;
	object-fit: cover;
	height: 65px;
	object-fit: contain;
}

p,
span {
	font-weight: 400 !important;
	font-size: 12px !important;
	line-height: 96.3% !important;
	//   border: 1px solid red !important;
	/* or 12px */

	color: #434343 !important;
}

// menu filter
.menu-filter {
	width: 90% !important;
	max-width: 425px;
}
@media screen and (min-width: $md) {
	.menu-filter {
		width: 60% !important;
	}
}
@media screen and (min-width: $lg) {
	.nav {
		min-height: 92px;
	}
	.logo {
		width: 117px;
		max-width: 117px;
		height: 80px;
	}
}
</style>
