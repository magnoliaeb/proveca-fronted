<template>
	<div class="">
		<form @submit.prevent="sendForm">
			<v-row class="justify-center" no-gutters>
				<v-col cols="12" sm="12" lg="12">
					<input
						placeholder="Ingresa tu correo electrónico"
						type="email"
						v-model.trim="email"
						autocomplete="email"
					/>
				</v-col>
				<v-col class="mt-4" cols="auto" md="12" lg="12">
					<v-btn
						type="submit"
						dark
						depressed
						outlined
						:loading="isLoading"
						:disabled="isLoading"
					>
						Suscribirme
					</v-btn>
				</v-col>
			</v-row>
		</form>
		<!-- <AlertDialogSuscribe /> -->
	</div>
</template>

<script>
import AlertDialogSuscribe from './AlertDialogSuscribe.vue';

export default {
	components: { AlertDialogSuscribe },

	data() {
		return {
			showAlert: false,

			isLoading: false,
			email: null,
		};
	},
	methods: {
		sendForm() {
			if (this.email.length > 0) {
				this.isLoading = true;
				this.$store
					.dispatch('subscribers/subscribe', {
						name: this.email,
						email: this.email,
					})
					.then((response) => {
						this.showAlert = true;
						this.isLoading = false;
						this.email = '';
					});
			}
		},
	},
};
</script>

<style lang="scss" scoped>
input {
	width: 100%;
	height: 55px;
	padding: 10px;
	background: #ffffff;
	border: 1px solid #2cafe5;
	border-radius: 5px;
	// max-width: 324px !important;

	&:focus {
		outline: none;
		// border: 1px solid $primary;
	}
	&::placeholder {
		font-weight: 400;
		font-size: 15px;
		line-height: 20px;
		/* identical to box height */

		color: rgba(151, 151, 151, 0.54);
	}
}
button {
	background: #2cafe5 !important;
	border-radius: 5px !important;
	font-weight: 700 !important;
	font-size: 15px !important;
	line-height: 72.3% !important;
	text-transform: initial !important;
	/* identical to box height, or 11px */

	text-align: center !important;

	color: #ffffff !important;
	// width: 100% !important;
	width: 203px !important;
	height: 55px !important;
}
@media screen and (min-width: $lg) {
	input {
	}
}
</style>
