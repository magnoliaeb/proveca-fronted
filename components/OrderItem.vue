<template>
	<v-row class="flex justify-space-between py-3" tag="li">
		<v-col
			cols="12"
			md="auto"
			class="flex-grow-0 d-flex justify-center justify-sm-start"
		>
			<nuxt-link
				class="d-block"
				:to="{ name: 'productos-id', params: { id: 1 } }"
			>
				<v-img
					:width="heightImg"
					transition="scale-transition"
					:height="heightImg"
					:src="`https://picsum.photos/500/300?image=${8 * 5 + 10}`"
					:lazy-src="`https://picsum.photos/10/6?image=${8 * 5 + 10}`"
					:alt="'product.name'"
					aspect-ratio="1"
					class="grey lighten-3 scale"
				>
					<template v-slot:placeholder>
						<v-row class="fill-height ma-0" align="center" justify="center">
							<v-progress-circular
								:size="30"
								:width="3"
								indeterminate
								color="primary"
							></v-progress-circular>
						</v-row>
					</template>
				</v-img>
			</nuxt-link>
		</v-col>
		<v-col cols="auto" md="" class="text-left flex-grow-1">
			<h3 class="mb-2">
				{{ 'Coca Cola 600ml' }}
			</h3>
			<p class="">{{ '$ 20.00' }}</p>
			<div class="d-none d-md-block">
				<v-btn tag="button" depressed to="/productos" class="button-primary"
					>Comprar de nuevo</v-btn
				>
			</div>
		</v-col>
		<v-col cols="auto" md="auto" class="text-right d-md-block">
			<span class="">
				{{ $util.getMoneyFormat(345.0) }}
			</span>
			<small class="d-block my-3">{{ 3 }} pz</small>
		</v-col>
		<v-col cols="12" class="d-flex d-md-none">
			<v-btn tag="button" depressed to="/productos" class="button-primary"
				>Comprar de nuevo</v-btn
			>
		</v-col>
	</v-row>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			default: {},
		},
	},
	computed: {
		heightImg() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return 80;
				case 'sm':
					return 90;
				case 'md':
					return 90;
				case 'lg':
					return 100;
				case 'xl':
					return 100;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
h3,
span {
	font-weight: 800;
	font-size: $fs-lg;
	line-height: 31px;

	color: #7d7d7d;
}

p {
	font-weight: 400;
	font-size: $fs-base;
	line-height: 25px;

	color: #7d7d7d;
}

small {
	// font-family: "Gotham";
	font-style: normal;
	font-weight: normal;
	font-size: $fs-base;

	color: #272727;
}
li {
	border-bottom: 1px solid #eeeeee;
	&:first-child {
		border-top: 1px solid #000000;
	}
}

img {
	width: 100%;
	object-fit: cover;
}
.box {
	height: 35px;
	width: 35px;
}

button {
	width: 100% !important;
	max-width: 100% !important;
	display: block !important;
}

@media screen and (min-width: $sm) {
	button {
		width: 277px !important;
	}
}
@media screen and (min-width: $md) {
}
</style>
