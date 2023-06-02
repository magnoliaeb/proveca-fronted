<template>
	<div>
		<div class="content py-16">
			<EditProfileForm />
		</div>

		<div></div>
	</div>
</template>

<script>
import EditProfileForm from '../../components/EditProfileForm';
export default {
	middleware: [
		'intended'
	],
	
	head: {
		title: 'Editar mi perfil',
	},

	components: {
		EditProfileForm,
	},

	methods: {
		goTo() {
			this.$router.go(-1);
		},
	},
};
</script>

<style lang="scss" scoped></style>
s
