import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../screens/auth/SignUpScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import { AntDesign } from "@expo/vector-icons";

const AuthStack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="SignUpScreen"
      screenOptions={{ animation: "fade" }}
    >
      <AuthStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: true,
          title: "Sign Up",
          headerTintColor: "black",
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: "white",
          },
          headerTitleAlign: "center",
          headerLeft: ({ tintColor, canGoBack }) => (
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="arrowleft" size={24} color={tintColor} />
            </TouchableOpacity>
          ),
        }}
      />
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: true,
          title: "Login",
          headerTransparent: true,
          headerTintColor: "black",
          headerLeft: ({ tintColor }) => (
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
              <AntDesign name="arrowleft" size={24} color={tintColor} />
            </TouchableOpacity>
          ),
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
