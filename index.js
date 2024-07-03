/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Root} from './src/core/App';

AppRegistry.registerComponent(appName, () => Root);
