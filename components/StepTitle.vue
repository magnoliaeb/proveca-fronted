<template>
	<v-row class="">
		<v-col cols="12" class="">
			<h2>
				<span class="mr-3">{{ number }}.</span> {{ title }}
			</h2>
		</v-col>
		<v-col cols="12" v-if="hasDivider" class="pb-0">
			<v-divider style="background-color: #aeaeae"></v-divider>
		</v-col>
	</v-row>
</template>

<script>
export default {
	props: {
		number: {
			type: Number,
		},
		title: {
			type: String,
		},
		hasDivider: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="scss" scoped>
h2 {
	font-style: normal;
	font-weight: 900;
	font-size: 23px;
	line-height: 30px;
	/* identical to box height */
	text-align: left;

	color: #000;

	span {
		color: #2cafe5;
	}
}
</style>
