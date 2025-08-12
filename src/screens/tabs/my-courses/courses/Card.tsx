import { memo } from 'react';
import { StyleSheet } from 'react-native';

import { translate } from '@/translations/utils';

import { Button, View } from '@/components/base';
import { CoinsIcon, StarIcon, TicketIcon } from '@/components/icons';
import Card from '@/components/product-card';
import CardRow from '@/components/product-card/CardRow';
import ProductType from '@/components/ProductType';

import { CourseType } from '@/lib/@fake-db/courses';
import { purchasedCourses } from '@/lib/@fake-db/purchased';
import { SPACING } from '@/lib/theme-config';
import { convertNumber, convertPrice } from '@/utils/numbers';

const CONVERT_NUMBER_VALUE = 10;

const CourseCard = memo(({ item }: { readonly item: CourseType }) => (
  <Card imageUrl={item?.image_media?.[0]?.src} title={item?.title_fa}>
    <View style={styles.cardContent}>
      <CardRow
        icon={<TicketIcon />}
        title="product_type"
        value={<ProductType isPackage={!!item?.package} />}
      />
      <CardRow
        icon={<StarIcon />}
        title="chapters_count"
        value={convertNumber(item?.count_chapters ?? 0)}
      />
      <CardRow
        icon={<CoinsIcon />}
        title="price"
        value={convertPrice((item?.price ?? 0) / CONVERT_NUMBER_VALUE)}
      />
    </View>

    <View style={styles.buttonRow}>
      {purchasedCourses?.includes(item?.id) ? (
        <Button fullWidth label={translate('show')} />
      ) : (
        <>
          <Button
            flex={1}
            label={translate('more_information')}
            variant="outlined"
          />
          <Button color="success" flex={1} label={translate('buy')} />
        </>
      )}
    </View>
  </Card>
));
CourseCard.displayName = 'CourseCard';
export default CourseCard;

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    gap: SPACING.md,
    marginTop: SPACING.md,
  },
  cardContent: {
    gap: SPACING.md,
    paddingTop: SPACING.md,
    width: '100%',
  },
});
