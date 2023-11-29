import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";
import InputField from "../../components/ui/InputField";
import tw from "twrnc";
import PrimaryButton from "../../components/ui/PrimaryButton";

const SignUpScreen = () => {
  return (
    <ScrollView style={[styles.screen, { paddingHorizontal: 20 }]}>
      <KeyboardAvoidingView style={[styles.screen]} behavior="position">
        <View>
          <InputField label={"Username"} />
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <InputField label={"First Name"} inputStyle={{ width: "100%" }} />
            <InputField label={"Last Name"} />
          </View>
          <InputField label={"Email Address"} />
          <InputField label={"Phone"} />
          <InputField label={"Password"} password />

          <View style={{ marginTop: 35, marginBottom: 50 }}>
            <View style={{ paddingHorizontal: 25, marginBottom: 5 }}>
              <PrimaryButton>Sign Up</PrimaryButton>
            </View>
            <Text style={{ alignItems: "center", fontSize: 13 }}>
              By continuing, you agree to our
              {/* <TouchableOpacity> */} <Text>Terms of service</Text>
              {/* </TouchableOpacity> */} and {/* <TouchableOpacity> */}
              <Text>Privacy policy</Text>
              {/* </TouchableOpacity> */}
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
      <TouchableOpacity style={{ alignSelf: "center" }}>
        <Text style={{ fontSize: 20 }}>
          Already have an account?{" "}
          <Text style={{ color: "#1976D2" }}>Login</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
