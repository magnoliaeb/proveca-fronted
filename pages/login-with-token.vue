<template>
	<div class="login-with-token">
		Un momento por favor...
	</div>
</template>

<script>
export default {
	auth: false,

	mounted() {
		this.$authentication.loginWithToken(
			this.$route.query.token
		)
	}
}
</script>