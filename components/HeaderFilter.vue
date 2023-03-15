<template>
	<div class="filter">
		<v-row class="justify-space-between align-center">
			<v-col cols="auto" lg="2" xl="2" class="d-none d-lg-block">
				<h2 class="text-left fs-lg">Filtros</h2>
			</v-col>
			<v-col cols="auto" lg="10" class="">
				<v-breadcrumbs class="px-0" :items="items">
					<template v-slot:divider>
						<v-icon>mdi-chevron-right</v-icon>
					</template>
				</v-breadcrumbs>
			</v-col>
			<v-col cols="auto" class="d-block d-lg-none">
				<div class="d-flex align-center">
					<v-btn
						id="filters"
						class="mr-2"
						depressed
						:small="$vuetify.breakpoint.smAndDown"
						text
						@click="openFilters"
					>
						<img
							class="icon"
							src="../assets/imgs/iconos/filter-list.svg"
							alt="filter-icon"
						/>
						<span class="fs-base">Filtros</span>
					</v-btn>
				</div>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	computed: {
		items() {
			let items = [
				{
					text: 'Inicio',
					href: '/',
					disabled: false,
				},
				{
					text: 'Productos',
					href: '/productos',
					disabled: true,
				},
			];

			//   if (this.$store.state.product.filters.brand) {
			//     items.push({
			//       text: this.$store.state.product.filters.brand,
			//       href: "breadcrumbs_link_1",
			//     });
			//   }

			items[items.length - 1].disabled = true;

			return items;
		},
	},
	methods: {
		openFilters() {
			this.$observer.showFilters = true
		},
	},
};
</script>

<style lang="scss" scoped>
h2 {
	font-weight: 700;
	text-transform: uppercase;
	color: #2cafe5;
}
.icon {
	height: 24px;
	height: 24px;
}

span {
	font-weight: 500;
	color: #2cafe5;
}

@media screen and (min-width: $md) {
	.icon {
		height: 30px;
		height: 30px;
	}
}
</style>
