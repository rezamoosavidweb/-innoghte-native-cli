import { useQuery } from '@tanstack/react-query';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { translate } from '@/translations/utils';

import { Button, Text, View } from '@/components/base';
import { CoinsIcon, TicketIcon } from '@/components/icons';
import Card from '@/components/product-card';
import CardRow from '@/components/product-card/CardRow';
import ProductType from '@/components/ProductType';

import { fetchAlbumsFake } from '@/lib/@fake-db/albums';
import { purchasedCourses } from '@/lib/@fake-db/purchased';
import { FONT_SIZES, SPACING } from '@/lib/theme-config';
import { convertPrice } from '@/utils/numbers';

const CONVERT_NUMBER_VALUE = 10;
export default function Albums() {
  const { data, isFetching } = useQuery({
    queryFn: async () => {
      const res = await fetchAlbumsFake();
      return res;
    },
    queryKey: ['albums'],
  });
  if (isFetching)
    return <Text style={{ fontSize: FONT_SIZES.xxl }}>Loading albums ...</Text>;

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          {data?.map((el) => (
            <Card
              imageUrl={el?.image_media[0]?.src}
              key={el?.id}
              title={el?.title_fa}
            >
              <View style={styles.cardContent}>
                <CardRow
                  icon={<TicketIcon />}
                  title="product_type"
                  value={<ProductType isPackage={!!el?.package} />}
                />
                <CardRow
                  icon={<CoinsIcon />}
                  title="price"
                  value={convertPrice(el?.price ?? 0 / CONVERT_NUMBER_VALUE)}
                />
              </View>
              <View style={styles.buttonRow}>
                {purchasedCourses?.includes(el?.id) ? (
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
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

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
  container: {
    gap: SPACING.md,
    paddingHorizontal: SPACING['2xl'],
    paddingVertical: SPACING['2xl'],
  },
});
