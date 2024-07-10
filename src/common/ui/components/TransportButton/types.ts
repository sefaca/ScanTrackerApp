import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
