import { StackScreenProps } from '@react-navigation/stack';
import { Button, ScrollView, Text, View } from 'react-native';

import { Drawers, Paths } from '@/navigation/routes';
import { RootStackParamList } from '@/navigation/types';

type Props = StackScreenProps<RootStackParamList, Paths.Startup>;

function Startup({ navigation }: Props) {
  const handleNavigateToContact = () => {
    navigation.navigate(Paths.Drawer, { screen: Drawers.Example });
  };

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text>Startup Page</Text>
        <Button onPress={handleNavigateToContact} title="Contact Page" />
      </View>
    </ScrollView>
  );
}

export default Startup;
