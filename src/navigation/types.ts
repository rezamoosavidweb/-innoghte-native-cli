import type { Drawers, Paths, Tabs } from '@/navigation/routes';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

export type CombinedProps<S extends keyof RootDrawerParamList> =
  CompositeScreenProps<
    DrawerScreenProps<RootDrawerParamList, S>,
    StackScreenProps<RootStackParamList>
  >;

export type RootDrawerParamList = {
  [Drawers.Albums]: undefined;
  [Drawers.Courses]: undefined;
  [Drawers.Events]: undefined;
  [Drawers.Example]: undefined;
  [Drawers.LiveMeeting]: undefined;
  [Drawers.SupportService]: undefined;
  [Drawers.Tabs]: undefined;
};

export type RootDrawerProps<
  S extends keyof RootDrawerParamList = keyof RootDrawerParamList,
> = DrawerScreenProps<RootDrawerParamList, S>;

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;

export type RootStackParamList = {
  [Paths.Drawer]: {
    params?: RootDrawerParamList[keyof RootDrawerParamList];
    screen?: keyof RootDrawerParamList;
  };
  [Paths.Startup]: undefined;
};

export type RootTabScreenProps<
  T extends keyof RootTabsParamList = keyof RootTabsParamList,
> = BottomTabScreenProps<RootTabsParamList, T>;

export type RootTabsParamList = {
  [Tabs.FAQs]: undefined;
  [Tabs.Home]: undefined;
  [Tabs.MyCourses]: undefined;
  [Tabs.Profile]: undefined;
};
