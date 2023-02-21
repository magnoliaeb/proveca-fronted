<template>
  <div class="pt-16 pb-6 home-slider">
    <div class="">
      <client-only>
        <VueSlickCarousel v-bind="slickOptions">
          <div class="px-2 mb-8" v-for="(item, index) in 10" :key="index">
            <client-only>
              <v-img
                transition="scale-transition"
                :src="`https://picsum.photos/500/300?image=${8 * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${8 * 5 + 10}`"
                aspect-ratio="1"
                class="grey lighten-3 img mx-auto"
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
            </client-only>
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
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        variableWidth: true,
        adaptiveHeight: true,

        responsive: [
          {
            breakpoint: 1263,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "10px",
            },
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
};
</script>

<style lang="scss" scoped>
.custom-arrow.slick-arrow.slick-next {
  right: -10px !important;
}
.custom-arrow.slick-arrow.slick-prev {
  left: -10px !important;
}

.img {
  width: 474px;
  height: 210px;
  border-radius: 9px;

  // object-fit: cover;
}

@media screen and (min-width: $sm) {
}
@media screen and (min-width: $md) {
  .custom-arrow.slick-arrow.slick-next {
    right: -45px !important;
  }
  .custom-arrow.slick-arrow.slick-prev {
    left: -45px !important;
  }
}
</style>
