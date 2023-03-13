<template>
	<v-btn dark @click="$router.back()" text>
		<v-icon dark left>mdi-chevron-left </v-icon>
		Regresar</v-btn
	>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
button {
	font-weight: 400 !important;
	font-size: $fs-base !important;
	color: #000000 !important;
	border: 1px solid #2cafe5 !important;
	border-radius: 6px !important;
	text-transform: initial !important;
}
</style>
