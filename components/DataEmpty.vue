<template>
	<div class="empty text-center d-flex justify-center align-center">
		<div class="">
			<img
				class="mb-6"
				width="90"
				height="90"
				src="../assets/imgs/iconos/box-empty.svg"
				alt="bg-not-product"
			/>
			<div class="empty-text">
				<div>
					<h1>Producto no encontrado</h1>
					<p>Intenta buscar tu producto con otra palabra clave</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.empty {
	height: 40vh;
}

p {
	font-weight: 400;
	font-size: $fs-md;
	text-align: center;
	color: #000000;
	opacity: 0.38;
}

h1 {
	font-weight: 900;
	font-size: $fs-xl;
	text-align: center;
	color: #000000;
}

@media screen and (min-width: $md) {
}
</style>
