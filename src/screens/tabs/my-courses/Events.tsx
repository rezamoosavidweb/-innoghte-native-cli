import { useQuery } from '@tanstack/react-query';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { translate, TxKeyPath } from '@/translations/utils';

import { Button, Text, View } from '@/components/base';
import { AvatarIcon, CoinsIcon, TicketIcon } from '@/components/icons';
import Card from '@/components/product-card';
import CardRow from '@/components/product-card/CardRow';

import { fetchEventsFake } from '@/lib/@fake-db/events';
import { FONT_SIZES, SPACING } from '@/lib/theme-config';
import { convertNumber, convertPrice } from '@/utils/numbers';

const CONVERT_NUMBER_VALUE = 10;

const generateButtons = (state: string, type: string) => {
  if (state !== 'upcoming')
    return <Button fullWidth label={translate('more_information')} />;
  if (state === 'upcoming') {
    if (type === 'retreat')
      return (
        <Button
          color="success"
          fullWidth
          label={translate('more_information_register')}
        />
      );
    if (type === 'workshop')
      return (
        <>
          <Button
            flex={1}
            label={translate('more_information')}
            variant="outlined"
          />
          <Button color="success" flex={1} label={translate('buy')} />
        </>
      );
  }
};

export default function Events() {
  const { data, isFetching } = useQuery({
    queryFn: async () => {
      const res = await fetchEventsFake();
      return res;
    },
    queryKey: ['courses'],
  });
  if (isFetching)
    return (
      <Text style={{ fontSize: FONT_SIZES.xxl }}>Loading courses ...</Text>
    );

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
                  title="remaining_capacity"
                  value={convertNumber(el?.remain_capacity)}
                />
                <CardRow
                  icon={<AvatarIcon />}
                  title="status"
                  value={translate((el?.state + 'Event') as TxKeyPath)}
                />
                <CardRow
                  icon={<CoinsIcon />}
                  title="price"
                  value={convertPrice(el?.price ?? 0 / CONVERT_NUMBER_VALUE)}
                />
              </View>
              <View style={styles.buttonRow}>
                {generateButtons(el?.state, el?.event_detail?.type)}
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
