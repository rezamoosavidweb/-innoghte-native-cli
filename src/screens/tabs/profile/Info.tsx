import { Image, StyleSheet } from 'react-native';

import { Text, View } from '@/components/base';
import { CooperationIcon } from '@/components/icons';

import { BORDER_RADIUS, FONT_SIZES, SPACING } from '@/lib/theme-config';
export default function Info() {
  const user = {
    avatar: 'https://admin.innoghte.com/storage//app/public/users/default.jpg',
    email: 'rezamoosavi.kntu@gmail.com',
    full_name: 'سیدرضا موسوی',
    verified: 1,
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <View style={styles.nameRow}>
          <Text>{`Hello ${user.full_name} dear`}</Text>
          <CooperationIcon />
        </View>
        <View style={styles.emailRow}>
          <Text>{user.email}</Text>
          <Text style={styles.verified}>
            {user.verified ? 'Verified' : 'Unverified'}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: SPACING['7xl'],
    height: 64,
    width: 64,
  },
  container: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING['5xl'],
  },
  emailRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: SPACING.xs,
  },
  info: {
    flex: 1,
    marginLeft: SPACING.md,
  },
  nameRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  verified: {
    backgroundColor: 'green',
    borderRadius: BORDER_RADIUS.sm,
    color: '#fff',
    fontSize: FONT_SIZES.sm,
    marginLeft: SPACING.sm,
    paddingHorizontal: SPACING.md / 2,
    paddingVertical: SPACING.xs / 2,
  },
});
