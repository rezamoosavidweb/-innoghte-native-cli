import React from "react";
import { StyleSheet, View } from "react-native";

import CardHeader from "./CardHeader";

type Props = {
  readonly children: React.ReactNode;
  readonly imageUrl: string;
  readonly title: string;
}

export default function Card({ children, imageUrl, title }: Props) {
  return (
    <View style={styles.container}>
      <CardHeader imageUrl={imageUrl} title={title} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F6", // dark:bg-dark-2 - change if using dark mode
    borderColor: "#9CA3AF", // grayscale-400
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
  },
});
