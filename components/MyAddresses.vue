<template>
	<section>
		<v-row class="justify-space-between align-center">
			<v-col cols="12" sm="auto">
				<h2 class="text-left title-primary">Mis direcciones</h2>
			</v-col>
			<v-col
				cols="12"
				sm="12"
				md=""
				class="d-flex justify-start justify-md-end"
			>
				<v-btn
					depressed
					class="button-primary"
					:to="{ name: 'mi-perfil-agregar-direccion' }"
					>Agregar dirección</v-btn
				>
			</v-col>
			<v-col cols="12" class="">
				<v-divider style="background: #000000"></v-divider>
			</v-col>
		</v-row>
		<NotData v-if="addressesEmpty" :text="text" :title="title" :icon="icon" />

		<template v-else>
			<AddressItem
				@selected="onSeleted"
				v-for="(item, index) in addresses"
				:key="`address-${index}`"
				:item="item"
			/>
		</template>
	</section>
</template>

<script>
import AddressItem from './AddressItem.vue';
export default {
	components: { AddressItem },
	data() {
		return {
			icon: 'home',
			title: 'No se encontró ninguna dirección',
			text: 'Aún no das de alta ninguna dirección',
		};
	},
	methods: {
		onSeleted(id) {
			// dirreccin seleccionada
			console.log(id);
		},
	},
	computed: {
		addresses() {
			return [
				{
					id: 1,
					name: 'Casa',
					selected: true,
					full: 'Donato Guerra #234 Int.22 Col. Jardines del Prado Jalisco México',
				},
				{
					id: 2,
					name: 'Casa',
					selected: false,
					full: 'Donato Guerra #234 Int.22 Col. Jardines del Prado Jalisco México',
				},
				{
					id: 3,
					name: 'Casa',
					selected: false,
					full: 'Donato Guerra #234 Int.22 Col. Jardines del Prado Jalisco México',
				},
			];
		},
		addressesEmpty() {
			return this.addresses.length <= 0;
		},
	},
};
</script>

<style lang="scss" scoped>
button {
	background-color: #1a1a1a !important;
}

a,
button {
	width: 100% !important;
	max-width: 350px !important;
}
</style>
