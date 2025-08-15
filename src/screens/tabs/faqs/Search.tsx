import { useRef } from 'react';
import {
  Pressable,
  StyleSheet,
  type TextInput,
  type TextInputChangeEvent,
  View,
} from 'react-native';

import { useFaqsStore } from '@/hooks/use-faq-store';
import { translate } from '@/translations/utils';

import { Input } from '@/components/base/Input';
import { SearchIcon } from '@/components/icons';

export default function Search() {
  const { query, setQuery } = useFaqsStore();
  const inputRef = useRef<TextInput>(null);

  const handleChange = (event: TextInputChangeEvent) => {
    setQuery(event.nativeEvent.text);
  };

  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={() => inputRef.current?.focus()}
        style={styles.searchBox}
      >
        <SearchIcon height={24} width={24} />
        <Input
          containerStyle={styles.inputContainer}
          onChange={handleChange}
          placeholder={translate('search')}
          ref={inputRef}
          style={styles.input}
          value={query}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    flex: 1,
    padding: 4,
  },
  inputContainer: {
    marginBottom: 0,
  },
  searchBox: {
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 8,
    padding: 12,
  },
  wrapper: {
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
});
