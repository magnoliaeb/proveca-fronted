<template>
	<div class="">
		<BannerImgWithTitle
			:title="'Contacto'"
			:bg="'banner-contacto'"
			:path="'contacto'"
		/>
		<div class="content">
			<ContactInfo />
			<v-row class="">
				<v-col class="" cols="12">
					<v-divider style="background: #000"></v-divider>
				</v-col>
			</v-row>
			<ContactForm />
		</div>
	</div>
</template>

<script>
import ContactInfo from '../components/ContactInfo.vue';
import ContactForm from '../components/ContactForm.vue';
import BannerImgWithTitle from '../components/BannerImgWithTitle.vue';
export default {
	head: {
		title: 'Contacto',
	},
	components: { ContactInfo, ContactForm, BannerImgWithTitle },
	auth: false,
};
</script>

<style lang="scss" scoped>
* {
	// border: 1px solid purple;
}
</style>
