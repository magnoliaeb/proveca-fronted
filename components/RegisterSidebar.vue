<template>
	<v-navigation-drawer
		style="background-color: #ffffff"
		v-click-outside="clickOutside"
		:value="$observer.showRegister"
		width="373px"
		right
		fixed
	>
		<v-row class="d-flex align-center mt-10" style="position: relative">
			<v-btn
				absolute
				left
				color="#000"
				@click="closeRegister"
				text
				icon
				depressed
				small
			>
				<v-icon>mdi-close</v-icon>
			</v-btn>
			<v-col cols="12" class="text-center">
				<h2>Regístrate</h2>
			</v-col>
		</v-row>
		<v-row class="mb-2">
			<v-col cols="12">
				<BtnGoogleLogin />
			</v-col>
			<v-col cols="12">
				<BtnFacebookLogin />
			</v-col>
			<v-col cols="12">
				<DividerLine />
			</v-col>
		</v-row>

		<RegisterForm :hasLabel="true" />
	</v-navigation-drawer>
</template>

<script>
import RegisterForm from './RegisterForm.vue';

export default {
	components: {
		RegisterForm,
	},

	data() {
		return {
			isDisabled: false,
		};
	},
	methods: {
		closeRegister() {
			this.$observer.showRegister = false;
		},
		clickOutside(event) {
			if (event.target.id !== 'register') {
				this.closeRegister();
			}
		},
	},
};
</script>

<style lang="scss" scoped>
h2 {
	font-weight: 900;
	font-size: $fs-xl;
	color: #000000;
}

@media screen and (min-width: $sm) {
}
</style>
