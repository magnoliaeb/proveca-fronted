<template>
	<section>
		<v-row class="mb-6 no-gutters">
			<v-col cols="12" sm="auto" class="">
				<v-btn
					depressed
					block
					class="button-primary"
					:to="{
						name: 'mi-perfil-agregar-direccion',
					}"
				>
					Agregar dirección
				</v-btn>
			</v-col>
		</v-row>
		<v-row no-gutters tag="ul" class="">
			<v-col v-for="(address, i) in addresses" :key="i" tag="li" cols="12">
				<AddressListItem :address="address" />
			</v-col>
		</v-row>
	</section>
</template>

<script>
import AddressListItem from '~/components/AddressListItem.vue';

export default {
	components: {
		AddressListItem,
	},

	computed: {
		addresses() {
			return [1, 2, 3, 4];
			// return this.$store.state.identity.addresses;
		},
	},
};
</script>

<style lang="scss" scoped>
a {
	width: 259px !important;
	max-width: 259px !important;
	// background-color: orange !important;
	// text-decoration: underline !important;
}

ul {
	li {
		border-top: 1px solid #aeaeae;
	}
	li:last-child {
		border-bottom: 1px solid #aeaeae;
	}
}

.li-select {
	background-color: #d9d9d954 !important;
}

@media screen and (min-width: $sm) {
}
</style>
