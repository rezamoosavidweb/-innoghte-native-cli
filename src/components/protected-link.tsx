import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Pressable } from 'react-native';

import { useAuth } from '@/hooks';
import {
  RootDrawerParamList,
  RootStackParamList,
  RootTabsParamList,
} from '@/navigation/types';

type AppNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList>,
  CompositeNavigationProp<
    DrawerNavigationProp<RootDrawerParamList>,
    BottomTabNavigationProp<RootTabsParamList>
  >
>;

export default function ProtectedLink({
  children,
  targetRoute,
  ...rest
}: {
  readonly children: React.ReactNode;
  readonly targetRoute:
    | keyof RootDrawerParamList
    | keyof RootStackParamList
    | keyof RootTabsParamList;
}) {
  const { status } = useAuth();
  const navigation = useNavigation<AppNavigationProp>();

  return (
    <Pressable
      onPress={() => {
        if (status === 'signOut') {
          navigation.navigate(targetRoute as never);
        } else {
          navigation.navigate('/login' as never);
        }
      }}
      {...rest}
    >
      {children}
    </Pressable>
  );
}
