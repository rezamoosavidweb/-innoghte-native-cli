import { Button, ScrollView, Text, View } from 'react-native';

import { Drawers, Paths } from '@/navigation/paths';
import { CombinedProps } from '@/navigation/types';

function Contact({ navigation }: CombinedProps<Drawers.Contact>) {
  const handleNavigateToStartup = () => {
    navigation.navigate(Paths.Startup);
  };

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text>Contact Page</Text>
        <Button onPress={handleNavigateToStartup} title="Startup Page" />
      </View>
    </ScrollView>
  );
}

export default Contact;
