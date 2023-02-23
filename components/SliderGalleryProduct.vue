<template>
	<v-row v-if="imgs.length">
		<v-col cols="12" style="position: relative" class="py-0">
			<client-only>
				<VueSlickCarousel
					v-bind="slickOptions"
					class="d-flex"
					:style="{ width: `${heightImg} !important` }"
				>
					<img
						:style="{ width: `${heightImg} !important` }"
						v-for="(img, index) in imgs"
						:key="index"
						:src="img"
						:height="heightImg"
						:alt="img"
						:width="heightImg"
					/>

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
export default {
	props: {
		imgs: {
			type: Array,
		},
	},
	data() {
		return {
			slickOptions: {
				dots: false,
				arrows: true,
				infinite: true,
				slidesToShow: 1,
				initialSlide: 0,
				pauseOnDotsHover: true,
				pauseOnFocus: true,
				pauseOnHover: true,
				autoplay: true,
				autoplaySpeed: 3000,
				slidesToScroll: 1,
				// speed: 1000,
			},
		};
	},
	computed: {
		heightImg() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return '260px';
				case 'sm':
					return '350px';
				case 'md':
					return '440px';
				case 'lg':
					return '400px';
				case 'xl':
					return '400px';
			}
		},
	},
};
</script>

<style lang="scss" scoped>
img {
	// width: 100% !important;
	margin: 0 auto !important;
	// max-height: 288px !important;
	object-fit: cover;
}
.slick-slider {
	// width: 100%;
	display: block !important;
	// display: contents !important;
	// justify-content: center;
	// margin: 0 auto;
	// position: relative;
	// height: 100%;
	// align-items: center;
}

.custom-arrow.slick-arrow.slick-next {
	right: -20px !important;
	// top: -220px !important;
}
.custom-arrow.slick-arrow.slick-prev {
	left: -20px !important;
	// top: -220px !important;
}

@media screen and (min-width: $sm) {
	.custom-arrow.slick-arrow.slick-next {
		right: -40px !important;
		// top: -220px !important;
	}
	.custom-arrow.slick-arrow.slick-prev {
		left: -40px !important;
		// top: -220px !important;
	}
}
</style>
