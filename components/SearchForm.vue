<template>
	<div class="search-box px-3 py-3" elevation="0">
		<div class="group">
			<input
				type="text"
				v-model.trim="query"
				placeholder="Busca aquí tus productos"
			/>
			<div class="icon">
				<img src="../assets/imgs/iconos/search.svg" alt="search-icon" />
			</div>
		</div>
		<v-slide-y-transition>
			<div
				class="dialog-box elevation-2"
				v-click-outside="clickOutside"
				v-show="showDialog"
			>
				<div class="search-card">
					<v-row class="">
						<v-col
							cols="12"
							lg="5"
							class="py-2 px-3 left-menu hidden-md-and-down"
						>
							<h3 class="py-2">Categorias</h3>
							<v-divider class="mb-4"></v-divider>
							<ul>
								<li
									class="pb-1"
									v-for="(category, index) in categories"
									:key="index"
								>
									<div @click="redirecTo('productos')">
										<p class="mb-0">{{ category.name }}</p>
									</div>
								</li>
							</ul>
						</v-col>
						<v-col cols="12" lg="7" class="py-2 px-3">
							<h3 class="py-2">Productos</h3>
							<v-divider class="mb-4"></v-divider>
							<v-row
								class="align-start"
								v-for="(product, index) in products"
								:key="index"
							>
								<v-col cols="auto" class="px-0">
									<nuxt-link
										:to="{
											name: 'productos-id-slug',
											params: { id: 1, slug: 12 },
										}"
									>
										<client-only>
											<v-img
												:width="heightImg"
												transition="scale-transition"
												:height="heightImg"
												:src="`https://picsum.photos/500/300?image=${
													8 * 5 + 10
												}`"
												:lazy-src="`https://picsum.photos/10/6?image=${
													8 * 5 + 10
												}`"
												:alt="product.name"
												aspect-ratio="1"
												class="grey lighten-3 img mx-auto"
											>
												<template v-slot:placeholder>
													<v-row
														class="fill-height ma-0"
														align="center"
														justify="center"
													>
														<v-progress-circular
															:size="30"
															:width="3"
															indeterminate
															color="primary"
														></v-progress-circular>
													</v-row>
												</template>
											</v-img>
										</client-only>
									</nuxt-link>
								</v-col>
								<v-col cols="" class="flex-grow-1">
									<div
										class="text-left"
										@click="
											redirecTo('productos-id-slug', {
												id: 12,
												slug: 12,
											})
										"
									>
										<h4>{{ product.name }}</h4>
										<p class="price">
											{{ $util.getMoneyFormat(product.min_price) }}
											<s v-if="product.has_discount">{{
												$util.getMoneyFormat(product.price)
											}}</s>
										</p>
									</div>
								</v-col>
							</v-row>
						</v-col>
					</v-row>
				</div>
			</div>
		</v-slide-y-transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			query: '',
			showDialog: false,
			//   products: [],
			//   categories: [],
		};
	},

	watch: {
		async query() {
			this.showDialog = false;
			if (this.query.length >= 3) {
				// this.categories = this.allCategories.filter((category) => {
				//   return (
				//     category.name &&
				//     category.name.toLowerCase().search(this.query.toLowerCase()) != -1
				//   );
				// });

				// await this.$store.dispatch("products/_searchProducts", {
				//   search: this.query,
				// });
				// this.products = this.$store.getters["products/getFoundProducts"];
				// console.log(this.products);

				this.showDialog = true;
			}
		},
	},

	computed: {
		categories() {
			return [
				{ name: 'Alimentos' },
				{ name: 'Alimentos' },
				{ name: 'Alimentos' },
				{ name: 'Alimentos' },
			];
		},
		products() {
			return [
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
					min_price: 10,
					has_discount: false,
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
					min_price: 10,
					has_discount: true,
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
					min_price: 10,
					has_discount: true,
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
					min_price: 10,
					has_discount: false,
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
					min_price: 10,
					has_discount: false,
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
					min_price: 10,
					has_discount: false,
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
					min_price: 10,
					has_discount: false,
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
					min_price: 10,
					has_discount: false,
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
					min_price: 10,
					has_discount: false,
				},
			];
		},
		heightImg() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return 60;
				case 'sm':
					return 60;
				case 'md':
					return 60;
				case 'lg':
					return 65;
				case 'xl':
					return 75;
			}
		},
	},

	methods: {
		clickOutside(event) {
			this.showDialog = false;
			this.query = '';
			// console.log("Click externo. Evento: ", event);
		},
		redirecTo(name, params) {
			this.$router.push({ name, params });

			this.showDialog = false;
			this.query = '';
		},
	},
};
</script>

<style lang="scss" scoped>
// .img-box {
//   max-width: 70px;
// }
.group {
	position: relative;
	width: 100%;
	height: 33px;
	max-width: 100%;
	overflow: hidden;
	border-radius: 7px;
	.icon {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 10px;
		img {
			width: 20px;
			height: 20px;
		}
		&::after {
			// position: absolute;
			content: '';
			margin: 0 10px;
			// border: 1px solid black;
			background: #d9d9d9;
			width: 1px;
			height: 32px;
		}
	}
}
input {
	width: 100%;
	height: 100%;
	background-color: white;
	padding: 0 10px;
	border-radius: 3px;
	border: 0;
	padding-left: 52px;
	border: 0.829305px solid rgba(0, 0, 0, 0.11);

	&::placeholder {
		font-style: italic;
		font-weight: 300;
		font-size: $fs-base;
		line-height: 20px;
		/* identical to box height */

		color: #aeaeae;
	}
	&:focus {
		outline: none;
	}
}

.search-box {
	position: absolute !important;
	// border: 1px solid red;
	top: 85px;
	width: 100%;
	// background-color: orange;
	background-color: #fff;
	border-bottom: 1px solid #2caee4;
}

.dialog-box {
	position: absolute;
	top: 55px;
	width: auto;
	max-width: 450px;
	// left: 0;
	left: 0;
	right: 0;
	max-height: 400px;
	//   border: 2px solid red;
	overflow: auto;
	margin: 0 auto;
	//   overflow: hidden;
}

.search-card {
	background-color: white !important;
	color: #565a5e;
	height: auto;

	.left-menu {
		background-color: rgba(228, 223, 223, 0.301);
		height: auto;
		p {
			color: #373736;
			cursor: pointer;
			&:hover {
				color: $primary;
			}
		}
	}
	s {
		text-decoration: line-through;
	}
	h3 {
		color: black;
		font-size: $fs-sm;
		font-weight: 600;
	}
	h4 {
		text-transform: uppercase;
		color: #565a5e;
		font-size: $fs-sm;
		font-weight: 500;
	}
	h5 {
		color: #373736;
		font-size: $fs-xs;
		font-weight: 700;
	}
}

@media screen and (min-width: $lg) {
	.search-box {
		position: relative !important;
		top: 0;
		width: auto;
		background-color: transparent;
		border: none !important;

		// background-color: orange;
	}
	input {
		border: none !important;
	}

	.group {
		max-width: 662px;
		height: 40px;
	}
}
</style>
