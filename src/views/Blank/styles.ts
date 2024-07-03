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
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
`;

export const TextRecognized = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  color: ${({theme}) => theme.colors.red};
  text-align: center;
`;

export const Camera = styled(RNCamera)`
  width: 100%;
  height: 30%;
`;

export const PreviewImage = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
  margin: 10px;
`;

export const PendingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
