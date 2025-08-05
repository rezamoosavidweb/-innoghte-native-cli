import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';

import { Tabs } from '@/navigation/routes';
import { RootTabsParamList } from '@/navigation/types';

import FAQsTab from './faqs';
import HomeTab from './home';
import MyCoursesTab from './my-courses';
import ProfileTab from './profile';

const Tab = createBottomTabNavigator<RootTabsParamList>();

export default function TabsNavigation() {
  const { t } = useTranslation();
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={HomeTab}
        name={Tabs.Home}
        options={{
          title: t('home'),
          // tabBarIcon: ({ color, focused }) => (
          //   <HomeIcon
          //     color={color}
          //     isFocused={focused}
          //     focusPathColor={theme.colors.background}
          //   />
          // ),
          tabBarButtonTestID: 'home-tab',
        }}
      />
      <Tab.Screen component={MyCoursesTab} name={Tabs.MyCourses} />
      <Tab.Screen component={FAQsTab} name={Tabs.FAQs} />
      <Tab.Screen component={ProfileTab} name={Tabs.Profile} />
    </Tab.Navigator>
  );
}
