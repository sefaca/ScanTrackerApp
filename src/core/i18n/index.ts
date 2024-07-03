import 'intl-pluralrules';
import type {Dictionary} from 'core/i18n/types';
import type {Language} from 'i18next';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en_US from './languages/en-US';

const defaultLanguage: Language = 'en_US';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en_US';
    resources: typeof languages;
  }
}

export const availableLanguages = {en_US};

const languages = Object.entries(availableLanguages).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [`${key}`]: {
      translation: value,
    },
  }),
  {} as {
    [id in Language]: Dictionary;
  },
);

i18n.use(initReactI18next).init({
  resources: languages,
  lng: defaultLanguage,
});
