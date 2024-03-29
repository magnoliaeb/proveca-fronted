import colors from 'vuetify/es5/util/colors';
// import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	server: {
		port: 3025,
	},
	head: {
		titleTemplate: '%s | Proveeca',
		title: 'Proveeca',
		htmlAttrs: {
			lang: 'es',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content:
					'Ferretería en línea, encuentra una amplia variedad de soluciones para construcción, necesidades del hogar, herramientas, accesorios para baño y mucho más.',
			},
			{
				hid: 'keywords',
				name: 'keywords',
				content:
					'Herramientas, Materiales, construcción, Hogar, Aceros, ferretería',
			},
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'msapplication-TileColor', content: '#ffffff' },
			{ name: 'theme-color', content: '#ffffff' },

			// Facebook Meta Tags
			{
				hid: 'og:url',
				property: 'og:url',
				content: 'https://ferrepacifico.lava.mx/',
			},
			{ hid: 'og:type', property: 'og:type', content: 'website' },
			{
				hid: 'og:title',
				property: 'og:title',
				content: 'FERREPACIFICO: Herramientas y materiales de construcción',
			},
			{
				hid: 'og:description',
				property: 'og:description',
				content:
					'Ferretería en línea, encuentra una amplia variedad de soluciones para construcción, necesidades del hogar, herramientas, accesorios para baño y mucho más.',
			},
			{
				hid: 'og:image',
				property: 'og:image',
				content: './static/bg-principal.jpg',
			},

			// Twitter Meta Tags
			{ name: 'og:twitter:card', content: 'summary_large_image' },
			{
				hid: 'twitter:domain',
				property: 'twitter:domain',
				content: 'ferrepacifico.lava.mx',
			},
			{
				hid: 'twitter:url',
				property: 'twitter:url',
				content: 'https://ferrepacifico.lava.mx/',
			},
			{
				name: 'twitter:title',
				content: 'FERREPACIFICO: Herramientas y materiales de construcción',
			},
			{
				name: 'twitter:description',
				content:
					'Ferretería en línea, encuentra una amplia variedad de soluciones para construcción, necesidades del hogar, herramientas, accesorios para baño y mucho más.',
			},
			{ name: 'twitter:image', content: './static/bg-principal.jpg' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-touch-icon.png',
			},
			{ rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
			{ rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
			{ rel: 'manifest', href: '/site.webmanifest' },
			{
				rel: 'stylesheet',
				href: 'https://cdn.jsdelivr.net/npm/vue-ctk-date-time-picker@2.5.0/dist/vue-ctk-date-time-picker.css',
				type: "text/css"
			}
		],
		script: [
			{
				src: 'https://cdn.jsdelivr.net/npm/vue-ctk-date-time-picker@2.5.0/dist/vue-ctk-date-time-picker.umd.js'
			}
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@/assets/scss/main.scss',
		'vue-slick-carousel/dist/vue-slick-carousel.css',
		'animate.css/animate.min.css',
		'@mdi/font/css/materialdesignicons.css',
	],
	env: {
		VUE_APP_NAME: process.env.VUE_APP_NAME,
		VUE_APP_WEBURL: process.env.VUE_APP_WEBURL,
		VUE_APP_ENDPOINT: process.env.VUE_APP_ENDPOINT,
		VUE_APP_GOOGLE_KEY: process.env.VUE_APP_GOOGLE_KEY,
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '~/plugins/app' },
		{ src: '@plugins/slick-slide.js', mode: 'client' },
		{ src: '~/plugins/vee-validate' },
		{ src: '~/plugins/sweet-modal', mode: 'client' },
		{ src: '~/plugins/infinite-loading', ssr: false },
		{ src: '@plugins/axios.js' },
		// { src: '~/plugins/util' },
		// { src: "~/plugins/image-zoomer", ssr: false },
		{ src: '@/plugins/zoom-on-hover', ssr: false, mode: 'client' },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/vuetify
		'@nuxtjs/vuetify',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/style-resources',
		'@nuxtjs/axios',
		'@nuxtjs/auth-next',
		'vue-sweetalert2/nuxt',
		'cookie-universal-nuxt',
		'vue-social-sharing/nuxt',
	],
	styleResources: {
		scss: ['./assets/scss/*.scss'],
	},

	// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		treeShake: true,
		icons: {
			iconfont: 'mdi', // default - only for display purposes
		},
		breakpoint: {
			mobileBreakpoint: 'md',
			// thresholds: {
			//   xs: 425,
			//   sm: 768,
			//   md: 1024,
			//   lg: 1440,
			// },
			scrollBarWidth: 0,
		},
		theme: {
			dark: false,
			themes: {
				dark: {
					primary: '#2cafe5',
					accent: colors.grey.darken3,
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3,
				},
			},
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: ['vee-validate/dist/rules'],
		extend(config, ctx) {},
	},

	compilerOptions: {
		types: ['@nuxt/types', '@nuxtjs/axios'],
	},

	axios: {
		baseURL: process.env.VUE_APP_ENDPOINT,
		//baseURL: 'http://ferrepacifico.local/api'
	},

	publicRuntimeConfig: {
		//
	},
	privateRuntimeConfig: {
		//
	},

	auth: {
		strategies: {
		  	local: {
				token: {
			  		property: "token",
			  		global: true,
			  		name: "token",
			  		type: "",
				},
				user: {
			  		property: "",
			  		autoFetch: false,
				},
				endpoints: {
			  		login: { url: "/auth/login", method: "post" },
			  		logout: false, //{ url: '/api/auth/logout', method: 'post' },
			  		user: { url: "/auth/profile", method: "get" },
				},
		  	},
		}
	},

	router: {
	  	middleware: [
			//
		]
	}
};
