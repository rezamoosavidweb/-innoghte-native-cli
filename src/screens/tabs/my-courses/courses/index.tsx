import { useQuery } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import { Text } from '@/components/base';

import { CourseType, fetchCoursesFake } from '@/lib/@fake-db/courses';
import { FONT_SIZES, SPACING } from '@/lib/theme-config';

import CourseCard from './Card';

export default function MyCourses() {
  const { data = [], isFetching } = useQuery({
    queryFn: fetchCoursesFake,
    queryKey: ['courses'],
  });

  const renderItem = useCallback(
    ({ item }: { readonly item: CourseType }) => <CourseCard item={item} />,
    [],
  );

  const keyExtractor = useCallback(
    (item: CourseType) => item.id.toString(),
    [],
  );

  const contentStyle = useMemo(
    () => ({ ...styles.container, paddingBottom: SPACING['2xl'] }),
    [],
  );

  if (isFetching) {
    return (
      <Text style={{ fontSize: FONT_SIZES.xxl }}>Loading courses ...</Text>
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
