import { Theme } from '@react-navigation/native';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { useTheme } from '@/hooks';
import { useFaqsStore } from '@/hooks/use-faq-store';

import { Text, View } from '@/components/base';

import { FaqType } from '@/lib/@fake-db/faqs';
import { BORDER_RADIUS, SPACING } from '@/lib/theme-config';

const createStyle = (theme: Theme) =>
  StyleSheet.create({
    activeTab: {
      borderColor: theme?.colors?.primary,
      color: theme?.colors?.primary,
    },
    container: {
      paddingHorizontal: SPACING.base,
    },
    separator: {
      width: SPACING.base,
    },
    tab: {
      borderColor: theme?.colors?.border,
      borderRadius: BORDER_RADIUS.lg / 2,
      borderWidth: 1,
      flex: 1,
      paddingHorizontal: BORDER_RADIUS.xs * 5,
      paddingVertical: BORDER_RADIUS.xs * 3,
    },
  });

export default function FilterTabs({ data }: { readonly data?: FaqType[] }) {
  const { activeTab, setActiveTab } = useFaqsStore();
  const { theme } = useTheme();

  const handleActiveTab = (id: number) => {
    setActiveTab(id);
  };

  const styles = createStyle(theme);

  const renderItem = ({ item }: { item: FaqType }) => (
    <TouchableOpacity
      onPress={() => {
        handleActiveTab(item?.id);
      }}
      style={[styles.tab, activeTab === item?.id && styles?.activeTab]}
    >
      <Text primary={activeTab === item?.id}>{item?.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
