import type {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const rootStackScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const generalStackScreenOptions: NativeStackNavigationOptions = {
  ...rootStackScreenOptions,
  animation: 'slide_from_right',
};

export const modalStackScreenOptions: NativeStackNavigationOptions = {
  ...rootStackScreenOptions,
  presentation: 'modal',
  animation: 'slide_from_bottom',
};

export const transparentModal: NativeStackNavigationOptions = {
  ...rootStackScreenOptions,
  presentation: 'transparentModal',
  animation: 'fade',
};

export const tabStackScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
};
