import eng_Latn from './i18n/eng_Latn.json'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'eng_Latn',
    messages: {
        eng_Latn: eng_Latn,
    },
}))
