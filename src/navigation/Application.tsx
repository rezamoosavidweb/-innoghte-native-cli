import type { RootStackParamList } from '@/navigation/types';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useTheme } from '@/hooks';
import { Paths } from '@/navigation/routes';

import { Startup } from '@/screens';

import Drawer from './DrawerNavigation';

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
  const { theme: navigationTheme, variant } = useTheme();

  return (
    <SafeAreaProvider style={styles.content}>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
          <Stack.Screen component={Drawer} name={Paths.Drawer} />
          <Stack.Screen component={Startup} name={Paths.Startup} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
