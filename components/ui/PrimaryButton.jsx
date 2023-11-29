import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[tw`bg-[#ED6E3A] w-full h-[60px] px-2 py-3 rounded-[10px]`]}
    >
      <Text style={[tw`text-white text-[26px] font-bold text-center`]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({});
