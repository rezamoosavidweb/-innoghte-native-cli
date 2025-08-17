import { useNavigation } from '@react-navigation/native';
import { ReactNode } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { Drawers, Paths } from '@/navigation/routes';
import { RootScreenProps } from '@/navigation/types';
import { translate } from '@/translations/utils';

import { Text, View } from '@/components/base';
import {
  CalenderIcon,
  ChevronIcon,
  DegreeHatIcon,
  GlobalUserIcon,
  HeartIcon,
  MusicIcon,
} from '@/components/icons';

import { SPACING } from '@/lib/theme-config';

type MenuItemProps = {
  readonly icon: ReactNode;
  readonly onPress: () => void;
  readonly title: string;
};

type NavigationType = RootScreenProps<Paths.Drawer>['navigation'];

export default function MyCourses() {
  const navigation = useNavigation<NavigationType>();
  return (
    <ScrollView>
      <View style={styles.container}>
        <MenuItem
          icon={<DegreeHatIcon />}
          onPress={() => {
            navigation.navigate(Paths.Drawer, { screen: Drawers.MyCourses });
          }}
          title={translate('courses')}
        />
        <MenuItem
          icon={<MusicIcon />}
          onPress={() => {
            navigation.navigate(Paths.Drawer, { screen: Drawers.MyAlbums });
          }}
          title={translate('albums')}
        />
        <MenuItem
          icon={<GlobalUserIcon />}
          onPress={() => {
            navigation.navigate(Paths.Drawer, { screen: Drawers.MyLiveMeeting });
          }}
          title={translate('live_meeting')}
        />
        <MenuItem
          icon={<HeartIcon />}
          onPress={() => {
            navigation.navigate(Paths.Drawer, {
              screen: Drawers.SupportService,
            });
          }}
          title={translate('support_services')}
        />
        <MenuItem
          icon={<CalenderIcon />}
          onPress={() => {
            navigation.navigate(Paths.Drawer, { screen: Drawers.MyEvents });
          }}
          title={translate('events')}
        />
      </View>
    </ScrollView>
  );
}
function MenuItem({ icon, onPress, title }: MenuItemProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.menuItem}>
      <View style={styles.row}>
        <View style={styles.rowWithGap}>
          {icon}
          <Text>{title}</Text>
        </View>
        <ChevronIcon />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: SPACING.md,
    paddingHorizontal: SPACING.xl,
  },
  menuItem: {
    paddingVertical: SPACING.md,
    width: '100%',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  rowWithGap: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: SPACING.sm,
  },
});
