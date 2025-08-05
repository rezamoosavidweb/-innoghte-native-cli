import { createDrawerNavigator } from '@react-navigation/drawer';

import { Example, Home } from '@/screens';

import { Drawers } from './paths';
import { RootDrawerParamList } from './types';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName={Drawers.Contact}>
      <Drawer.Screen component={Example} name={Drawers.Contact} />
      <Drawer.Screen component={Home} name={Drawers.Example} />
    </Drawer.Navigator>
  );
}
