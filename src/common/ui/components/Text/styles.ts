import {Text as BaseText} from 'react-native';
import styled, {css} from 'styled-components/native';
import type {FlattenSimpleInterpolation} from 'styled-components';
import type {FontDescriptor, Props, Variant} from './types';

const variantStyles: Record<Variant, FlattenSimpleInterpolation> = {
  headline1: css`
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.41px;
  `,
  headline2: css`
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.34px;
  `,
  'headline3-bold': css`
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 0.35px;
  `,
  headline3: css`
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 0.35px;
  `,
  'body20-bold': css`
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.38px;
  `,
  body20: css`
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.38px;
  `,
  'body17-semibold': css`
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.41px;
  `,
  body17: css`
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.41px;
  `,
  'body15-semibold': css`
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.24px;
  `,
  'large-title': css`
    font-size: 34px;
    line-height: 41px;
    letter-spacing: 0.41px;
  `,
  caption13: css`
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.08px;
  `,
  caption11: css`
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.07px;
  `,
  'tagline15-tag': css`
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.24px;
  `,
  'tagline13-tag': css`
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.08px;
  `,
  'tagline11-tag': css`
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.07px;
  `,
};

const fontFamilyByVariant: FontDescriptor[] = [
  {
    variants: [
      'headline1',
      'headline2',
      'headline3-bold',
      'body20-bold',
      'large-title',
    ],
    family: 'Roboto-Bold',
  },
  {
    variants: [
      'body17-semibold',
      'body15-semibold',
      'tagline15-tag',
      'tagline13-tag',
      'tagline11-tag',
    ],
    family: 'Roboto-Medium',
  },
  {
    variants: ['headline3', 'body20', 'body17', 'caption13', 'caption11'],
    family: 'Roboto-Regular',
  },
];

export const getTextStyle = (variant: Variant) => {
  const style = variantStyles[variant];
  const fontFamily =
    fontFamilyByVariant.find(it => it.variants.includes(variant))?.family ??
    'Roboto-Regular';

  return style
    ? css`
        ${style};
        font-family: ${fontFamily};
      `
    : css``;
};

export const Text = styled(BaseText)<Props>`
  color: ${({theme}) => theme.colors.black};
  ${({variant}) => getTextStyle(variant!)};
`;
