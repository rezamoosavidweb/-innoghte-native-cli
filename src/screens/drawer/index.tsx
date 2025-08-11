import type { RootDrawerParamList } from '@/navigation/types';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { Drawers } from '@/navigation/routes';

import { Example, Tabs } from '@/screens';

import Courses from '../tabs/my-courses/courses';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName={Drawers.Tabs}>
      <Drawer.Screen component={Tabs} name={Drawers.Tabs} />
      <Drawer.Screen component={Example} name={Drawers.Example} />
      <Drawer.Screen component={Courses} name={Drawers.Courses} />
    </Drawer.Navigator>
  );
}
