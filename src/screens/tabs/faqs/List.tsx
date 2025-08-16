import { useMemo } from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';

import { useFaqsStore } from '@/hooks/use-faq-store';

import { Text, View } from '@/components/base';
import Accordion from '@/components/base/Accordion';
import { ChevronIcon } from '@/components/icons';

import { FaqType } from '@/lib/@fake-db/faqs';
import { BORDER_RADIUS, SPACING } from '@/lib/theme-config';

type AccordionType = { content: string; id: number; trigger: string };

export default function List({ data }: { readonly data?: FaqType[] }) {
  const { activeTab } = useFaqsStore();
  const dataMap = useMemo(() => {
    const map: Record<number, AccordionType[]> = {};
    if (!data) return [];
    for (const category of data) {
      map[category.id] = category.faqs.map((el) => ({
        content: el.answer,
        id: el.id,
        trigger: el.question,
      }));
    }
    return map;
  }, [data]);

  const renderItem: ListRenderItem<AccordionType> = ({ item }) => {
    return (
      <Accordion.Accordion>
        <View style={styles.item}>
          <Accordion.Header>
            <View style={styles.itemHeader}>
              <Text>{item?.trigger}</Text>
              <Accordion.HeaderIcon>
                <ChevronIcon />
              </Accordion.HeaderIcon>
            </View>
          </Accordion.Header>

          <Accordion.Expanded>
            <Text style={styles.itemContent}>{item?.content}</Text>
          </Accordion.Expanded>
        </View>
      </Accordion.Accordion>
    );
  };

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={dataMap?.[activeTab]}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  activeTab: {
    backgroundColor: 'lightblue',
  },
  container: {
    padding: 10,
  },
  item: {
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    paddingHorizontal: SPACING.base,
  },
  itemContent: {
    borderTopWidth: 1,
    paddingVertical: SPACING.base,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SPACING.base,
  },
  separator: {
    height: SPACING.md,
  },
});
