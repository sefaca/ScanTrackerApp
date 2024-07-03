import type {TextProps} from 'react-native';

export type Fonts = 'Roboto-Bold' | 'Roboto-Medium' | 'Roboto-Regular';

export type Variant =
  | 'headline1'
  | 'headline2'
  | 'headline3-bold'
  | 'headline3'
  | 'body20-bold'
  | 'body20'
  | 'body17-semibold'
  | 'body17'
  | 'body15-semibold'
  | 'large-title'
  | 'caption13'
  | 'caption11'
  | 'tagline15-tag'
  | 'tagline13-tag'
  | 'tagline11-tag';

export type Props = {
  family?: Fonts;
  variant?: Variant;
} & TextProps;

export type FontDescriptor = {
  variants: Variant[];
  family: Fonts;
};
