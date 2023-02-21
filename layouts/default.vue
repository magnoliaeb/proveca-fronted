<template>
	<v-app dark>
		<TheHeader />

		<v-main class="pt-14">
			<v-container fluid class="pa-0">
				<Nuxt class="animate__animated animate__fadeIn" />
			</v-container>
		</v-main>

		<TheFooter />
	</v-app>
</template>

<script>
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
export default {
	components: { TheFooter, TheHeader },
};
</script>

<style lang="scss" scoped>
h2 {
}
</style>
