import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const SubTitle = ({ children, style }) => {
  return (
    <View>
      <Text style={[tw`text-white text-[20px] font-normal`, style]}>
        {children}
      </Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({});
