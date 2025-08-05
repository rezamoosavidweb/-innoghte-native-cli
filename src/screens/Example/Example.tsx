import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import LangToggleButton from '@/components/LangToggle';
import ThemeToggleButton from '@/components/ThemeToggle';


function Example() {
  const { t } = useTranslation();
  return (
    <View>
      <Text>Example</Text>
      <ThemeToggleButton />
      <LangToggleButton />
      <Text>{t('example')}</Text>
    </View>
  );
}

export default Example;
