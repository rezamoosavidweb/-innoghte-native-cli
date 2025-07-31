import { useIsFetching } from "@tanstack/react-query";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { useSetting } from "@/share/hooks/use-setting";
import { useThemeConfig } from "@/share/hooks/use-theme-config";

import CircularProgress from "./circular-progress-bar";

export default function PageLoading() {
  const theme = useThemeConfig();
  const isFetching = useIsFetching();
  const { loading, setLoading } = useSetting();

  useEffect(() => {
    setLoading(!!isFetching);
  }, [isFetching, setLoading]);

  if (!loading) return null;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: `${theme.colors.background}90` },
      ]}
    >
      <CircularProgress />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 90,
  },
});
