import type {FC} from 'react';
import {memo} from 'react';
import React from 'react';
import {Container, Pressable} from './styles';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Icon} from 'react-native-elements';
import type {Props} from './types';

const BackButton: FC<Props> = ({onPress, style}) => (
  <Container style={style}>
    <Pressable enabled={!!onPress} onPress={onPress}>
      <Icon name="arrow-back-ios-new" color="black" size={20} />
    </Pressable>
  </Container>
);

export default memo(BackButton);
