import type {FC} from 'react';
import React, {memo} from 'react';
import {StatusBar as BaseStatusBar} from './styles';
import type {Props} from './types';

const StatusBar: FC<Props> = ({light = false, ...props}) => (
  <BaseStatusBar
    barStyle={light ? 'light-content' : 'dark-content'}
    translucent
    {...props}
  />
);

export default memo(StatusBar);
