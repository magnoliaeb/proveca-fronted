<template>
	<v-row tag="li" class="py-3 py-lg-4 align-stretch" no-gutters>
		<!-- <span v-show="true">{{ item }}</span> -->
		<v-col cols="9" sm="5" class="d-flex justify-space-between">
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
							params: { id: 10, slug: 'chocolate-savoy' },
						}"
					>
						<v-img
							transition="scale-transition"
							:height="heightImg"
							:width="heightImg"
							:min-width="heightImg"
							:src="`https://picsum.photos/500/300?image=${8 * 5 + 10}`"
							:lazy-src="`https://picsum.photos/10/6?image=${8 * 5 + 10}`"
							:alt="'product-img'"
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
					<nuxt-link
						class="d-none d-sm-block"
						:to="{
							name: 'productos-id-slug',
							params: { id: 10, slug: 'chocolate-savoy' },
						}"
					>
						<h4 class="mb-3">Choclate savoy nestle 200gr</h4>
					</nuxt-link>
					<!-- movil -->
					<div class="d-flex d-sm-none flex-column">
						<nuxt-link
							class="d-block"
							:to="{
								name: 'productos-id-slug',
								params: { id: 10, slug: 'chocolate-savoy' },
							}"
						>
							<h4 class="">Choclate savoy nestle 200gr</h4>
						</nuxt-link>
						<div class="d-flex my-4">
							<div class="group-input">
								<button
									v-ripple="{ class: `primary--text` }"
									class="left"
									@click="dec"
									:disabled="false"
								>
									-
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
									+
								</button>
							</div>
						</div>
						<p>
							P. unit.
							<span>{{ $util.getMoneyFormat(16.33) }}</span>
						</p>
					</div>
				</v-col>
			</v-row>
		</v-col>
		<!-- movil -->
		<v-col cols="3" class="d-flex d-sm-none flex-column justify-space-between">
			<h6 class="text-right">{{ $util.getMoneyFormat(48.56) }}</h6>
			<div class="d-flex justify-end">
				<v-btn
					fab
					x-small
					class=""
					depressed
					@click="deleteItem"
					:disabled="false"
				>
					<img
						height="24px"
						width="24px"
						src="../assets/imgs/iconos/delete.svg"
						alt="delete"
					/>
				</v-btn>
			</div>
		</v-col>

		<!-- web -->
		<v-col
			cols="12"
			sm="2"
			md="2"
			class="text-center d-none d-sm-flex justify-center align-center"
		>
			<!-- input -->
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
		</v-col>
		<!-- web -->

		<v-col
			cols="12"
			sm="2"
			class="d-none d-sm-flex justify-center align-center"
		>
			<span>{{ $util.getMoneyFormat(16.33) }}</span>
		</v-col>
		<!-- web -->

		<v-col
			class="d-none d-sm-flex justify-space-around align-center"
			cols="12"
			sm="3"
			md="3"
		>
			<h6>{{ $util.getMoneyFormat(48.56) }}</h6>

			<v-btn fab x-small depressed @click="deleteItem" :disabled="false">
				<img
					height="24px"
					width="24px"
					src="../assets/imgs/iconos/delete.svg"
					alt="delete"
				/>
			</v-btn>
		</v-col>
	</v-row>
</template>

<script>
// import CartItemMixin from '~/mixins/CartItemMixin';

export default {
	// mixins: [CartItemMixin],
	props: {
		item: {
			type: Object,
			default: {},
		},
	},
	data() {
		return {
			qty: 15,
		};
	},
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
	},
	methods: {
		dec() {},
		updateQty() {},
		inc() {},
		deleteItem() {},
	},
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
	color: #2cafe5;
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
		border: 1px solid $primary;
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

ul {
	border-top: 1px solid #8e8e8e;
	// border-bottom: 1px solid #979797;
}
li {
	border-bottom: 1px solid#E6E6E6;
	&:hover {
		cursor: pointer;
	}
	&:last-child {
		border-bottom: 0;
	}
}

@media screen and (min-width: $sm) {
	li {
		&:hover {
			cursor: pointer;
		}
		&:last-child {
			border-bottom: 1px solid#E6E6E6;
			// border-bottom: 0;
		}
	}
}
@media screen and (min-width: $lg) {
}
</style>
