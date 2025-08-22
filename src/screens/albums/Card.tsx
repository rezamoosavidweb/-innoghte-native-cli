/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { memo } from 'react';
import { StyleSheet } from 'react-native';

import { translate } from '@/translations/utils';

import { Button, View } from '@/components/base';
import Card from '@/components/base/card/Card';
import CardRow from '@/components/base/card/CardRow';
import { MusicIcon, TimeCircleIcon } from '@/components/icons';

import { AlbumType } from '@/lib/@fake-db/albums';
import { purchasedCourses } from '@/lib/@fake-db/purchased';
import { SPACING } from '@/lib/theme-config';

import Image from './Image';

const AlbumCard = memo(({ item }: { readonly item: AlbumType }) => (
  <Card bgColor="#122320" borderColor="#122320" key={item?.id}>
    <Image imageUrl={item?.image_media[0]?.src} />
    <View style={styles.cardContent}>
      <CardRow
        icon={<MusicIcon width={20} />}
        title="music_count"
        titleProps={{ primary: false }}
        value={item?.chapters_count + ' ' + translate('number')}
      />
      <CardRow
        icon={<TimeCircleIcon />}
        title="duration"
        titleProps={{ primary: false }}
        value={item?.duration}
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
AlbumCard.displayName = 'AlbumCard';
export default AlbumCard;

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
