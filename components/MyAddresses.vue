<template>
	<section>
		<v-row>
			<v-col cols="12">
				<v-expansion-panels flat v-model="panel" class="border-radius-card">
					<v-expansion-panel>
						<v-expansion-panel-header color="#f5f5f5" hide-actions
							><h3>Direcciones</h3></v-expansion-panel-header
						>
						<v-expansion-panel-content class="py-4">
							<NotData
								v-if="addressesEmpty"
								:text="text"
								:title="title"
								:icon="icon"
							/>
							<template v-else>
								<v-row class="justify-end">
									<v-col cols="auto">
										<v-btn
											color="#2cafe5"
											text
											id="btn-new-address"
											@click="dialogAddress = true"
											>Añadir una nueva dirección</v-btn
										>
									</v-col>
								</v-row>
								<AddressItem
									@selected="onSeleted"
									v-for="(item, index) in addresses"
									:key="`address-${index}`"
									:item="item"
								/>
								<div class="">
									<!-- <v-btn depressed height="60px" text class="">
										<div class="d-flex align-start fill-height">
											<v-icon small class="mr-3">mdi-email</v-icon>
											<div class="text-left">
												<h class="text-break" 4>Usar la dirección actual</h>
												<p class="mb-0 text-break">
													1012 Los angeles, Ca.90874
												</p>
											</div>
										</div>
									</v-btn> -->
								</div>
							</template>
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</v-col>
		</v-row>

		<!-- <v-row class="justify-space-between align-center">
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
		</v-row> -->
		<DialogAddress
			:dialogAddress="dialogAddress"
			@close="dialogAddress = false"
		/>
	</section>
</template>

<script>
import AddressItem from './AddressItem.vue';
import DialogAddress from './DialogAddress.vue';
export default {
	components: { AddressItem, DialogAddress },
	data() {
		return {
			icon: 'home',
			title: 'No se encontró ninguna dirección',
			text: 'Aún no das de alta ninguna dirección',
			panel: 0,
			dialogAddress: false,
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
			return this.$store.getters['identity/getAddresses'];
		},

		addressesEmpty() {
			return this.addresses.length <= 0;
		},
	},
};
</script>

<style lang="scss" scoped>
h3 {
	font-weight: 800;
	font-size: $fs-lg;
	color: #000000;
}

p {
	font-weight: 400;
	font-size: $fs-base;
	color: #464646;
}
.v-item-group.v-expansion-panels {
	border: 1px solid #f5f5f5;
}
h4 {
	font-weight: 800;
	font-size: $fs-base;
	color: #000000;
}

// button,
// a {
// 	max-width: 350px !important;
// 	width: 100% !important;
// 	// width: 350px;
// }

@media screen and (min-width: $sm) {
}
</style>
