import type { RootDrawerParamList } from '@/navigation/types';

import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';

import { Drawers } from '@/navigation/routes';
import { translate, TxKeyPath } from '@/translations/utils';

import BackButton from '@/components/BackButton';
import CustomDrawerContent from '@/components/DrawerContent';
import { Example, Tabs } from '@/screens';
import Albums from '@/screens/albums';
import Courses from '@/screens/courses';
import MyAlbums from '@/screens/tabs/my-courses/albums';
import MyCourses from '@/screens/tabs/my-courses/courses';
import MyEvents from '@/screens/tabs/my-courses/events';
import MyLiveMeeting from '@/screens/tabs/my-courses/live-meeting';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const genOptions = (title: TxKeyPath): DrawerNavigationOptions => ({
  headerLeft: () => <BackButton />,
  headerRight: () => null,
  headerTitleAlign: 'center',
  title: translate(title),
});

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName={Drawers.Tabs}
    >
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
        component={MyCourses}
        name={Drawers.MyCourses}
        options={genOptions('courses')}
      />
      <Drawer.Screen
        component={MyAlbums}
        name={Drawers.MyAlbums}
        options={genOptions('albums')}
      />
      <Drawer.Screen
        component={MyLiveMeeting}
        name={Drawers.MyLiveMeeting}
        options={genOptions('live_meeting')}
      />
      <Drawer.Screen
        component={MyEvents}
        name={Drawers.MyEvents}
        options={genOptions('events')}
      />
    </Drawer.Navigator>
  );
}
