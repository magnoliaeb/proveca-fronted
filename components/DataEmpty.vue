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
	font-size: 18px;
	line-height: 26px;
	text-align: center;
	color: #000000;
	opacity: 0.38;
}

h1 {
	font-weight: 900;
	font-size: 20px;
	line-height: 33px;
	text-align: center;
	color: #000000;
}

@media screen and (min-width: $md) {
	h1 {
		font-size: 26px;
	}
	p {
		font-size: 20px;
	}
}
</style>
