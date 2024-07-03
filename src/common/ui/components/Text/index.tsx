import type {FC} from 'react';
import {memo, forwardRef} from 'react';
import type {Text as NativeText} from 'react-native';
import {Text as BaseText} from './styles';
import type {Props} from './types';

const Text: FC<Props> = forwardRef<NativeText, Props>(
  ({family = undefined, style, variant = 'body20', ...rest}, ref) => (
    <BaseText
      testID="text"
      style={[family ? {fontFamily: family} : {}, style]}
      variant={variant}
      ref={ref}
      {...rest}
    />
  ),
);

export default memo(Text);
