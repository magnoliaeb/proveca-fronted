<template>
	<div>
		<v-expansion-panels accordion flat>
			<v-expansion-panel>
				<v-expansion-panel-header class="px-0">
					<div class="d-flex align-center">
						<v-icon color="#7d7d7d" class="mr-3" size="30px"
							>mdi-map-marker-outline</v-icon
						>
						<div class="">
							<h3 class="mb-1">146 West 55th Street</h3>
							<p>Los Ángeles, CA 90037</p>
						</div>
					</div>
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</v-expansion-panel-content>
			</v-expansion-panel>
			<v-expansion-panel>
				<v-expansion-panel-header class="px-0">
					<div class="d-flex align-center">
						<v-icon color="#7d7d7d" class="mr-3" size="30px"
							>mdi-truck-fast-outline</v-icon
						>
						<div class="">
							<h3 class="mb-1">Instrucciones de entrega</h3>
							<p class="mb-0">
								<small>"Entregar a Stevem a fuera del erstaurante"</small>
							</p>
							<p>Déjalo en mi puerta si no estoy en casa</p>
						</div>
					</div>
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</v-expansion-panel-content>
			</v-expansion-panel>
			<v-expansion-panel>
				<v-expansion-panel-header class="px-0">
					<div class="d-flex align-center">
						<v-icon color="#7d7d7d" class="mr-3" size="30px"
							>mdi-clock-time-eight-outline</v-icon
						>
						<div class="">
							<h3 class="mb-1">Tiempo de entrega</h3>
							<p>Hoy, 18 de mayo, a las 9:20px - 10:30pm</p>
						</div>
					</div>
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</v-expansion-panel-content>
			</v-expansion-panel>
			<v-expansion-panel>
				<v-expansion-panel-header class="px-0">
					<div class="d-flex align-center">
						<v-icon color="#7d7d7d" class="mr-3" size="30px"
							>mdi-phone-in-talk-outline</v-icon
						>
						<div class="">
							<h3 class="mb-1">Número de móvil</h3>
							<p>+1 (323) 559-1948</p>
						</div>
					</div>
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.v-expansion-panel-header {
	border-bottom: 1px solid #f5f5f5;
	&:last-child {
		border-bottom: none;
	}
}

h3 {
	font-weight: 800;
	color: #1a1a1a;
	font-size: $fs-md;
}
p {
	font-weight: 400;
	font-size: $fs-base;
	color: #7d7d7d;
}
</style>
