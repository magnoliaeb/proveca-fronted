<template>
	<div class="login-with-token">
		Un momento por favor...
	</div>
</template>

<script>
export default {
	middleware: [
    	'guest'
  	],

	mounted() {
		this.$authentication.loginWithToken(
			this.$route.query.token
		)
	}
}
</script>