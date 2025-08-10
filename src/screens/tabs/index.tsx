import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from '@/hooks';
import { Tabs } from '@/navigation/routes';
import { RootTabsParamList } from '@/navigation/types';
import { translate } from '@/translations/utils';

import { CategoryIcon, FolderIcon, HomeIcon, ProfileIcon } from '@/components/icons';
import ProtectedLink from '@/components/protected-link';

import FAQsTab from './faqs';
import HomeTab from './home';
import MyCoursesTab from './my-courses';
import ProfileTab from './profile';

const Tab = createBottomTabNavigator<RootTabsParamList>();

export default function TabsNavigation() {
  const { navigationTheme } = useTheme();
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={HomeTab}
        name={Tabs.Home}
        options={{
          tabBarButtonTestID: 'home-tab',
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon
              color={color}
              focusPathColor={navigationTheme.colors.background}
              isFocused={focused}
            />
          ),
          title: translate('home'),
        }}
      />
      <Tab.Screen
        component={MyCoursesTab}
        name={Tabs.MyCourses}
        options={{
          tabBarButton: (props) => (
            <ProtectedLink targetRoute={Tabs.MyCourses} {...props} />
          ),
          tabBarButtonTestID: 'my-courses-tab',
          tabBarIcon: ({ color, focused }) => (
            <CategoryIcon color={color} focusable={focused} />
          ),
          title: translate('my_courses'),
        }}
      />
      <Tab.Screen
        component={FAQsTab}
        name={Tabs.FAQs}
        options={{
          tabBarButtonTestID: 'category-tab',
          tabBarIcon: ({ color, focused }) => (
            <FolderIcon
              color={color}
              focusPathColor={navigationTheme.colors.background}
              isFocused={focused}
            />
          ),
          title: translate('faqs'),
        }}
      />

      <Tab.Screen
        component={ProfileTab}
        name={Tabs.Profile}
        options={{
          tabBarButton: (props) => (
            <ProtectedLink
              targetRoute={Tabs.Profile}
              {...props}
            />
          ),
          tabBarButtonTestID: 'profile-tab',
          tabBarIcon: ({ color, focused }) => (
            <ProfileIcon color={color} focusable={focused} />
          ),
          title: translate('profile'),
        }}
      />
    </Tab.Navigator>
  );
}
