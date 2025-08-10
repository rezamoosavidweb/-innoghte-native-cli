import 'react-native-gesture-handler';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import ApplicationNavigator from '@/navigation/Application';
import '@/translations';

import { useThemeStore } from './hooks';

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
    queries: {
      retry: false,
    },
  },
});

function App() {
  const initTheme = useThemeStore((state) => state.initTheme);

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <ApplicationNavigator />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

export default App;
