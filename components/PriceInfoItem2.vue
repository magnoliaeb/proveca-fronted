<template>
	<li class="d-flex flex-column flex-sm-row align-center justify-center justify-sm-space-between py-2 py-sm-4">
		<h4>
			{{ $util.getVariantFormat(variant) }} <span class="mx-3">{{ $util.getMoneyFormat(variant.price) }}</span>
			<!-- <s>$22.80</s> -->
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
			qty: 0
		}
	},

	methods: {
		dec() {
			if (this.qty > 1) {
				this.qty = this.qty - 1

				this.addToCart(this.qty)
			}
		},

		inc() {
			this.qty = this.qty + 1

			this.addToCart(this.qty)
		}
	},

	created() {
		this.selectedVariant = this.variant
	}
};
</script>

<style lang="scss" scoped>
h2 {
	font-weight: 700;
	font-size: $fs-2xl;

	color: #2cafe5;
}
h3 {
	font-weight: 300;
	font-size: $fs-md;
	color: #2cafe5;
}
h4 {
	font-weight: 300;
	font-size: $fs-base;

	span {
		font-weight: 500;
		font-size: $fs-base;

		color: #2cafe5;
	}
	s {
		font-weight: 300;
		font-size: $fs-base;

		text-decoration-line: line-through;

		color: rgba(0, 0, 0, 0.2);
	}
}

h5 {
	font-weight: 700;
	font-size: $fs-md;
	color: #2cafe5;
}
p {
	font-weight: 400;
	font-size: $fs-base;
	color: #000000;
}

button.blue-dark {
	text-indent: initial !important;
	font-weight: 300 !important;
	font-size: $fs-md !important;
	line-height: 26px !important;

	color: #ffffff !important;
	border-radius: 11px !important;
	text-transform: initial !important;
	background: #196382 !important;
	height: 50px !important;
}
button.blue-light {
	text-indent: initial !important;
	font-weight: 300 !important;
	font-size: $fs-md !important;
	line-height: 26px !important;

	color: #ffffff !important;
	border-radius: 11px !important;
	text-transform: initial !important;
	background: #2cafe5 !important;
	height: 50px !important;
}

li {
	border-bottom: 1px solid rgba(0, 0, 0, 0.15);
	&:last-child {
		border-bottom: none;
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
		font-size: $fs-sm;
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
	font-size: $fs-base;
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
}
</style>
