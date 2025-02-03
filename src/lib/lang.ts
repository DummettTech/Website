import { getI18n } from "react-i18next";

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

export const getTranslationMap = (i18n: ReturnType<typeof getI18n>, languagePacks: {en: {}, no: {}}) => {

    const engKeys = Object.keys(languagePacks.en);
    const noKeys = Object.keys(languagePacks.no);

    if (JSON.stringify(engKeys) !== JSON.stringify(noKeys) ) {
        throw new Error('Failed to translate, missing keys from translations');
    }

    i18n.addResources('en', 'en', languagePacks.en);
    i18n.addResources('no', 'no', languagePacks.no);

    return engKeys;
}