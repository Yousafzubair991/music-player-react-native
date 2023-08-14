import AppRoutes from "./App";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";

const Navigator = () => {
  const defaultOption = { flex: 1 };

  return (
    <NavigationContainer>
      <SafeAreaView style={defaultOption}>
        <AppRoutes />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Navigator;
