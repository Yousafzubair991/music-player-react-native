import Details from "../../screens/Details";
import Home from "../../screens/Home";
import Onboarding from "../../screens/Onboarding";
import React from "react";
import { Screens } from "../../constants/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthRoutes = () => {
  const defaultOption = { headerShown: false };
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName={Screens?.Onboarding}>
      <Stack.Screen
        name={Screens?.Home}
        component={Home}
        options={defaultOption}
      />
      <Stack.Screen
        name={Screens?.Details}
        component={Details}
        options={defaultOption}
      />
      <Stack.Screen
        name={Screens?.Onboarding}
        component={Onboarding}
        options={defaultOption}
      />
    </Stack.Navigator>
  );
};
export default AuthRoutes;
