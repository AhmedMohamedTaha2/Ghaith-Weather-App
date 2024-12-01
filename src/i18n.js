import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // Loads translations from the backend
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Integrates with React
  .init({
    fallbackLng: 'en', // Default language
    debug: true, // Enable debug mode for development
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`, 
    },
  });

export default i18n;
