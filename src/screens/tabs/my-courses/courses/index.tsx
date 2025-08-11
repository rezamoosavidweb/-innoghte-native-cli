import { useQuery } from '@tanstack/react-query';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { translate } from '@/translations/utils';

import { Button } from '@/components/base';
import { CoinsIcon, StarIcon, TicketIcon } from '@/components/icons';
import Card from '@/components/product-card/Card';
import CardRow from '@/components/product-card/CardRow';
import ProductType from '@/components/ProductType';

import { fetchCoursesFake } from '@/lib/@fake-db/courses';
import { purchasedCourses } from '@/lib/@fake-db/purchased';
import { convertNumber, convertPrice } from '@/utils/numbers';

const CONVERT_NUMBER_VALUE = 10;
export default function Courses() {
  const { data, isFetching } = useQuery({
    queryFn: async () => {
      const res = await fetchCoursesFake();
      return res;
    },
    queryKey: ['courses'],
  });
  if (isFetching) return <Text>Loading courses ...</Text>;

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
                  icon={<StarIcon />}
                  title="chapters_count"
                  value={convertNumber(el?.count_chapters ?? 0)}
                />
                <CardRow
                  icon={<CoinsIcon />}
                  title="price"
                  value={convertPrice(el?.price ?? 0 / CONVERT_NUMBER_VALUE)}
                />
              </View>
              <View style={styles.buttonRow}>
                {purchasedCourses?.includes(el?.id) ? (
                  <Button label={translate('show')} />
                ) : (
                  <>
                    <Button label={translate('more_information')} />
                    <Button label={translate('buy')} />
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
    gap: 12,
    marginTop: 20,
  },
  cardContent: {
    gap: 12,
    paddingTop: 12,
    width: '100%',
  },
  container: {
    gap: 10,
    paddingHorizontal: 24,
  },
  flex1: {
    flex: 1,
  },
});
