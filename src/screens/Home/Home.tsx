import type { RootDrawerParamList } from '@/navigation/types';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { Drawers } from '@/navigation/paths';

import { Contact, Example } from '@/screens';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function Home() {
  return (
    <Drawer.Navigator
      initialRouteName={Drawers.Example}
      
    >
      <Drawer.Screen component={Example} name={Drawers.Example} />
      <Drawer.Screen component={Contact} name={Drawers.Contact} />
    </Drawer.Navigator>
  );
}
