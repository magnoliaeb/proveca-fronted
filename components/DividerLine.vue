<template>
	<div class="divider">
		<span class="top-line"></span>
		<span class="circle"></span>
		<span class="bottom-line"></span>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.divider {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
}
.top-line,
.bottom-line {
	flex-grow: 1;
	width: 100px;
	height: 1px;
	background-color: #bdbdbd;
}
.circle {
	width: 10px;
	height: 10px;
	border-radius: 50%;
	border: 2px solid #bdbdbd;
	margin: 0 10px;
}
</style>
