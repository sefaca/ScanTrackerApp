import styled from 'styled-components/native';
import Text from '../../components/Text';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.buttonBeige};
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.brown};
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin: 5px;
  justify-content: center;
  align-self: center;
`;

export const Pressable = styled(RectButton)`
  align-items: center;
  border-radius: 5px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-self: center;
`;

export const Title = styled(Text).attrs({
  variant: 'body17-semibold',
})`
  color: ${({theme}) => theme.colors.white};
`;
