<template>
  <div
    v-if="hasSlides"
    class="content"
  >
    <a
      v-for="slide, i in slides"
      :key="i"
      :href="slide.button_link"
    >
      <img
        v-if="i == active"
        :src="slide.desktop_picture"
        :alt="slide.name"
        class="publicity-card"
      >
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      interval: false
    }
  },

  computed: {
    slides() {
			return this.$store.getters['identity/getBanners'].filter(b => b.location == 'SECONDARY')
		},

    length() {
      return this.slides.length
    },

    hasSlides() {
      return Boolean(this.length)
    },

    canCreateSlides() {
      return process.client && ! this.interval && this.hasSlides
    }
  },

  watch: {
    slides: {
      immediate: true,
      handler() {
        if(this.canCreateSlides) {
          setInterval(this.changeActive, 7000)

          this.interval = true
        }
      }
    }
  },

  methods: {
    changeActive() {
      this.active = this.active < (this.length - 1)
        ? this.active + 1
        : 0
    }
  }
};
</script>

<style lang="scss" scoped>
.publicity-card {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   background: transparent;
  //   border: 2px solid red;
  height: 166px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  //   width: 100%;

  //   img {
  //     max-width: 100%;
  //     height: auto;
  //   }
}
</style>
