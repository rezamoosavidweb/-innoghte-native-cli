import { useQuery } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import { Text } from '@/components/base';

import { AlbumType, fetchAlbumsFake } from '@/lib/@fake-db/albums';
import { FONT_SIZES, SPACING } from '@/lib/theme-config';

import AlbumCard from './Card';

export default function Albums() {
  const { data = [], isFetching } = useQuery({
    queryFn: fetchAlbumsFake,
    queryKey: ['albums'],
  });

  const renderItem = useCallback(
    ({ item }: { readonly item: AlbumType }) => <AlbumCard item={item} />,
    [],
  );

  const keyExtractor = useCallback((item: AlbumType) => item.id.toString(), []);

  const contentStyle = useMemo(
    () => ({ ...styles.container, paddingBottom: SPACING['2xl'] }),
    [],
  );

  if (isFetching) {
    return <Text style={{ fontSize: FONT_SIZES.xxl }}>Loading albums ...</Text>;
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
