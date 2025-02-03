export const languageCodes = {
    eng: [
        'en',
        'en-au',
        'en-bz',
        'en-ca',
        'en-ie',
        'en-jm',
        'en-nz',
        'en-za',
        'en-tt',
        'en-gb',
        'en-us'
    ],
    no: ['no', 'nb', 'nn']
}

export const detectLanguage = (lang: string) : 'en' | 'no' => {
    // lang can come through as en-GB depending on browser
    const loweredLang = lang.toLowerCase();
    if (languageCodes.eng.includes(loweredLang)) {
        return 'en'
    } else {
        return 'no'
    }
}