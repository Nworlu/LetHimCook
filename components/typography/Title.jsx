import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const Title = ({ children, style }) => {
  return (
    <View>
      <Text
        style={[tw`text-[44px] font-bold text-white leading-[45px]`, style]}
      >
        {children}
      </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({});
