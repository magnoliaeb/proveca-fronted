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
				<v-col cols="12" class="py-0 d-flex justify-space-between align-center">
					<v-btn
						@click="openLogin"
						color="primary"
						large
						class="login"
						text
						depressed
					>
						Iniciar sesión
					</v-btn>
					<ShippingSelector class="d-block d-lg-none" />
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
						<div v-for="(item, index) in categories" :key="index.id">
							<v-list-item
								@click.native="closeMenu"
								exact
								:to="{ name: 'productos', query: { category_id: item.id } }"
							>
								<v-list-item-avatar>
									<img :alt="item.name" :src="item.picture" />
								</v-list-item-avatar>
								<v-list-item-content>
									<v-list-item-title>{{ item.name }}</v-list-item-title>
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
import ShippingSelector from './ShippingSelector.vue';

export default {
	components: {
		HeadingTitle,
		ShippingSelector,
	},

	computed: {
		categories() {
			return this.$store.getters['products/getCategoriesMenu']
		},
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
