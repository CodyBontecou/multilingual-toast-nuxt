export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', 'shadcn-nuxt'],
    i18n: {
        strategy: 'no_prefix',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'nuxt_i18n',
        },
        defaultLocale: 'eng_Latn',
        locales: [{ code: 'eng_Latn', title: 'English' }],
        vueI18n: './i18n.config.ts',
    },
})
