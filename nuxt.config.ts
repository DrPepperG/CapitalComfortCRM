// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/eslint',
        '@nuxt/ui',
        '@nuxt/a11y',
        '@nuxt/image'
    ],

    devtools: {
        enabled: true
    },

    css: ['~/assets/css/main.css'],

    routeRules: {
        '/': { prerender: true }
    },

    compatibilityDate: '2026-06-30',

    nitro: {
        runtimeConfig: {
            app: {
                key: '',
                url: ''
            },

            debug: false,

            db: {
                name: '',
                user: '',
                pass: '',
                host: '',
                ssl: false,
                port: 5432
            },

            redis: {
                host: '',
                port: 6379
            },

            storage: {
                cache: {
                    driver: 'redis'
                }
            }
        }
    },

    eslint: {
        config: {
            stylistic: {
                commaDangle: 'never',
                braceStyle: '1tbs'
            }
        }
    }
});
