<template>
	<v-footer color="#F9FAFB" dark class="pb-16 pt-10 py-md-16 px-0">
		<div class="content">
			<v-row class="justify-center">
				<v-col
					class="mb-4 mb-lg-0 text-left mt-lg-n10"
					cols="12"
					sm="8"
					md="10"
					lg="3"
				>
					<nuxt-link to="/" class="d-flex justify-center justify-lg-start">
						<img
							class="logo"
							src="../assets/imgs/logo-proveca.svg"
							alt="logo-proveca"
						/>
					</nuxt-link>
					<p class="mt-4 text-center text-md-left">
						Bienvenidos a tu tienda de abarrotes de confianza, donde encontrarás todo lo que necesitas para tu hogar. En nuestro establecimiento encontrarás una amplia variedad de productos de alta calidad.
					</p>
				</v-col>
				<v-col class="mb-4 mb-md-0 text-left" cols="12" sm="8" md="4" lg="3">
					<h3 class="mb-10 text-center text-md-left">Contáctanos</h3>
					<ul>
						<li v-for="(item, index) in items" class="mb-3" :key="index">
							<!-- <pre>{{ item }}</pre> -->
							<div
								class="d-flex align-start justify-center justify-md-start"
								v-if="item.address"
							>
								<img
									class="mr-3 icon"
									:src="require(`../assets/imgs/iconos/${item.icon}.svg`)"
									:alt="item.name"
								/>

								<p class="text-break">{{ item.name }}</p>
							</div>
							<div
								v-if="item.email"
								class="d-flex align-start justify-center justify-md-start"
							>
								<img
									class="mr-3 icon"
									:src="require(`../assets/imgs/iconos/${item.icon}.svg`)"
									:alt="item.name"
								/>
								<a :href="`mailto:${item.name}`">{{ item.name }}</a>
							</div>
							<div
								v-if="item.phone"
								class="d-flex align-start justify-center justify-md-start"
							>
								<img
									class="mr-3 icon"
									:src="require(`../assets/imgs/iconos/${item.icon}.svg`)"
									:alt="item.name"
								/>
								<a :href="`tel:+:${item.name}`">{{ item.name }}</a>
							</div>
						</li>
					</ul>
				</v-col>

				<v-col class="mb-4 mb-md-0 text-center" cols="12" sm="8" md="4" lg="2">
					<h3 class="mb-10 text-center">Menú</h3>
					<ul>
						<li v-for="(item, index) in links" class="mb-6" :key="index">
							<v-btn link :to="item.to" text>{{ item.name }}</v-btn>
						</li>
					</ul>
				</v-col>

				<v-col class="mb-4 mb-md-0" cols="12" sm="8" md="4" lg="4">
					<address>
						<h3 class="mb-10 text-center text-md-left">
							Suscríbete a nuestro newsletter
						</h3>
						<SuscribeFrom />
					</address>
				</v-col>
			</v-row>
		</div>
		<div class="bottom">
			<div class="content">
				<v-row class="justify-center">
					<v-col cols="12" md="12">
						<small
							><nuxt-link to="/aviso-de-privacidad"
								>Aviso de privacidad</nuxt-link
							>
							<span class="px-2">|</span>
							<nuxt-link to="/terminos-y-condiciones"
								>Términos y condiciones</nuxt-link
							></small
						>
					</v-col>
				</v-row>
			</div>
		</div>
	</v-footer>
</template>

<script>
import SuscribeFrom from './SuscribeFrom.vue';
export default {
	components: { SuscribeFrom },
	data() {
		return {
			items: [
				// {
				// 	name: 'Av. Juan Palomar y Arias #2381, Colonia Monrraz Zapopan Jalisco México',
				// 	icon: 'pin',
				// 	email: false,
				// 	phone: false,
				// 	address: true,
				// },
				{
					name: '502 3173 2325',
					icon: 'tel',
					email: false,
					phone: true,
					address: false,
				},
				{
					name: 'info@proveeca.com',
					icon: 'email',
					email: true,
					phone: false,
					address: false,
				},
			],

			links: [
				{ name: 'Categorías', to: '/productos' },
				// { name: 'Nosotros', to: '/nosotros' },
				{ name: 'Contacto', to: '/contacto' },
			],
		};
	},
};
</script>

<style lang="scss" scoped>
* {
	// border: 1px solid orange;
}

.v-footer {
	border-top: 2px solid #2cafe5 !important;
}

img.logo {
	height: 102px;
	width: 187px;
}
img.icon {
	height: 20px;
	width: 20px;
}
h3 {
	font-weight: 700;
	font-size: $fs-md;
	letter-spacing: 0.125em;
	text-transform: uppercase;
	color: #196382;
	font-style: normal;
}

p,
a,
span {
	font-weight: 400 !important;
	font-size: $fs-sm !important;
	text-transform: initial !important;
	color: #434343 !important;
}

.bottom {
	background: #2cafe5;
	font-size: $fs-sm;
	width: 100%;
	text-align: center;
	position: absolute;
	bottom: 0;
	a {
		font-weight: 400 !important;
		font-size: $fs-sm !important;
		color: #ffffff !important;
		&:hover {
			text-decoration: underline;
		}
	}
	span {
		color: #ffffff !important;
	}
}

@media screen and (min-width: $md) {
}
</style>
