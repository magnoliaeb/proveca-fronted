<template>
	<div class="pt-16 home-slider">
		<div class="pt-2 pt-md-4 pt-lg-0">
			<!-- <pre>{{ slides }}</pre> -->
			<client-only v-if="this.slides.length != 0">
				<VueSlickCarousel v-bind="slickOptions">
					<div v-for="(item, index) in slides" :key="index" class="px-2">
						<!-- <a :href="item.button_link" class="d-block img-box"> -->
						<v-card
							class="d-block img-box"
							:href="item.button_link"
							elevation="0"
						>
							<v-img
								transition="scale-transition"
								:src="item.desktop_picture"
								:lazy-src="item.desktop_picture"
								aspect-ratio="1"
								class=""
								width="100%"
								height="100%"
								contain
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
						</v-card>
						<!-- </a> -->
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
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			slickOptions: {
				dots: true,
				arrows: false,
				infinite: true,
				autoplay: true,
				infinite: true,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 1,
				autoplaySpeed: 3000,
				// slidesToScroll: 1,
				variableWidth: true,

				responsive: [
					// {
					// 	breakpoint: 1263,
					// 	settings: {
					// 		slidesToShow: 1,
					// 		slidesToScroll: 1,
					// 		centerMode: true,
					// 		centerPadding: '10px',
					// 	},
					// },
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
		slides() {
			return this.$store.getters['identity/getBanners'].filter(
				(b) => b.location == 'MAIN'
			);
		},
	},
};
</script>

<style lang="scss">
.home-slider {
	.v-image__image {
		background-size: cover !important;
	}
}
</style>

<style lang="scss" scoped>
.img-box {
	width: 300px !important;
	height: 150.02px !important;
	border-radius: 6.43px !important;
	box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25) !important;
	border-radius: 9px !important;
	overflow: hidden !important;
}

@media screen and (min-width: $sm) {
	.img-box {
		width: 338.61px !important;
	}
}
@media screen and (min-width: $md) {
	.img-box {
		width: 474px !important;
		height: 210px !important;
		border-radius: 9px !important;
	}
}
@media screen and (min-width: $lg) {
	.img-box {
		width: 474px !important;
		height: 250px !important;
		border-radius: 9px !important;
	}
}
// @media screen and (min-width: $md) {
// }
</style>
