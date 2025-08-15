import { useLayoutEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { useFaqsStore } from '@/hooks/use-faq-store';

import { Button, View } from '@/components/base';
import Accordions from '@/components/base/Accordion';

import { faqs } from '@/lib/@fake-db/faqs';

import Search from './Search';

export default function FAQs() {
  const [active, setActive] = useState<number>(-1);
  const { query } = useFaqsStore();

  const onPress = (id: number) => {
    setActive(id);
  };

  useLayoutEffect(() => {
    if (faqs.length > 0) {
      onPress(faqs[0].id);
    }
  }, []);

  const list = useMemo(() => {
    const findFaq = faqs.find((item) => item.id === active);
    return findFaq?.faqs || [];
  }, [active]);

  const convertedList = list
    .map((el) => ({
      content: el?.answer,
      id: el?.id,
      trigger: el?.question,
    }))
    .filter((el) => {
      if (!query || query.length === 0) return true;
      return el?.trigger?.toLowerCase().includes(query.toLowerCase());
    });

  return (
    <View style={styles.container}>
      <Search />
      <ScrollView
        contentContainerStyle={styles.horizontalScroll}
        horizontal
        style={styles.horizontalContainer}
      >
        <View style={styles.buttonRow}>
          {faqs.map((el) => (
            <Button
              flex={1}
              key={el.id}
              label={el.title}
              onPress={() => {
                onPress(el.id);
              }}
            />
          ))}
        </View>
      </ScrollView>
      <ScrollView>
        <Accordions list={convertedList} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexShrink: 1,
    gap: 16,
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginTop: 8,
  },
  horizontalContainer: {
    flex: 1,
    maxHeight: 60,
    minHeight: 60,
  },
  horizontalScroll: {
    paddingHorizontal: 16,
  },
});
