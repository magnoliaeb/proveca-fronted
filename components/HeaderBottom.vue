<template>
	<div class="nav-bottom">
		<div class="content">
			<ul
				color="primary"
				class="d-flex align-items-center"
			>
				<!-- <v-tabs-slider color="primary"></v-tabs-slider> -->

				<li
					class="flex-grow-1 d-flex justify-center align-center"
				>
					<nuxt-link
						:to="{ name: 'productos'}"
					>
						<img
							class="mr-2"
							alt="user"
							:src="require(`../assets/imgs/iconos/user.svg`)"
						/>
						<span>
							Todas
						</span>
					</nuxt-link>
				</li>

				<li
					v-for="(item, index) in categories"
					:key="index"
					class="flex-grow-1 d-flex justify-center align-center"
				>
					<nuxt-link
						:to="{ name: 'productos', query: { category_id: item.id } }"
					>
						<img
							class="mr-2"
							alt="user"
							:src="require(`../assets/imgs/iconos/user.svg`)"
						/>
						<span>
							{{ item.name }}
						</span>
					</nuxt-link>
					<!-- <v-menu bottom left>
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								text
								class="align-self-center mr-4"
								v-bind="attrs"
								v-on="on"
							>
								{{ item.title }}
							</v-btn>
						</template>

						<v-list class="grey lighten-3">
							<v-list-item v-for="item in 5" :key="item" @click="addItem(item)">
								{{ item }}
							</v-list-item>
						</v-list>
					</v-menu> -->
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		categories() {
			return this.$store.getters['products/getCategories'];
		},
	},
	methods: {
		clickExterno(event) {
			this.drawerCategories = false;
		},
		goTo(category) {
			this.$router.push({
				name: 'productos-categoria-id-slug',
				params: { id: category.id, slug: category.slug },
			});
			this.drawerCategories = false;
		},
	},
};
</script>

<style lang="scss" scoped>
.nav-bottom {
	position: absolute;
	width: 100%;
	height: 46px;
	// z-index: 10;
	top: 80px;
	// background-color: $secondary !important;
	// border: 2px solid red;
	background-color: #ffffff;
	box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
	overflow: hidden !important;
	border-bottom: 1px solid $primary;
}

span {
	font-family: 'Inter';
	font-weight: 300;
	font-size: $fs-xs;
	line-height: 17px;
	color: #000000;
	text-transform: initial !important;
}

@media screen and (min-width: $lg) {
}
</style>
