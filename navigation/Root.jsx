import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/onboarding/OnboardingScreen";
import CreateAccountScreen from "../screens/onboarding/CreateAccountScreen";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const RootStack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <RootStack.Navigator
      initialRouteName="OnboardingScreen"
      screenOptions={{ headerShown: false, animation: "fade" }}
    >
      <RootStack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <RootStack.Screen
        name="CreateAccountScreen"
        component={CreateAccountScreen}
        options={{
          headerShown: true,
          title: "",
          headerTransparent: true,
          headerTintColor: "white",
          headerRight: ({ tintColor }) => (
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: tintColor,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="question" size={30} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
