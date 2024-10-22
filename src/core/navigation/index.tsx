import type {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraScreen, {Blank} from '../../views/Blank';
import {generalStackScreenOptions, rootStackScreenOptions} from './constants';
// import {Tabs} from './Tabs';
import type {RootParamsList} from './types';
import DataScreen from '../../views/DataScreen';

const {Navigator, Group, Screen} = createNativeStackNavigator<RootParamsList>();

const AppNavigator: FC = () => (
  <Navigator screenOptions={rootStackScreenOptions}>
    <Group screenOptions={generalStackScreenOptions}>
      {/* <Screen name="Tabs" component={Tabs} /> */}
      <Screen name="CameraScreen" component={CameraScreen} />
      <Screen name="DataScreen" component={DataScreen} />
    </Group>
  </Navigator>
);

export default AppNavigator;
