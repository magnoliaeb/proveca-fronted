<template>
	<div :class="{ 'mb-6': showBtnGoBack }">
		<v-row
			class="justify-space-between align-center"
			:class="{ 'justify-end': !showBtnGoBack }"
		>
			<v-col cols="auto" v-if="showBtnGoBack">
				<BtnGoBack />
			</v-col>
			<v-col cols="auto" sm="auto" :class="{ 'px-3': showBtnGoBack }">
				<v-breadcrumbs class="px-0" :items="items">
					<template v-slot:divider>
						<v-icon>mdi-chevron-right</v-icon>
					</template>
				</v-breadcrumbs>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import BtnGoBack from './BtnGoBack.vue';

export default {
	props: {
		showBtnGoBack: {
			type: Boolean,
			default: false
		},
	},
	computed: {
		items() {
			let items = [
				{
					text: '1.Mi Carrito',
					href: '/mi-carrito',
					disabled: false,
				},
				{
					text: '2.Configuración',
					href: '/productos',
					disabled: true,
				},
				{
					text: '2.Pago',
					href: '/productos',
					disabled: true,
				},
				{
					text: '3.Pedido completado',
					href: '/productos',
					disabled: true,
				},
			];
			return items;
		},
	},
	components: { BtnGoBack },
};
</script>

<style lang="scss" scoped></style>
