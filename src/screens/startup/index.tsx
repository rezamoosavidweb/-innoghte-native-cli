import { StackScreenProps } from '@react-navigation/stack';
import { Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Drawers, Paths } from '@/navigation/routes';
import { RootStackParamList } from '@/navigation/types';

import { Text, View } from '@/components/base';

type Props = StackScreenProps<RootStackParamList, Paths.Startup>;

function Startup({ navigation }: Props) {
  const handleNavigateToContact = () => {
    navigation.navigate(Paths.Drawer, { screen: Drawers.Example });
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          <Text>Startup Page</Text>
          <Button onPress={handleNavigateToContact} title="Contact Page" />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default Startup;
