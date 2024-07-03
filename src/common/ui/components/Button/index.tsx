import type {FC} from 'react';
import {memo} from 'react';
import React from 'react';
import {Container, Pressable, Title} from './styles';
import type {Props} from './types';

const Button: FC<Props> = ({onPress, style, title}) => (
  <Container style={style}>
    <Pressable enabled={!!onPress} onPress={onPress}>
      <Title>{title}</Title>
    </Pressable>
  </Container>
);

export default memo(Button);
