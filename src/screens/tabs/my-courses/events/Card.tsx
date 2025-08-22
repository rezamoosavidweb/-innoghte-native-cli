import { memo } from 'react';
import { StyleSheet } from 'react-native';

import { translate, TxKeyPath } from '@/translations/utils';

import { Button, View } from '@/components/base';
import CardRow from '@/components/base/card/CardRow';
import { AvatarIcon, CoinsIcon, TicketIcon } from '@/components/icons';
import Card from '@/components/my-product-card';

import { EventType } from '@/lib/@fake-db/events';
import { SPACING } from '@/lib/theme-config';
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

const EventCard = memo(({ item }: { readonly item: EventType }) => (
  <Card
    imageUrl={item?.image_media[0]?.src}
    key={item?.id}
    title={item?.title_fa}
  >
    <View style={styles.cardContent}>
      <CardRow
        icon={<TicketIcon />}
        title="remaining_capacity"
        value={convertNumber(item?.remain_capacity)}
      />
      <CardRow
        icon={<AvatarIcon />}
        title="status"
        value={translate((item?.state + 'Event') as TxKeyPath)}
      />
      <CardRow
        icon={<CoinsIcon />}
        title="price"
        value={convertPrice(item?.price ?? 0 / CONVERT_NUMBER_VALUE)}
      />
    </View>
    <View style={styles.buttonRow}>
      {generateButtons(item?.state, item?.event_detail?.type)}
    </View>
  </Card>
));
EventCard.displayName = 'EventCard';
export default EventCard;

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
