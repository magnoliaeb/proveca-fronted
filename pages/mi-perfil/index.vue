<template>
	<div class="mt-16 pt-4 pt-sm-0">
		<div class="content">
			<v-row>
				<v-col cols="12">
					<h2 class="text-left">Configuración de la cuenta</h2>
				</v-col>
			</v-row>
			<InfoUser class="" />

			<MyAddresses class="my-4 mb-16" />
		</div>
	</div>
</template>

<script>
import InfoUser from '../../components/InfoUser.vue';
import MyAddresses from '../../components/MyAddresses.vue';
export default {
	middleware: ['intended'],

	components: { InfoUser, MyAddresses },
	head: {
		title: 'Mi perfil',
	},
};
</script>

<style lang="scss" scoped>
.content {
	max-width: 1000px;
}
h2 {
	font-weight: 800;
	font-size: $fs-xl;
	color: #000000;
}
</style>
