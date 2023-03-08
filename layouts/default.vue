<template>
	<v-app dark>
		<TheHeader class="" />

		<v-main class="mt-16 pt-8 pt-md-6">
			<v-container fluid class="pa-0">
				<Nuxt class="animate__animated animate__fadeIn" />
			</v-container>
		</v-main>

		<TheFooter class="" />
	</v-app>
</template>

<script>
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
export default {
	components: { TheFooter, TheHeader },
};
</script>

<style lang="scss" scoped></style>
