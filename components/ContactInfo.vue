<template>
	<section class="py-12">
		<v-row class="justify-center">
			<v-col
				class="text-center"
				cols="6"
				sm="5"
				md="3"
				lg="3"
				v-for="(item, index) in items"
				:key="index"
			>
				<img
					class="mr-3 icon mb-1"
					:src="require(`../assets/imgs/iconos/${item.icon}.svg`)"
					:alt="item.name"
				/>

				<p class="text-break fs-base">{{ item.name }}</p>
				<!-- <v-btn v-else text>{{ item.name }}</v-btn> -->
			</v-col>
		</v-row>
	</section>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					name: '(502) 3173 2325',
					link: '(502) 3173 2325',
					icon: 'whats',
					email: false,
					phone: false,
					whatsapp: false,
					address: false,
				},
				// {
				// 	name: '(502) 3173 2325',
				// 	link: '(502) 3173 2325',
				// 	icon: 'tel',
				// 	email: false,
				// 	phone: false,
				// 	whatsapp: false,
				// 	address: false,
				// },
				// {
				// 	name: 'C. Donato Guerra #23 Guadalajara Jalisco, Mx.',
				// 	link: '',
				// 	icon: 'pin',
				// 	email: false,
				// 	phone: false,
				// 	whatsapp: false,
				// 	address: true,
				// },
				{
					name: 'info@proveeca.com',
					link: 'info@proveeca.com',
					icon: 'email',
					email: false,
					phone: false,
					whatsapp: false,
					address: false,
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
p {
	font-weight: 400;
	text-align: center;

	color: #000000;
}

img.icon {
	height: 35px;
	width: 35px;
}
</style>
