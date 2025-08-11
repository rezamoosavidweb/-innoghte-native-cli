// MyCourses.tsx
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ReactNode } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { translate } from '@/translations/utils';

import {
  ArrowRightIcon,
  CalenderIcon,
  DegreeHatIcon,
  GlobalUserIcon,
  HeartIcon,
  MusicIcon,
} from '@/components/icons';
import { Drawers, Paths } from '@/navigation/routes';
import { Drawer } from '@/screens';

type MenuItemProps = {
  readonly icon: ReactNode;
  readonly onPress: () => void;
  readonly title: string;
};
type MyCoursesNavProp = NativeStackNavigationProp<MyCoursesStackParamList>;
type MyCoursesStackParamList = {
  Albums: undefined;
  Courses: undefined;
  Events: undefined;
  LiveMeeting: undefined;
  SupportService: undefined;
};

export default function MyCourses() {
  const navigation = useNavigation<MyCoursesNavProp>();

  return (
    <ScrollView>
      <View style={styles.container}>
        <MenuItem
          icon={<DegreeHatIcon />}
          onPress={() => {
            navigation.navigate(Paths.Drawer, { screen: Drawers.Courses });
          }}
          title={translate('courses')}
        />
        <MenuItem
          icon={<MusicIcon />}
          onPress={() => {
            navigation.navigate('Albums');
          }}
          title={translate('albums')}
        />
        <MenuItem
          icon={<GlobalUserIcon />}
          onPress={() => {
            navigation.navigate('LiveMeeting');
          }}
          title={translate('live_meeting')}
        />
        <MenuItem
          icon={<HeartIcon />}
          onPress={() => {
            navigation.navigate('SupportService');
          }}
          title={translate('support_services')}
        />
        <MenuItem
          icon={<CalenderIcon />}
          onPress={() => {
            navigation.navigate('Events');
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
          <Text style={styles.title}>{title}</Text>
        </View>
        <ArrowRightIcon />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 12,
    marginTop: 40,
    paddingHorizontal: 24,
  },
  menuItem: {
    paddingVertical: 12,
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
    gap: 8,
  },
  title: {
    color: '#000',
    fontSize: 16,
  },
});
