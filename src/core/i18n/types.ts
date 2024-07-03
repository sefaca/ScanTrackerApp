import type dictionary from './languages/en-US';
import type {availableLanguages} from '.';

export type Dictionary = typeof dictionary;

type Join<T extends string[], D extends string> = T extends []
  ? never
  : T extends [infer F]
  ? F
  : T extends [infer F, ...infer R]
  ? F extends string
    ? `${F}${D}${Join<Extract<R, string[]>, D>}`
    : never
  : string;

type PathsToStringProps<T> = T extends string
  ? []
  : {
      [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>];
    }[Extract<keyof T, string>];

declare module 'i18next' {
  type DictionaryKey = Join<PathsToStringProps<typeof dictionary>, '.'>;
  type Language = keyof typeof availableLanguages;
}
