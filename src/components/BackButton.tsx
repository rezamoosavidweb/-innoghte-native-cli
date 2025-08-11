import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { ArrowRightIcon } from './icons';

export default function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={styles.backButton}
    >
      <ArrowRightIcon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 10, // adjust margin to prevent clipping
    padding: 8, // increase touchable area
  },
});
