import type { ReactotronReactNative } from "reactotron-react-native";
import {
  QueryClientManager,
  reactotronReactQuery,
} from "reactotron-react-query";

import Reactotron from "reactotron-react-native";
import mmkvPlugin from "reactotron-react-native-mmkv";

import config from "../app.json";
import { queryClient } from "./share/api";
import { storage } from "./share/lib/storage";

const queryClientManager = new QueryClientManager({
  queryClient,
});

Reactotron.configure({
  name: config.name,
  onDisconnect: () => {
    queryClientManager.unsubscribe();
  },
})
  .use(reactotronReactQuery(queryClientManager))
  .useReactNative()
  .use(mmkvPlugin<ReactotronReactNative>({ storage }))
  .connect();
