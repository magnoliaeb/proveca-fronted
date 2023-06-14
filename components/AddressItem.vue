<template>
	<v-row class="justify-space-between align-start">
		<v-col cols="12" md="8">
			<div class="">
				<h4 class="text-left">
					{{ item.name }}
				</h4>
				<p class="t0ext-text-left mb-0">{{ item.full }}</p>
				<!-- <v-btn color="#2cafe5" class="d-md-none" text :loading="isBusy" small>
					Editar
				</v-btn> -->
			</div>
		</v-col>
		<v-col cols="auto" md="auto" class="">
			<div class="">
				<v-btn color="#2cafe5" small text :loading="isBusy"> Editar </v-btn>
				<!-- <v-btn color="error" @click="deleteAddress" text :loading="isBusy">
					Eliminar
				</v-btn> -->
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

		deleteAddress() {
			this.isBusy = true;

			this.$store
				.dispatch('identity/deleteAddress', {
					$nuxt: this.$nuxt,
					id: this.item.id,
				})
				.finally(() => (this.isBusy = false));
		},
	},
};
</script>

<style lang="scss" scoped>
* {
}
h4 {
	font-weight: 800;
	font-size: $fs-base;
	color: #000000;
}

p {
	font-weight: 400;
	font-size: $fs-base;
	color: #464646;
}

// button,
// a {
// 	text-transform: inherit !important;
// 	font-weight: 700 !important;
// 	font-size: $fs-sm !important;
// 	text-decoration-line: underline !important;
// 	color: #aeaeae !important;
// }
// .selected {
// 	color: #001f3f !important;
// }

// .icon {
// 	height: 100%;
// 	width: 20px;
// 	object-fit: contain;
// }
</style>
