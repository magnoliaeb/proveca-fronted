<template>
	<v-row
		style="border-bottom: 1px solid #d2d2d2"
		class="justify-space-between my-4 align-start"
	>
		<v-col cols="12" md="8">
			<v-btn
				class="float-right d-md-none"
				:class="{ selected: item.selected }"
				text
				small
			>
				<v-icon class="" left>mdi-check</v-icon>
				Dirección predeterminada
			</v-btn>
			<div class="">
				<h3 class="text-left mb-3">
					{{ item.name }}
				</h3>
				<p class="t0ext-text-left">{{ item.full }}</p>
				<v-btn
					:to="{ name: 'mi-perfil-editar-direccion-id', params: { id: 1 } }"
					class="d-md-none"
					text
					:loading="isBusy"
					small
				>
					Editar
				</v-btn>
			</div>
		</v-col>
		<v-col cols="auto" md="auto" class="d-none d-md-block">
			<div class="">
				<v-btn class="" :class="{ selected: item.selected }" text>
					<v-icon class="" left>mdi-check</v-icon>
					Dirección predeterminada
				</v-btn>
				<v-btn
					:to="{ name: 'mi-perfil-editar-direccion-id', params: { id: 1 } }"
					text
					:loading="isBusy"
				>
					Editar
				</v-btn>
			</div>
		</v-col>
	</v-row>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			default: {},
		},
	},

	data() {
		return {
			isBusy: false,
		};
	},

	methods: {
		selecteAddress(id) {
			this.$emit('selected', id);
		},

		deleteAddress(id) {
			this.isBusy = true;

			this.$store
				.dispatch('identity/deleteAddress', {
					$nuxt: this.$nuxt,
					id: id,
				})
				.finally(() => (this.isBusy = false));
		},
	},
};
</script>

<style lang="scss" scoped>
* {
}
h3 {
	font-weight: 700;
	font-size: $fs-xl;

	color: #000000;
}
p {
	font-weight: 400;
	font-size: $fs-md;
	color: #000000;
}

button,
a {
	text-transform: inherit !important;
	font-weight: 700 !important;
	font-size: $fs-sm !important;
	text-decoration-line: underline !important;
	color: #aeaeae !important;
}
.selected {
	color: #001f3f !important;
}

.icon {
	height: 100%;
	width: 20px;
	object-fit: contain;
}
</style>
