import type { RootDrawerParamList } from '@/navigation/types';

import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';

import { Drawers } from '@/navigation/routes';
import { translate, TxKeyPath } from '@/translations/utils';

import BackButton from '@/components/BackButton';
import { Example, Tabs } from '@/screens';
import Albums from '@/screens/tabs/my-courses/Albums';
import Courses from '@/screens/tabs/my-courses/Courses';
import Events from '@/screens/tabs/my-courses/Events';
import LiveMeeting from '@/screens/tabs/my-courses/LiveMeeting';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const genOptions = (title: TxKeyPath): DrawerNavigationOptions => ({
  headerLeft: () => <BackButton />,
  headerRight: () => null,
  headerTitleAlign: 'center',
  title: translate(title),
});

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName={Drawers.Tabs}>
      <Drawer.Screen component={Tabs} name={Drawers.Tabs} />
      <Drawer.Screen component={Example} name={Drawers.Example} />
      <Drawer.Screen
        component={Courses}
        name={Drawers.Courses}
        options={genOptions('courses')}
      />
      <Drawer.Screen
        component={Albums}
        name={Drawers.Albums}
        options={genOptions('albums')}
      />
      <Drawer.Screen
        component={LiveMeeting}
        name={Drawers.LiveMeeting}
        options={genOptions('live_meeting')}
      />
      <Drawer.Screen
        component={Events}
        name={Drawers.Events}
        options={genOptions('events')}
      />
    </Drawer.Navigator>
  );
}
