import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text,
} from 'react-native';

type Props = {
  readonly indicatorColor?: string;
  readonly label: string;
  readonly loading?: boolean;
} & PressableProps;

export function Button({
  disabled,
  indicatorColor = '#fff',
  label,
  loading = false,
  ...rest
}: Props) {
  return (
    <Pressable disabled={disabled || loading} {...rest}>
      {loading ? (
        <ActivityIndicator color={indicatorColor} size="small" />
      ) : (
        <Text>{label}</Text>
      )}
    </Pressable>
  );
}
