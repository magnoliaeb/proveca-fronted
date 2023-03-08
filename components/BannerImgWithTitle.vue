<template>
	<v-card
		:height="$vuetify.breakpoint.mdAndUp ? 345 : 161"
		width="100%"
		color="grey lighten-2"
		flat
	>
		<v-img
			height="100%"
			width="100%"
			:src="require(`../assets/imgs/${path}/${bg}.jpg`)"
		>
			<v-container class="fill-height pb-md-10">
				<v-row class="fill-height justify-center align-end">
					<v-col cols="auto" md="auto">
						<h1 class="fs-6xl">{{ title }}</h1>
					</v-col>
				</v-row>
			</v-container>
		</v-img>
	</v-card>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'title',
		},
		path: {
			type: String,
			required: true,
		},
		bg: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
img {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
}
h1 {
	font-weight: 800;
	text-transform: uppercase;
	color: #ffffff;
}

@media screen and (min-width: $md) {
	.banner {
		height: 45vh;
	}
}
</style>
