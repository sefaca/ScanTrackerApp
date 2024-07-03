// import type {FC} from 'react';
// import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
// import type {CompositeScreenProps} from '@react-navigation/native';
// import type {NativeStackScreenProps} from '@react-navigation/native-stack';
// // import type {RootTabParamList} from './Tabs/types';

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends RootParamsList {}
//   }
// }

export type RootParamsList = {
  Filter: undefined;
  BlankMain: undefined;
  BlankAuth: undefined;
  Tabs: undefined;
  Blank: undefined;
};

// export type ScreensParamsList = RootParamsList & RootTabParamList;

// export type ScreenName = keyof ScreensParamsList;

// export type ScreenComponent<S extends ScreenName> = FC<
//   NativeStackScreenProps<ScreensParamsList, S>
// >;

// export type MainStackScreenProps<Screen extends keyof RootParamsList> =
//   NativeStackScreenProps<RootParamsList, Screen>;

// export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
//   CompositeScreenProps<
//     BottomTabScreenProps<RootTabParamList, Screen>,
//     NativeStackScreenProps<RootParamsList>
//   >;
