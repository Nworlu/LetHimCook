import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const InputField = ({
  password,
  label,
  updateInputValue,
  value,
  inputStyle,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      {password ? (
        <View style={styles.passwordInputContainer}>
          <TextInput
            onChangeText={updateInputValue}
            value={value}
            style={styles.passwordInput}
            keyboardAppearance="dark"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={togglePassword}>
            {showPassword ? (
              <Ionicons name="eye-outline" size={20} color="black" />
            ) : (
              <Ionicons name="eye-off-outline" size={20} color="black" />
            )}
          </TouchableOpacity>
        </View>
      ) : (
        <TextInput
          style={[styles.input, inputStyle]}
          keyboardAppearance="dark"
          onChangeText={updateInputValue}
          value={value}
        />
      )}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  passwordInputContainer: {
    borderWidth: 1,
    borderColor: "rgba(30, 30, 30, 0.25)",
    borderRadius: 10,
    width: "100%",
    height: 50,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    width: "95%",
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(30, 30, 30, 0.25)",
    borderRadius: 10,
    width: "100%",
    height: 50,
    padding: 10,
  },
});
