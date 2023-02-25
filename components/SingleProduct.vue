<template>
	<v-row class="justify-space-between py-6">
		<v-col cols="12" md="12" lg="auto" class="">
			<SliderSingleProduct />
		</v-col>
		<v-col cols="12" sm="12" md="12" lg="5" class="pa-0">
			<v-row class="justify-space-between align-end">
				<v-col cols="12">
					<h2>Atún Dolores en Agua 133gr</h2>
				</v-col>

				<v-col cols="5" class="d-flex align-center">
					<h3 class="mr-3">Compartir:</h3>
					<div class="d-flex">
						<v-btn icon text color="success" class="mr-3">
							<img
								height="25"
								width="25"
								src="../assets/imgs/iconos/whatsaap.svg"
								alt="whatsaap"
							/>
						</v-btn>
						<v-btn icon text color="accent">
							<img
								height="25"
								width="25"
								src="../assets/imgs/iconos/facebook.svg"
								alt="facebook"
							/>
						</v-btn>
					</div>
				</v-col>
			</v-row>
			<v-row class="mt-4 mb-6">
				<v-col cols="12">
					<ul>
						<li
							class="d-flex flex-column flex-sm-row align-center justify-center justify-sm-space-between py-2 py-sm-4"
							v-for="(item, index) in 4"
							:key="index"
						>
							<h4>
								Medio bulto <span class="mx-3">$21.66 por Kg </span>
								<s>$22.80</s>
							</h4>
							<div class="d-flex justify-center d-sm-block mt-4 mt-sm-0">
								<div class="group-input">
									<button
										v-ripple="{ class: `primary--text` }"
										class="left"
										@click="dec"
										:disabled="false"
									>
										<span>-</span>
									</button>

									<input
										type="number"
										v-model="qty"
										@change="updateQty"
										disabled
									/>

									<button
										v-ripple="{ class: `primary--text` }"
										class="right"
										@click="inc"
										:disabled="false"
									>
										<span>+</span>
									</button>
								</div>
							</div>
						</li>
					</ul>
					<!-- <p v-html="product.long_description"></p> -->
				</v-col>
			</v-row>
			<v-row class="align-center justify-space-between">
				<v-col cols="12" sm="6">
					<v-btn
						depressed
						block
						class="blue-dark"
						:loading="loading"
						:disabled="false"
						@click="add"
					>
						Comprar
					</v-btn>
				</v-col>
				<v-col cols="12" sm="6">
					<v-btn
						depressed
						block
						class="blue-light"
						:loading="loading"
						:disabled="false"
						@click="add"
					>
						Agregar al carrito
					</v-btn>
				</v-col>
			</v-row>
			<v-row class="">
				<v-col cols="12">
					<h5>Descripción del producto</h5>
				</v-col>
				<v-col cols="12">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.
					</p>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>
import SliderSingleProduct from './SliderSingleProduct.vue';
export default {
	components: { SliderSingleProduct },
	data() {
		return {
			qty: 10,
			loading: false,
			// alert: false,
			// duration: 3000,
		};
	},
	computed: {
		product() {
			// return this.$store.state.product.show;
		},
	},
	methods: {
		inc() {},
		dec() {},
		updateQty() {},
		add() {},
		// add() {
		// 	this.loading = true;
		// 	this.$app.$cart
		// 		.addItem({
		// 			buyable_type: this.buyable.buyable_type,
		// 			buyable_id: this.buyable.buyable_id,
		// 			quantity: 1,
		// 		})
		// 		.then(() => this.showAlert())
		// 		.finally(() => (this.loading = false));
		// },
		// showAlert() {
		// 	this.alert = true;
		// 	setTimeout(() => (this.alert = false), this.duration);
		// },
	},
};
</script>

<style lang="scss" scoped>
h2 {
	font-weight: 700;
	font-size: 18px;
	line-height: 39px;
	/* identical to box height */

	color: #2cafe5;
}
h3 {
	font-weight: 300;
	font-size: 14px;
	line-height: 20px;
	/* identical to box height */

	color: #2cafe5;
}
h4 {
	font-weight: 300;
	font-size: 14px;
	line-height: 26px;
	/* identical to box height */

	span {
		font-weight: 500;
		font-size: 14px;
		line-height: 26px;
		/* identical to box height */

		color: #2cafe5;
	}
	s {
		font-weight: 300;
		font-size: 14px;
		line-height: 26px;
		/* identical to box height */

		text-decoration-line: line-through;

		color: rgba(0, 0, 0, 0.2);
	}
}
p {
	font-weight: 400;
	font-size: 15px;
	line-height: 20px;

	color: #000000;
}

h5 {
	font-weight: 700;
	font-size: 18px;
	line-height: 33px;
	/* identical to box height */

	color: #2cafe5;
}

button.blue-dark {
	text-indent: initial !important;
	font-weight: 300 !important;
	font-size: 20px !important;
	line-height: 26px !important;
	/* identical to box height */

	color: #ffffff !important;
	border-radius: 11px !important;
	text-transform: initial !important;
	background: #196382 !important;
	height: 50px !important;
}
button.blue-light {
	text-indent: initial !important;
	font-weight: 300 !important;
	font-size: 20px !important;
	line-height: 26px !important;
	/* identical to box height */

	color: #ffffff !important;
	border-radius: 11px !important;
	text-transform: initial !important;
	background: #2cafe5 !important;
	height: 50px !important;
}

ul {
	li {
		border-bottom: 1px solid rgba(0, 0, 0, 0.15);
		&:last-child {
			border-bottom: none;
		}
	}
}

.group-input {
	// border: 1px solid red;
	position: relative;
	display: flex;
	align-items: center;
	// width: 89px;
	height: 30px;
	max-width: 80px;

	button {
		position: absolute;
		height: 25px;
		width: 25px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		border: 1px solid $primary;
		font-size: 16px;
		span {
			color: #000000;
		}
	}
	button.left {
		left: -5px;
	}
	button.right {
		right: -5px;
	}
}

input {
	width: 100%;
	text-align: center;
	height: 100%;
	font-weight: 300;
	font-size: 17.7583px;
	line-height: 23px;
	color: #2cafe5;
	&:focus {
		outline: none;
	}
}

@media screen and (min-width: $md) {
	button.blue-dark {
		height: 60px !important;
	}
	button.blue-light {
		height: 60px !important;
	}
	h2 {
		font-size: 30px;
	}
	h3 {
		font-size: 20px;
	}
	h4 {
		font-size: 20px;
		span {
			font-size: 20px;
		}
		s {
			font-size: 20px;
		}
	}

	// button {
	// 	font-size: 15px !important;
	// 	height: 49px !important;
	// }
}
</style>
