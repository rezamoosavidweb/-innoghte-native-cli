import { createDrawerNavigator } from '@react-navigation/drawer';

import { Example, Home } from '@/screens';

import { Paths } from './paths';
import { DrawerParamList } from './types';

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName={Paths.Home}>
      <Drawer.Screen component={Example} name={Paths.Example} />
      <Drawer.Screen component={Home} name={Paths.Home} />
    </Drawer.Navigator>
  );
}
