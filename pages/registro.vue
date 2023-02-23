<template>
	<div class="regiter py-16">
		<RegisterForm />
	</div>
</template>

<script>
import RegisterForm from '../components/RegisterForm.vue';
export default {
	head: {
		title: 'Registro',
	},
	components: { RegisterForm },
};
</script>

<style lang="scss" scoped>
* {
	// border: 1px solid red;
}

// @media screen and (min-width: $xl) {
.regiter {
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}
// }
</style>
