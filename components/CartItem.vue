<template>
	<v-row tag="li" class="py-3 mb-3 py-lg-4 align-stretch border-radius-card">
		<span v-show="false">{{ item }}</span>

		<v-col cols="8" sm="5" class="d-flex justify-space-between">
			<v-row class="">
				<v-col
					cols=""
					sm=""
					class="d-flex align-start pl-0 align-sm-center py-0"
				>
					<nuxt-link
						class="mr-3"
						:to="{
							name: 'productos-id-slug',
							params: {
								id: item.product.id,
								slug: item.product.slug,
							},
						}"
					>
						<v-img
							transition="scale-transition"
							:height="heightImg"
							:width="heightImg"
							:min-width="heightImg"
							:src="image"
							:lazy-src="image"
							:alt="item.name"
							aspect-ratio="1"
							class="grey lighten-3"
						>
							<template v-slot:placeholder>
								<v-row class="fill-height ma-0" align="center" justify="center">
									<v-progress-circular
										:size="25"
										:width="3"
										indeterminate
										color="primary"
									></v-progress-circular>
								</v-row>
							</template>
						</v-img>
					</nuxt-link>
					<div class="">
						<nuxt-link
							class=""
							:to="{
								name: 'productos-id-slug',
								params: {
									id: item.product.id,
									slug: item.product.slug,
								},
							}"
						>
							<h4 class="">{{ item.product.name }}</h4>
						</nuxt-link>
						<p>
							<small v-html="$util.getVariantFormat2(variant)"></small>
						</p>
					</div>
				</v-col>
			</v-row>
		</v-col>
		<!-- movil -->
		<v-col cols="4" class="d-flex d-sm-none flex-column justify-space-between">
			<h6 class="text-right">{{ formattedTotal }}</h6>
			<div class="flex-grow-0 d-flex justify-end">
				<v-btn
					small
					text
					depressed
					@click="deleteItem"
					:disabled="$store.state.cart.isBusy"
				>
					Eliminar
				</v-btn>
			</div>
		</v-col>

		<!-- web -->
		<!-- <v-col
			cols="12"
			sm="2"
			md="2"
			class="text-center d-none d-sm-flex justify-center align-center"
		>
			<div class="d-flex justify-center">
				<div class="group-input">
					<button
						v-ripple="{ class: `primary--text` }"
						class="left"
						@click="dec"
						:disabled="false"
					>
						-
					</button>

					<input type="number" v-model="qty" @change="updateQty" disabled />

					<button
						v-ripple="{ class: `primary--text` }"
						class="right"
						@click="inc"
						:disabled="false"
					>
						+
					</button>
				</div>
			</div>
		</v-col> -->
		<!-- web -->
		<v-col
			cols="auto"
			class="d-none d-sm-flex justify-center py-0 align-center"
		>
			<v-btn
				v-if="getQty > interval"
				:x-small="$vuetify.breakpoint.xsOnly"
				:small="$vuetify.breakpoint.smAndUp"
				@click="dec"
				icon
				color="primary"
				class=""
				:loading="isBusy"
				:disabled="! variant || $store.state.cart.isBusy"
			>
				<v-icon
					:x-small="$vuetify.breakpoint.xsOnly"
					:small="$vuetify.breakpoint.smAndUp"
				>
					mdi-minus
				</v-icon>
			</v-btn>

			<v-btn
				v-else
				:x-small="$vuetify.breakpoint.xsOnly"
				:small="$vuetify.breakpoint.smAndUp"
				@click="deleteItem"
				icon
				color="black"
				class=""
				:loading="isBusy"
				:disabled="$store.state.cart.isBusy"
			>
				<v-icon
					:x-small="$vuetify.breakpoint.xsOnly"
					:small="$vuetify.breakpoint.smAndUp"
				>
					mdi-delete
				</v-icon>
			</v-btn>

			<span class="mx-2">
				{{ getQty }} libras
			</span>

			<v-btn
				:x-small="$vuetify.breakpoint.xsOnly"
				:small="$vuetify.breakpoint.smAndUp"
				@click="inc"
				icon
				color="primary"
				class=""
				:loading="isBusy"
				:disabled="! variant || $store.state.cart.isBusy"
			>
				<v-icon
					:x-small="$vuetify.breakpoint.xsOnly"
					:small="$vuetify.breakpoint.smAndUp"
				>
					mdi-plus
				</v-icon>
			</v-btn>
		</v-col>

		<!-- web -->

		<v-col
			class="d-none d-sm-flex justify-space-around align-center"
			cols="12"
			sm=""
			md=""
		>
			<v-btn
				small
				text
				class=""
				depressed
				@click="deleteItem"
				:disabled="$store.state.cart.isBusy"
			>
				<span class="text-decoration-underline">Eliminar</span>
			</v-btn>
			<h6>{{ formattedTotal }}</h6>
		</v-col>
	</v-row>
</template>

<script>
import CartItemMixin from '~/mixins/CartItemMixin';

export default {
	mixins: [CartItemMixin],

	computed: {
		heightImg() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return 55;
				case 'sm':
					return 60;
				case 'md':
					return 80;
				case 'lg':
					return 90;
				case 'xl':
					return 90;
			}
		},

		isBusy() {
			return this.$store.state.cart.isBusy;
		},

		interval() {
			return this.$util.extractFirstNumber(this.variant)
		}
	},

	methods: {
		dec() {
			let qty = this.getQty - this.interval

            if(this.qty > 1) {
                this.$store.dispatch("cart/updateItemQty", {
                    item: this.item,
					qty: qty
                })
            }
        },

        inc() {
			let qty = this.getQty + this.interval

            this.$store.dispatch("cart/updateItemQty", {
				item: this.item,
				qty: qty
			})
        },
	}
};
</script>

<style lang="scss" scoped>
h4 {
	font-weight: 500;
	font-size: $fs-base;
	color: #000000;
}

p {
	font-weight: 300;
	font-size: $fs-base;
	color: #000000;
}

h6 {
	font-weight: 700;
	font-size: $fs-base;
	color: #000;
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
		color: #000000;
		border-radius: 50%;
		// border: 1px solid $primary;
		font-size: $fs-sm;
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
	color: #000000;
	&:focus {
		outline: none;
	}
}

// ul {
// 	border-top: 1px solid #8e8e8e;
// 	// border-bottom: 1px solid #979797;
// }
li {
	border: 1px solid #f5f5f5;
	&:hover {
		cursor: pointer;
	}
}

@media screen and (min-width: $sm) {
	li {
		&:hover {
			cursor: pointer;
		}
		&:last-child {
			// border-bottom: 1px solid#E6E6E6;
			// border-bottom: 0;
		}
	}
}
@media screen and (min-width: $lg) {
}
</style>
