/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NewAppScreen } from "@react-native/new-app-screen";
import { ThemeProvider, NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./global.css";
import { APIProvider } from "./share/api";
import PageLoading from "./share/components/loading/page-loading";
import { SplashProvider } from "./share/components/splash-provider";
import { useThemeConfig } from "./share/hooks/use-theme-config";
import { ToastProvider } from "./share/components/toast-provider";
// import { KeyboardProvider } from "react-native-keyboard-controller";

function App() {
  return (
    <Providers>
      <NewAppScreen templateFileName="App.tsx" />
    </Providers>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  const theme = useThemeConfig();

  return (
    <SplashProvider>
      <GestureHandlerRootView
        style={styles.container}
        className={theme.dark ? `dark` : undefined}
      >
        {/* <KeyboardProvider>*/}
        <NavigationContainer theme={theme}>
          <APIProvider>
            <ToastProvider>
              <BottomSheetModalProvider>
                <PageLoading />
                {children}
              </BottomSheetModalProvider>
            </ToastProvider>
          </APIProvider>
        </NavigationContainer>
        {/*</KeyboardProvider> */}
      </GestureHandlerRootView>
    </SplashProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
