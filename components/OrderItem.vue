<template>
	<v-row class="flex justify-space-between py-3 align-center" tag="li">
		<v-col cols="12" sm="auto" class="d-flex px-0">
			<v-col
				cols="auto"
				sm="auto"
				md="auto"
				class="flex-grow-0 d-flex justify-center justify-sm-start"
			>
				<nuxt-link
					class="d-block"
					:to="{
						name: 'productos-id-slug',
						params: {
							id: item.product.id,
							slug: item.product.slug,
						},
					}"
				>
					<v-img
						:width="heightImg"
						transition="scale-transition"
						:height="heightImg"
						:src="item.picture.url"
						:lazy-src="item.picture.url"
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
			<v-col cols="" md="" class="text-left flex-grow-1">
				<h3 class="mb-0">
					{{ item.name }}
				</h3>
				<p class="mb-0">Grande</p>
				<p class="mb-0">Q 5.00 x Libra</p>
			</v-col>
		</v-col>
		<v-col cols="6" sm="auto" md="auto" class="text-sm-right d-md-block">
			<p class="d-block">{{ item.product_uom_qty }} Libras</p>
		</v-col>
		<v-col cols="6" sm="auto" class="text-right text-sm-left">
			<p>{{ formattedTotal }}</p>
		</v-col>
	</v-row>
</template>

<script>
import OrderItemMixin from '~/mixins/OrderItemMixin';

export default {
	mixins: [OrderItemMixin],

	computed: {
		heightImg() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return 80;
				case 'sm':
					return 90;
				case 'md':
					return 100;
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

	color: #000000;
}

p {
	font-weight: 600;
	font-size: $fs-base;
	line-height: 25px;
	color: #000;
}

small {
	// font-family: "Gotham";
	font-style: normal;
	font-weight: normal;
	font-size: $fs-base;

	color: #272727;
}
li {
	border: 1px solid #eeeeee;
	// &:first-child {
	// 	border-top: 1px solid #000000;
	// }
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
