import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootNavigation from "./Root";
import AuthNavigation from "./Auth";

const Index = createNativeStackNavigator();
const IndexNavigation = () => {
  return (
    <NavigationContainer>
      <Index.Navigator
        initialRouteName="Root"
        screenOptions={{
          animation: "fade",
          animationTypeForReplace: "pop",
          headerShown: false,
        }}
      >
        <Index.Screen name="Root" component={RootNavigation} />
        <Index.Screen name="Auth" component={AuthNavigation} />
      </Index.Navigator>
    </NavigationContainer>
  );
};

export default IndexNavigation;
