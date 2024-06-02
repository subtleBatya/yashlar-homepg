// import i18next from "i18next";
// import { initReactI18next } from "react-i18next";


import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enJSON from './locales/en/translation.json'
import tkJSON from './locales/tk/translation.json'
import ruJSON from './locales/ru/translation.json'
    i18n.use(initReactI18next).init({
    resources: {
        en: { ...enJSON },
        tk: { ...tkJSON },
        ru: { ...ruJSON },
    },
    lng: "en",
    });

// i18next
//     .use(initReactI18next)
//     .init({
//         fallbackLng: 'tk',
//         resources: {
//             en: {
//                 translation: {
//                     learn: 'LEARN REACT'
//                 }
//             }
//         }
//     })

// import i18n from "i18next";
// import { useTranslation, initReactI18next } from "react-i18next";
// i18n.use(initReactI18next).init({
//     resources: {}, // Where we're gonna put translations' files
//     lng: "en",     // Set the initial language of the App
//     });

