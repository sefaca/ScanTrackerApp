import styled from 'styled-components/native';
import Text from '../../common/ui/components/Text';
import {RNCamera} from 'react-native-camera';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.deepBlue};
`;

export const AppTitle = styled(Text).attrs({
  variant: 'headline2',
})`
  color: ${({theme}) => theme.colors.tealGreen};
  margin-top: 60px;
  margin-bottom: 40px;
  text-align: center;
  font-weight: bold;
`;

export const TextRecognized = styled.Text`
  top: 140px;
  font-size: 18px;
  color: ${({theme}) => theme.colors.red};
  text-align: center;
`;

export const Camera = styled(RNCamera)`
  width: 100%;
  height: 30%;
  margin-top: 100px;
`;

export const PreviewImage = styled.Image`
  width: 75px;
  height: 75px;
  align-self: left;
  margin-left: 50px;
  border-radius: 10px;
`;

export const PendingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  top: 320px;
  width: 100%;
  align-items: center;
`;
