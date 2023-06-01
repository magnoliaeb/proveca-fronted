<template>
	<div class="register-page">
		<RegisterContainer style="max-width: 500px; padding-top: 5vh;" />
	</div>
</template>

<script>
import RegisterContainer from '../components/RegisterContainer'

export default {
	middleware: [
		'guest'
	],

	components: {
		RegisterContainer
	},
	
	head: {
		title: 'Registro'
	}
}
</script>

<style lang="scss" scoped>
.register-page {
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	p {
		font-weight: 300;
	}
}
</style>
