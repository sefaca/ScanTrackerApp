import React from 'react';
import type {ComponentMeta, Story} from '@storybook/react-native';
import type {Variant} from './types';
import Text from '.';

export default {
  title: 'Text',
} as ComponentMeta<typeof Text>;

type Args = {
  variant: Variant;
};
const Template: Story<Args> = ({variant}) => (
  <Text variant={variant}>Lorem ipsum dolor</Text>
);

export const Headline1 = Template.bind({});
Headline1.args = {
  variant: 'headline1',
};

export const Headline2 = Template.bind({});
Headline2.args = {
  variant: 'headline2',
};

export const Headline3 = Template.bind({});
Headline3.args = {
  variant: 'headline3',
};

export const Headline3Bold = Template.bind({});
Headline3Bold.args = {
  variant: 'headline3-bold',
};

export const Body20 = Template.bind({});
Body20.args = {
  variant: 'body20',
};

export const Body20Bold = Template.bind({});
Body20Bold.args = {
  variant: 'body20-bold',
};

export const Body17 = Template.bind({});
Body17.args = {
  variant: 'body17',
};

export const Body17SemiBold = Template.bind({});
Body17SemiBold.args = {
  variant: 'body17-semibold',
};

export const LargeTitle = Template.bind({});
LargeTitle.args = {
  variant: 'large-title',
};

export const Caption13 = Template.bind({});
Caption13.args = {
  variant: 'caption13',
};

export const Caption11 = Template.bind({});
Caption11.args = {
  variant: 'caption11',
};

export const Tagline15Tag = Template.bind({});
Tagline15Tag.args = {
  variant: 'tagline15-tag',
};

export const Tagline13Tag = Template.bind({});
Tagline13Tag.args = {
  variant: 'tagline13-tag',
};

export const Tagline11Tag = Template.bind({});
Tagline11Tag.args = {
  variant: 'tagline11-tag',
};
