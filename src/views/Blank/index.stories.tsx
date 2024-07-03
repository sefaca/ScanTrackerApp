import type {Props} from './types';
import {Blank} from '.';

export default {
  title: 'Screen: Blank',
  component: Blank,
  args: {} as Props,
};

export const ScreenMainBase = (props: any) => <Blank {...props} />;
