<template>
	<div class="content py-16">
		<v-row>
			<v-col cols="12" md="auto">
				<BtnGoBack />
			</v-col>
		</v-row>

		<v-row class="my-6 no-gutters">
			<v-col cols="12" sm="12" md="10" lg="8" class="">
				<!-- formulario -->
				<ProfileAddressForm />
			</v-col>
		</v-row>
	</div>
</template>

<script>
import BtnGoBack from '../../../components/BtnGoBack.vue';
import ProfileAddressForm from '../../../components/ProfileAddressForm.vue';
export default {
	middleware: [
		'intended'
	],
	
	components: { ProfileAddressForm, BtnGoBack },
	head: {
		title: 'Editar dirección',
	},
};
</script>

<style lang="scss" scoped></style>
