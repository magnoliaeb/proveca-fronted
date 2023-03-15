<template>
	<v-app dark>
		<TheHeader class="" />

		<v-main class="mt-16 pt-8 pt-md-6">
			<v-container fluid class="pa-0">
				<Nuxt class="animate__animated animate__fadeIn" />
			</v-container>
		</v-main>

		<TheFooter class="" />

		<AlertSweet />
	</v-app>
</template>

<script>
import AlertSweet from "../components/AlertSweet.vue";
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
export default {
	components: { AlertSweet, TheFooter, TheHeader },

	watch: {
		"$route.query": {
			immediate: false,
			deep: true,
			handler(query) {
				this.$observer.routeQuery = this.$util.clone(query)
			}
		}
	}
};
</script>

<style lang="scss" scoped></style>
