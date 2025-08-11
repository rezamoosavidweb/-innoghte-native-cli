import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { Paths } from '@/navigation/routes';

import { Button, Text, View } from '@/components/base';
import LangToggleButton from '@/components/LangToggle';
import ThemeToggleButton from '@/components/ThemeToggle';

function Example() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const handlePress = () => { navigation.navigate(Paths.Startup); };
  return (
    <View>
      <Text>Example</Text>
      <ThemeToggleButton />
      <LangToggleButton />
      <Button label="Go to Startup" onPress={handlePress} />
      <Text>{t('example')}</Text>
    </View>
  );
}

export default Example;
