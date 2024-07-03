import type {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Blank} from '../../views/Blank';
import {generalStackScreenOptions, rootStackScreenOptions} from './constants';
// import {Tabs} from './Tabs';
import type {RootParamsList} from './types';

const {Navigator, Group, Screen} = createNativeStackNavigator<RootParamsList>();

const AppNavigator: FC = () => (
  <Navigator screenOptions={rootStackScreenOptions}>
    <Group screenOptions={generalStackScreenOptions}>
      {/* <Screen name="Tabs" component={Tabs} /> */}
      <Screen name="Blank" component={Blank} />
    </Group>
  </Navigator>
);

export default AppNavigator;
