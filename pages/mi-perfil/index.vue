<template>
	<div class="">
		<div class="content py-md-16">
			<InfoUser class="" />

			<MyAddresses class="my-14" />
		</div>
	</div>
</template>

<script>
import InfoUser from '../../components/InfoUser.vue';
import MyAddresses from '../../components/MyAddresses.vue';
export default {
	middleware: [
		'intended'
	],
	
	components: { InfoUser, MyAddresses },
	head: {
		title: 'Mi perfil',
	},
};
</script>

<style lang="scss" scoped></style>
