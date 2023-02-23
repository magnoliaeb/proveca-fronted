<template>
	<v-row v-if="products.length">
		<v-col cols="12" style="position: relative" class="px-0">
			<client-only>
				<VueSlickCarousel v-bind="slickOptions">
					<div
						class="pr-3 pr-lg-4"
						v-for="(product, index) in products"
						:key="index"
					>
						<ProductCard :product="product" />
					</div>

					<template #prevArrow>
						<div class="custom-arrow" style="height: 16px; width: 16px">
							<svg
								style="height: 100%; width: 100%; color: #000000"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="{2}"
									d="M15 19l-7-7 7-7"
								/>
							</svg>
						</div>
					</template>
					<template #nextArrow>
						<div class="custom-arrow" style="height: 16px; width: 16px">
							<svg
								style="height: 100%; width: 100%; color: #000000"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="{2}"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</div>
					</template>
				</VueSlickCarousel>
			</client-only>
		</v-col>
	</v-row>
</template>

<script>
import ProductCard from './ProductCard.vue';
export default {
	data() {
		return {
			slickOptions: {
				dots: false,
				arrows: false,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				initialSlide: 1,
				// pauseOnDotsHover: true,
				// pauseOnFocus: true,
				pauseOnHover: true,
				autoplay: true,
				autoplaySpeed: 3000,
				speed: 1000,
				variableWidth: true,
				adaptiveHeight: true,
				centerMode: true,
				centerPadding: '10px',

				responsive: [
					{
						breakpoint: 1263,
						settings: {},
					},
					// {
					//   breakpoint: 606,
					//   settings: {
					//     slidesToShow: 1,
					//     slidesToScroll: 1,
					//     infinite: true,
					//     dots: true,
					//     arrows: true,
					//   },
					// },
				],
			},
		};
	},
	computed: {
		products() {
			// return [];
			return [
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
				{
					id: 1,
					name: 'Nombre de producto',
					price: 45,
					price_without_discount: 50,
					alias: '',
				},
			];
		},
	},
	components: { ProductCard },
};
</script>

<style lang="scss" scoped></style>
