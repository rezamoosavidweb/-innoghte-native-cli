import { memo } from 'react';
import { StyleSheet } from 'react-native';

import { translate } from '@/translations/utils';

import { Button, Text, View } from '@/components/base';
import Card from '@/components/base/card/Card';
import CardRow from '@/components/base/card/CardRow';
import Divider from '@/components/Divider';
import { CoinsIcon } from '@/components/icons';

import { CourseType } from '@/lib/@fake-db/courses';
import { purchasedCourses } from '@/lib/@fake-db/purchased';
import { SPACING } from '@/lib/theme-config';
import { convertPrice } from '@/utils/numbers';

import Image from './Image';

const CONVERT_NUMBER_VALUE = 10;

const CourseCard = memo(({ item }: { readonly item: CourseType }) => (
  <Card>
    <Image imageUrl={item?.image_media?.[0]?.src} />
    <View style={styles.cardContent}>
      <Text style={styles.title} weight="bold">
        {item?.title_fa}
      </Text>
      <Text>{item?.short_info}</Text>
    </View>
    <Divider />
    <View style={styles.cardDetail}>
      <CardRow
        icon={<CoinsIcon />}
        title="online_subscription"
        titleProps={{ primary: false }}
        value={convertPrice((item?.price ?? 0) / CONVERT_NUMBER_VALUE)}
      />
    </View>

    <View style={styles.buttonRow}>
      {purchasedCourses?.includes(item?.id) ? (
        <Button
          flex={1}
          label={translate('show') + ' ' + translate('course')}
        />
      ) : (
        <Button color="success" flex={1} label={translate('add_to_basket')} />
      )}
      <Button
        flex={1}
        label={translate('more_information')}
        variant="outlined"
      />
    </View>
  </Card>
));
CourseCard.displayName = 'CourseCard';
export default CourseCard;

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    gap: SPACING.md,
    marginTop: SPACING.base,
  },
  cardContent: {
    flexDirection: 'column',
    gap: SPACING.md,
    marginBottom: SPACING.base,
    paddingTop: SPACING.md,
  },
  cardDetail: {
    gap: SPACING.md,
    paddingTop: SPACING.md,
    width: '100%',
  },

  title: {
    textAlign: 'center',
  },
});
