import { useQuery } from '@tanstack/react-query';
import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/base';

import { fetchFaqFake } from '@/lib/@fake-db/faqs';

import FilterTabs from './FilterTabs';
import List from './List';
import Search from './Search';

export default function FAQs() {
  const { data, isFetching } = useQuery({
    queryFn: () => fetchFaqFake(),
    queryKey: ['faqs'],
  });

  if (isFetching)
    return (
      <View>
        <Text>Loading Faqs ...</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <Search />
      <FilterTabs data={data} />
      <List data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
});
