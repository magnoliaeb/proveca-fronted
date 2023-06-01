<template>
	<div class="content py-16">
		<v-row>
			<v-col cols="12" md="auto">
				<BtnGoBack />
			</v-col>
		</v-row>

		<v-row class="no-gutters my-6">
			<v-col cols="12" sm="12" md="10" lg="8" class="px-0">
				<!-- formulario -->
				<ProfileAddressForm />
			</v-col>
		</v-row>
	</div>
</template>

<script>
import ProfileAddressForm from '../../components/ProfileAddressForm.vue';
export default {
	middleware: [
		'auth'
	],
	components: { ProfileAddressForm },
	head: {
		title: 'Agregar dirección',
	},
};
</script>

<style lang="scss" scoped></style>
