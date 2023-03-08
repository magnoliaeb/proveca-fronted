<template>
	<div class="d-flex justify-center align-center">
		<h2
			class="text-break flex-column flex-sm-row d-flex align-center justify-center"
			style="position: relative"
		>
			<div class="circle left"></div>
			Productos <span class="d-block d-sm-inline">{{ title }}</span>
			<div class="circle right"></div>
		</h2>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'destacados',
		},
	},
};
</script>

<style lang="scss" scoped>
h2 {
	font-weight: 300;
	font-size: $fs-3xl;
	letter-spacing: 0.11em;
	text-transform: uppercase;
	text-align: center;
	color: #aeaeae !important;
	span {
		font-weight: 900;
		color: #000;
	}
}
.circle {
	position: absolute;
	width: 10px;
	height: 10px;
	background: #2cafe5;
	border-radius: 50%;
}
.circle.left {
	left: -10%;
	// bottom: 0;
}
.circle.right {
	right: -10%;
	// bottom: 0;
}
@media screen and (min-width: $md) {
	.circle {
		width: 13.85px;
		height: 13.85px;
	}
}
</style>
