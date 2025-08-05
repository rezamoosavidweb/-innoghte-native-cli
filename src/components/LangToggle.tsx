import { useTranslation } from 'react-i18next';
import { Button } from 'react-native';

import { SupportedLanguages } from '@/translations/schema';
import { useSelectedLanguage } from '@/translations/utils';

export default function ThemeToggleButton() {
  const { language, setLanguage } = useSelectedLanguage();
  const { i18n } = useTranslation();

  return (
    <Button
      onPress={() => {
        setLanguage(
          language === SupportedLanguages.EN
            ? SupportedLanguages.FA
            : SupportedLanguages.EN,
        );
      }}
      title={`Switch to ${language === SupportedLanguages.EN ? 'Persian' : 'English'} Language(${i18n.language})`}
    />
  );
}
