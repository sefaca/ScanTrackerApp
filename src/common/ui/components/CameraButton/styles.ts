import styled from 'styled-components/native';
import Text from '../../components/Text';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.gray};
  width: 55px;
  height: 55px;
  border-radius: 55px;
  margin: 5px;
`;

export const OuterCircle = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  border-width: 4px;
  border-color: ${({theme}) => theme.colors.white};
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

export const Pressable = styled(RectButton)`
  align-items: center;
  border-radius: 55px;
  width: 55px;
  height: 55px;
  justify-content: center;
  align-self: center;
`;

export const Title = styled(Text).attrs({
  variant: 'body17-semibold',
})`
  color: ${({theme}) => theme.colors.white};
`;
