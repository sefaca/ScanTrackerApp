import {colors} from './colors';
import {device} from './device';

const theme = {
  colors,
  device,
};

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default theme as Theme;
