import { StyleSheet, Text, View, ViewStyle } from "react-native";

import { translate, TxKeyPath } from "@/translations/utils";

type Props = {
  readonly containerStyle?: ViewStyle;
  readonly icon: React.ReactNode;
  readonly title: TxKeyPath;
  readonly value: React.ReactNode;
}

export default function CardRow({ containerStyle, icon, title, value }: Props) {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.left}>
        {icon}
        <Text style={styles.titleText}>{translate(title)}</Text>
      </View>

      {typeof value === "string" ? (
        <Text ellipsizeMode="tail" numberOfLines={3} style={styles.valueText}>
          {value}
        </Text>
      ) : (
        value
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  left: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12, // equivalent to gap-3 (3*4)
  },
  titleText: {
    color: "#4B5563", // text-secondary-800 - adjust color as needed
    fontSize: 18, // text-lg
  },
  valueText: {
    color: "#000", // default text color; adjust if needed
    fontSize: 18, // text-lg
  },
});
