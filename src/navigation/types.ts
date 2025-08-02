import type { Drawers, Paths } from '@/navigation/paths';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

export type CombinedProps<S extends keyof RootDrawerParamList> =
  CompositeScreenProps<
    DrawerScreenProps<RootDrawerParamList, S>,
    StackScreenProps<RootStackParamList>
  >;

export type RootDrawerParamList = {
  [Drawers.Contact]: undefined;
  [Drawers.Example]: undefined;
};

export type RootDrawerProps<
  S extends keyof RootDrawerParamList = keyof RootDrawerParamList,
> = DrawerScreenProps<RootDrawerParamList, S>;

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;

export type RootStackParamList = {
  [Paths.Home]: {
    params?: RootDrawerParamList[keyof RootDrawerParamList];
    screen?: keyof RootDrawerParamList;
  };
  [Paths.Startup]: undefined;
};
