import type {Dictionary} from '../types';
import en_US from './en-US';

const availableLanguages = {en_US};

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

export type Language = keyof typeof availableLanguages;
export default languages;
