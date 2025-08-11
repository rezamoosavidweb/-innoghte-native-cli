import { Image, StyleSheet, Text, View } from "react-native";

import Images from "@/lib/images";

import Rate from "../Rate";

type Props = {
  readonly imageUrl?: string;
  readonly title: string;
}

export default function CardHeader({ imageUrl, title }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>{title}</Text>
        <Rate rating={2.6} starSize={12} />
      </View>

      <Image
        source={imageUrl ? { uri: imageUrl } : Images.defaultAvatar}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#D1D5DB", // gray-400
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 12,
  },
  image: {
    borderRadius: 8,
    height: 64,
    width: 64, // size-16 (16*4 = 64)
  },
  left: {
    flexDirection: "column",
    gap: 12, // gap-3 (3*4)
  },
  title: {
    fontSize: 24, // text-2xl
    fontWeight: "600",
  },
});
