import styled from 'styled-components/native';
import Text from '../../components/Text';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.red};
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.tealGreen};
  width: 50%;
  height: 45px;
  border-radius: 16px;
  margin: 5px;
`;

export const Pressable = styled(RectButton)`
  align-items: center;
  border-radius: 16px;
  height: 40px;
  justify-content: center;
`;

export const Title = styled(Text).attrs({
  variant: 'body17-semibold',
})`
  color: ${({theme}) => theme.colors.white};
`;
