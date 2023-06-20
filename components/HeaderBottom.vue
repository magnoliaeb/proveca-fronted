<template>
	<div class="nav-bottom">
		<div class="content">
			<v-tabs v-model="tab" align-with-title color="primary" centered grow>
				<v-tab :to="{ name: 'productos' }" class="d-flex align-center">
					<img
						class="mr-2"
						alt="..."
						:src="require(`../assets/imgs/iconos/todo.svg`)"
						width="25px"
						height="25px"
					/>
					<span> Todas </span>
				</v-tab>

				<v-tab
					v-for="(item, index) in categories"
					:key="index"
					:to="{ name: 'productos', query: { category_id: item.id } }"
					class="d-flex align-center"
				>
					<img
						class="mr-2"
						:alt="item.name"
						:src="item.picture"
						width="25px"
						height="25px"
					/>
					<span>
						{{ item.name }}
					</span>
				</v-tab>
			</v-tabs>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tab: null,
		};
	},
	computed: {
		categories() {
			return this.$store.getters['products/getCategoriesMenu'];
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
	font-weight: 600;
	font-size: $fs-sm;
	line-height: 17px;
	color: #000000;
	text-transform: initial !important;
}

@media screen and (min-width: $lg) {
}
</style>
