<template>
	<div class="login-page">
		<LoginContainer style="max-width: 500px; padding-top: 5vh;" />
	</div>
</template>

<script>
import LoginContainer from '../components/LoginContainer'

export default {
	middleware: [
		'guest'
	],

	components: {
		LoginContainer
	},

	head: {
		title: 'Login'
	}
}
</script>

<style lang="scss" scoped>
.login-page {
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	a {
		font-weight: 500;
		color: #000;
		font-size: $fs-sm;
		span {
			color: #2cafe5;
			text-decoration: underline;
		}
	}
}
</style>
