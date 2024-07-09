import styled from 'styled-components/native';
import Text from '../../common/ui/components/Text';
import {RNCamera} from 'react-native-camera';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.beige};
`;

export const TextContainer = styled.View`
  margin-top: 140px;
  flex: 1;
  background-color: ${({theme}) => theme.colors.mediumBeige};
`;

export const AppTitle = styled(Text).attrs({
  variant: 'headline2',
})`
  color: ${({theme}) => theme.colors.brown};
  margin-top: 60px;
  margin-bottom: 50px;
  text-align: center;
  font-weight: bold;
`;

export const TextRecognized = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.mediumBrown};
  align-self: center;
  margin: 20px;
  position: absolute;
`;

export const Camera = styled(RNCamera)`
  width: 100%;
  height: 30%;
  margin-top: 100px;
`;

export const PreviewImage = styled.Image`
  z-index: 0;
  width: 75px;
  height: 75px;
  align-self: left;
  margin-left: 50px;
  bottom: 85px;
  border-radius: 10px;
`;

export const PendingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonCameraContainer = styled.View`
  position: absolute;
  top: 320px;
  width: 100%;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  margin-top: 65px;
  position: absolute;
`;
