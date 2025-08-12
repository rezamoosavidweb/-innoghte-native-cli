import { useQuery } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import { Text } from '@/components/base';

import { fetchLiveMeetingFake,LiveMeetingType } from '@/lib/@fake-db/live-meeting';
import { FONT_SIZES, SPACING } from '@/lib/theme-config';

import LiveMeetingCard from './Card';

export default function LiveMeetings() {
  const { data = [], isFetching } = useQuery({
    queryFn: fetchLiveMeetingFake,
    queryKey: ['live-meetings'],
  });

  const renderItem = useCallback(
    ({ item }: { readonly item: LiveMeetingType }) => <LiveMeetingCard item={item} />,
    [],
  );

  const keyExtractor = useCallback(
    (item: LiveMeetingType) => item.id.toString(),
    [],
  );

  const contentStyle = useMemo(
    () => ({ ...styles.container, paddingBottom: SPACING['2xl'] }),
    [],
  );

  if (isFetching) {
    return (
      <Text style={{ fontSize: FONT_SIZES.xxl }}>Loading live meetings ...</Text>
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
