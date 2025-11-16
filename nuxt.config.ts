// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	imports: {
		autoImport: true,
	},
	routeRules: {
		'/about': { prerender: true },
	},
	ssr: false,
	runtimeConfig: {
		token: '',
		public: {
			apiurl: '',
		},
	},
	postcss: {
		plugins: {
			'postcss-nested': {},
		},
	},

	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
		{
			path: '~/widgets',
		},
	],
	icon: {
		customCollections: [
			{
				prefix: 'icons',
				dir: './app/assets/icons',
			},
		],
	},
	app: {
		head: {
			link: [
				{
					rel: 'stylesheet',
					href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
				},
			],
		},
	},
	modules: [
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/image',
		'@nuxt/scripts',
		'@nuxt/icon',
		'@nuxtjs/tailwindcss',
	],
})
