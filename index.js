/**
 * @format
 */
import "react-native-gesture-handler";

import App from "./App";
import { AppRegistry } from "react-native";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import React from "react";
import { name as appName } from "./app.json";
import { store } from "./src/redux/store";

const RNRedux = () => (
  <Provider store={store}>
    <FlashMessage position="top" />
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
