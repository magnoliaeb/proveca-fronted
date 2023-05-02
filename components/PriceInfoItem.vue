<template>
	<v-row
		class="price-info-item mb-1 justify-space-between align-center"
		tag="li"
	>
		<v-col cols="12" sm="auto" class="">
			<h5>
				<span class="">{{ $util.getVariantFormat(variant) }}</span>
				<span>{{ $util.getMoneyFormat(variant.price) }}</span>
			</h5>
		</v-col>
		<v-col cols="auto" class="">
			<div class="group-input">
				<button class="left" type="button" @click="dec">-</button>
				<input type="number" v-model="qty" disabled />
				<button class="right" type="button" @click="inc">+</button>
			</div>
		</v-col>
		<v-col cols="auto" class="d-flex justify-end">
			<v-tooltip color="primary" bottom>
				<template v-slot:activator="{ on, attrs }">
					<v-btn
						@click="addToCart(qty)"
						depressed
						outlined
						id="add-product-dialog"
						text
						v-bind="attrs"
						v-on="on"
						class="cart"
					>
						<img
							class=""
							__src="require(`../assets/imgs/iconos/box-empty.svg`)"
							:src="require(`../assets/imgs/iconos/cart-plus.svg`)"
							alt="box-blue"
						/>
					</v-btn>
				</template>
				<span>Agregar al carrito</span>
			</v-tooltip>
		</v-col>

		<!-- <v-col cols="auto" class="pa-0">
			<v-row> </v-row>
		</v-col> -->
	</v-row>
</template>

<script>
import BuyableMixin from "~/mixins/BuyableMixin";

export default {
	props: [
		'variant'
	],

	mixins: [
		BuyableMixin
	],

	data() {
		return {
			qty: 1
		}
	},

	methods: {
		dec() {
			if (this.qty > 1) {
				this.qty = this.qty - 1
			}
		},

		inc() {
			this.qty = this.qty + 1
		}
	},

	created() {
		this.selectedVariant = this.variant
	}
};
</script>

<style lang="scss" scoped>
button.cart {
	background-color: $primary !important;
}
.price-info-item {
	.group-input {
		position: relative;
		display: flex;
		align-items: center;
		width: 92px;
		height: 27px;
		border: 1px solid $primary;
		border-radius: 4px;
		button {
			position: absolute;
			padding: 0 3px;
			color: #3e3e3e;
			height: 80%;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 30%;
		}
		button.left {
			left: 0px;
			border-right: 1px solid #d2d2d2;
		}
		button.right {
			right: 0px;
			border-left: 1px solid #d2d2d2;
		}
	}
	input {
		width: 100%;
		text-align: center;
		height: 25px;
		border-radius: 5px;
		font-size: 14px;
		color: #3e3e3e;
		text-align: center;
		&:focus {
			outline: none;
		}
	}
}

li:nth-child(even) {
	background-color: #d8d8d8;
}
h3 {
	font-weight: 600;
	font-size: 15px;
	line-height: 20px;
	/* or 133% */

	text-align: center;

	color: #9b0813;
}
h4 {
	font-weight: 300;
	font-size: 13px;
	line-height: 29px;
	/* identical to box height, or 223% */
	color: #000;
}

h5 {
	font-weight: normal;
	font-size: 12px;
	line-height: 19px;
	/* identical to box height, or 158% */

	text-transform: uppercase;

	color: #000;
	span {
		font-weight: 600;
		text-transform: none;
	}
}

button {
	width: 27px !important;
	min-width: 27px !important;
	height: 27px !important;
	border-color: $primary !important;
	img {
		width: 20px !important;
		min-width: 20px !important;
		height: 20px !important;
	}
}
</style>
