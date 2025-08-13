import { ScrollView, StyleSheet, View } from 'react-native';

import Divider from '@/components/Divider';
import {
  BellIcon,
  BookmarkIcon,
  CheckedFieldIcon,
  CreditCardIcon,
  Doc1Icon,
  DocIcon,
  LogoutIcon,
  OutlineQuestionIcon,
  ProfileIcon,
  SettingIcon,
} from '@/components/icons';

import { SPACING } from '@/lib/theme-config';

import Info from './Info';
import ProfileMenuItem from './ProfileMenuItem';

export default function Profile() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Info />
        <ProfileMenuItem
          icon={<CreditCardIcon />}
          label="transactions_history"
        />
        <ProfileMenuItem icon={<BookmarkIcon />} label="bookmarks" />

        <Divider containerStyle={{ marginTop: SPACING.base }} label="general" />
        <ProfileMenuItem icon={<ProfileIcon />} label="my_profile" />
        <ProfileMenuItem icon={<BellIcon />} label="notifications" />
        <ProfileMenuItem
          icon={<CheckedFieldIcon />}
          label="device_management"
        />
        <ProfileMenuItem icon={<SettingIcon />} label="password_setting" />

        <Divider containerStyle={{ marginTop: SPACING.base }} label="about" />
        <ProfileMenuItem icon={<DocIcon />} label="support_ticket" />
        <ProfileMenuItem icon={<OutlineQuestionIcon />} label="faqs" />
        <ProfileMenuItem icon={<Doc1Icon />} label="terms" />
        <ProfileMenuItem
          containerStyle={{ marginBottom: SPACING.lg }}
          icon={<LogoutIcon />}
          label="logout"
          textStyle={{ color: 'red' }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
