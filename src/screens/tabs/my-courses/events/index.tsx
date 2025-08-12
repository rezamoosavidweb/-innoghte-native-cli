import { useQuery } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import { Text } from '@/components/base';

import { EventType, fetchEventsFake } from '@/lib/@fake-db/events';
import { FONT_SIZES, SPACING } from '@/lib/theme-config';

import EventsCard from './Card';

export default function Events() {
  const { data = [], isFetching } = useQuery({
    queryFn: fetchEventsFake,
    queryKey: ['events'],
  });

  const renderItem = useCallback(
    ({ item }: { readonly item: EventType }) => <EventsCard item={item} />,
    [],
  );

  const keyExtractor = useCallback(
    (item: EventType) => item.id.toString(),
    [],
  );

  const contentStyle = useMemo(
    () => ({ ...styles.container, paddingBottom: SPACING['2xl'] }),
    [],
  );

  if (isFetching) {
    return (
      <Text style={{ fontSize: FONT_SIZES.xxl }}>Loading events ...</Text>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={contentStyle}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: SPACING.md,
    paddingHorizontal: SPACING['2xl'],
    paddingTop: SPACING['2xl'],
  },
});
