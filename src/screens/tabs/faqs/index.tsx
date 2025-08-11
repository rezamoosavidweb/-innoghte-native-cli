import { useQuery } from '@tanstack/react-query';

import { Text, View } from '@/components/base';

import { request } from '@/services';
function FAQsTab() {
  const { data, error, isFetching } = useQuery({
    queryFn: async () => {
      try {
        const res = await request.get<object[]>('posts').json();

        return res;
      } catch (error_) {
        console.error('Fetch error:', error_);
        throw error_; // rethrow so React Query knows
      }
    },
    queryKey: ['list'],
  });

  if (isFetching) {
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error fetching data</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        padding: 10,
      }}
    >
      {data?.map((el) => {
        return (
          <View
            key={el?.id}
            style={{
              borderColor: 'red',
              borderRadius: 20,
              borderWidth: 2,
              display: 'flex',
              flexDirection: 'column',
              padding: 10,
            }}
          >
            <Text style={{ fontWeight: '700' }}>{el?.title}</Text>
            <Text>{el?.body}</Text>
          </View>
        );
      })}
    </View>
  );
}

export default FAQsTab;
