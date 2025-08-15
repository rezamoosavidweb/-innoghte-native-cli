import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';

import { forwardRef, useCallback, useMemo, useState } from 'react';
import { useController } from 'react-hook-form';
import {
  I18nManager,
  TextInput as RNTextInput,
  StyleProp,
  StyleSheet,
  Text,
  type TextInputProps,
  TextStyle,
  View,
  type ViewStyle,
} from 'react-native';

export type InputControllerType<T extends FieldValues> = {
  readonly control: Control<T>;
  readonly name: Path<T>;
  readonly rules?: RuleType<T>;
};

export type RuleType<T extends FieldValues> = { [name in keyof T]: TRule<T> };

type ControlledInputProps<T extends FieldValues> = {} & InputControllerType<T> &
  InputProps;

type InputProps = {
  readonly containerStyle?: ViewStyle;
  readonly disabled?: boolean;
  readonly error?: string;
  readonly label?: string;
} & TextInputProps;

type TRule<T extends FieldValues> =
  | Omit<
      RegisterOptions<T>,
      'disabled' | 'setValueAs' | 'valueAsDate' | 'valueAsNumber'
    >
  | undefined;

export const Input = forwardRef<RNTextInput, InputProps>((props, ref) => {
  const { containerStyle, disabled, error, label, style, ...inputProps } =
    props;
  const [isFocused, setIsFocused] = useState(false);

  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);
  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const inputStyle = useMemo(() => {
    const stylesArray: StyleProp<TextStyle> = [styles.input];

    if (isFocused) {
      stylesArray.push(styles.focusedInput);
    }
    if (error) {
      stylesArray.push(styles.errorInput);
    }
    if (disabled) {
      stylesArray.push(styles.disabledInput);
    }

    return stylesArray;
  }, [isFocused, error, disabled]);

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? (
        <Text style={[styles.label, error && styles.errorLabel]}>{label}</Text>
      ) : null}
      <RNTextInput
        editable={!disabled}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholderTextColor="#9CA3AF"
        ref={ref}
        style={[
          ...inputStyle,
          { writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' },
          { textAlign: I18nManager.isRTL ? 'right' : 'left' },
          style,
        ]}
        {...inputProps}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
});
Input.displayName = 'Input';
export function ControlledInput<T extends FieldValues>(
  props: ControlledInputProps<T>,
) {
  const { control, name, rules, ...inputProps } = props;
  const { field, fieldState } = useController({ control, name, rules });
  const handleChangeText = field.onChange;
  return (
    <Input
      autoCapitalize="none"
      error={fieldState.error?.message}
      onChangeText={handleChangeText}
      ref={field.ref}
      value={(field.value as string) || ''}
      {...inputProps}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 8,
  },
  disabledInput: {
    backgroundColor: '#E5E7EB', // gray-200
    color: '#9CA3AF',
  },
  errorInput: {
    borderColor: '#DC2626', // red-600
  },
  errorLabel: {
    color: '#DC2626', // red-600
  },
  errorText: {
    color: '#DC2626',
    fontSize: 12,
    marginTop: 4,
  },
  focusedInput: {
    borderColor: '#9CA3AF', // gray-400
  },
  input: {
    backgroundColor: '#F3F4F6', // gray-100
    borderColor: '#D1D5DB', // gray-300
    borderRadius: 12,
    borderWidth: 0.5,
    color: '#111827', // gray-900
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  label: {
    color: '#6B7280', // gray-500
    fontSize: 16,
    marginBottom: 4,
  },
});
