<template>
	<div class="search-box px-1 px-sm-3 py-2 pb-1" elevation="0">
		<div class="group">
			<v-form @submit.prevent="submit" class="fill-height">
				<input
					type="text"
					v-model.trim="query"
					placeholder="Busca aquí tus productos"
				/>
			</v-form>

			<div class="icon">
				<img src="../assets/imgs/iconos/search.svg" alt="search-icon" />
			</div>
		</div>
		<v-slide-y-transition>
			<div
				class="dialog-box elevation-0"
				v-click-outside="clickOutside"
				v-show="showDialog"
			>
				<div class="search-card">
					<v-row class="">
						<v-col cols="12" lg="12" class="py-2 px-3">
							<h3 class="py-2">Productos recomendados</h3>
							<v-row>
								<v-col
									class="px-0 pb-0"
									cols="12"
									sm="6"
									lg="12"
									v-for="(product, index) in products"
									:key="index"
								>
									<v-row class="align-center card-product rounded-lg">
										<v-col cols="auto" class="py-2">
											<nuxt-link
												:to="{
													name: 'productos-id-slug',
													params: { id: product.id, slug: product.slug },
												}"
											>
												<client-only>
													<v-img
														:width="heightImg"
														transition="scale-transition"
														:height="heightImg"
														:src="product.picture.url"
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
										<v-col cols="auto" class="py-2">
											<div
												class="text-left"
												@click="
													redirecTo('productos-id-slug', {
														id: product.id,
														slug: product.slug,
													})
												"
											>
												<h4>{{ product.name }}</h4>
												<!-- <p>
													{{ $util.getMoneyFormat(product.min_price) }}
													<s v-if="product.has_discount">{{
														$util.getMoneyFormat(product.price)
													}}</s>
												</p> -->
											</div>
										</v-col>
									</v-row>
								</v-col>
							</v-row>
						</v-col>
					</v-row>
				</div>
			</div>
		</v-slide-y-transition>
		<div
			class="d-flex justify-space-between align-center pt-1 d-block d-sm-none"
		>
			<ShippingSelector class="" />
			<!-- codigo postal -->
			<PostcodeForm class="" />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			query: '',
			showDialog: false,
			isBusy: false,
			queued: false,
			products: [],
		};
	},

	watch: {
		query() {
			this.search();
		},
	},

	computed: {
		heightImg() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return 30;
				case 'sm':
					return 60;
				case 'md':
					return 60;
				case 'lg':
					return 60;
				case 'xl':
					return 60;
			}
		},
	},

	methods: {
		search() {
			if (!this.isBusy) {
				if (this.query.length >= 2) {
					this.isBusy = true;
					this.showDialog = false;

					this.$store
						.dispatch('products/_searchProducts', {
							search: this.query,
						})
						.then((products) => (this.products = products))
						.finally(() => {
							this.isBusy = false;

							if (this.queued) {
								this.queued = false;
								this.search();
							}
						});

					this.showDialog = true;
				}
			} else {
				this.queued = true;
			}
		},

		submit() {
			this.$router.push({
				name: 'productos',
				query: {
					search: this.query,
				},
			});

			this.clickOutside();
		},

		clickOutside(event) {
			this.showDialog = false;
			this.query = '';
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
		right: 0;
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
	}
}
input {
	width: 100%;
	height: 100%;
	background-color: white;
	padding: 0 10px;
	// border-radius: 3px;
	border: 0;
	// padding-left: 2px;
	border: 0.829305px solid rgba(0, 0, 0, 0.11);

	&::placeholder {
		font-style: italic;
		font-weight: 300;
		font-size: $fs-base;
		color: #aeaeae;
	}
	&:focus {
		outline: none;
	}
}

.search-box {
	position: absolute !important;
	background-color: white;

	top: 85px;
	width: 100%;
	// background-color: white;
	border-bottom: 1px solid #2caee4;
}

.dialog-box {
	position: absolute;
	top: 45px;
	width: 100%;
	max-width: 600px;
	// left: 0;
	left: 0;
	right: 0;
	max-height: 400px;
	overflow: auto;
	margin: 0 auto;
	z-index: 20;

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
		font-size: $fs-md;
		font-weight: 700;
	}
	h4 {
		text-transform: initial;
		color: #565a5e;
		font-size: $fs-sm;
		font-weight: 500;
	}
	h5 {
		color: #373736;
		font-size: $fs-xs;
		font-weight: 700;
	}
	.card-product {
		background-color: #fafafa;
		transition: 0.5s ease-out all;
		&:hover {
			background-color: rgba(44, 175, 229, 0.7);
			h4 {
				color: white;
			}
		}
	}
}

@media screen and (min-width: $lg) {
	.group {
		width: 340px;
		// max-width: 662px;
		height: 40px;
	}
	input {
		border: none !important;
	}
	.search-box {
		position: relative !important;
		// width: 600px;
		border: 1px solid red !important;
		width: auto;
		top: auto;
		background-color: transparent;
		border: none !important;
	}
	.dialog-box {
		position: absolute;
		top: 55px;
		width: 340px;
		max-width: 340px;
		// width: 600px;
		// max-width: 600px;
		// left: 0;
		left: 0px;
		right: 0;
		// max-height: 400px;
		overflow: auto;
		margin: 0 auto;
		//   overflow: hidden;
	}
}
@media screen and (min-width: $xl) {
	.group {
		width: 450px;
	}
	.dialog-box {
		width: 450px;
		max-width: 450px;
	}
}
</style>
