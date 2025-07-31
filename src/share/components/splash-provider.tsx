import React, { FC, memo, ReactNode, useEffect, useState } from "react";
import { Text, View } from "react-native";

export interface SplashProviderProps {
  children: ReactNode;
}

const SplashProvider: FC<SplashProviderProps> = ({ children }) => {
  const [finishedAnimation, setFinishedAnimation] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setFinishedAnimation(true), 3000);
  }, []);

  if (!finishedAnimation) {
    return (
      <View className="w-full">
        <View className="w-full">
          <Text>Splash screen</Text>
        </View>
      </View>
    );
  }

  //
  else return children;
};

const memoSplashProvider = memo(SplashProvider);
export { memoSplashProvider as SplashProvider };
