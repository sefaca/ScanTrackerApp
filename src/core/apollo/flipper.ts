import type {
  ApolloClient,
  NormalizedCache,
  NormalizedCacheObject,
} from '@apollo/client';
import {storage} from '../../common/data/storage';
import {enableFlipperApolloDevtools} from 'react-native-flipper-apollo-devtools';
import {initializeMMKVFlipper} from 'react-native-mmkv-flipper-plugin';

export const setupFlipper = (
  client: ApolloClient<NormalizedCache | NormalizedCacheObject>,
) => {
  enableFlipperApolloDevtools(client as any);
  initializeMMKVFlipper({default: storage});
};
