import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Fragment } from 'react';
import { StyleSheet } from 'react-native';

import { useTheme } from '@/hooks';
import { Paths } from '@/navigation/routes';
import { RootScreenProps } from '@/navigation/types';
import { translate, TxKeyPath } from '@/translations/utils';

import { menus } from '@/lib/drawer';

import Divider from './Divider';

type NavigationType = RootScreenProps<Paths.Drawer>['navigation'];

export default function CustomDrawerContent(
  props: DrawerContentComponentProps,
) {
  const route = useRoute();
  const navigation = useNavigation<NavigationType>();
  const { theme } = useTheme();

  const pathname = route.name;

  return (
    <DrawerContentScrollView {...props}>
      {menus?.map((el) => (
        <Fragment key={el?.id}>
          <Divider label={el?.label as TxKeyPath} />
          {el?.children?.map((item) => {
            const Icon = item?.icon;
            const isActive = pathname === (item?.screen as string);

            return (
              <DrawerItem
                icon={({ size }) => (
                  <Icon color={theme.colors.text} width={size} />
                )}
                key={item?.id}
                label={translate(item?.label)}
                labelStyle={[
                  {
                    color: isActive ? 'white' : theme.colors.text,
                    fontSize: 18,
                  },
                ]}
                onPress={() => {
                  navigation.navigate(Paths.Drawer, {
                    screen: item?.screen,
                  });
                }}
                style={[
                  styles.drawerItem,
                  {
                    backgroundColor: isActive
                      ? theme.colors.primary
                      : 'transparent',
                  },
                ]}
              />
            );
          })}
        </Fragment>
      ))}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  dividerBorder: {
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    marginVertical: 8,
  },
  drawerItem: {
    borderRadius: 8,
  },
});
