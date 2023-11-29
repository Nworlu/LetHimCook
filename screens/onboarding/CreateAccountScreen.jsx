import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import bgImage from "../../assets/icons/signup.png";
import { LinearGradient } from "expo-linear-gradient";
import Title from "../../components/typography/Title";
import SubTitle from "../../components/typography/SubTitle";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { AntDesign } from "@expo/vector-icons";
import tw from "twrnc";

const { width } = Dimensions.get("window");
const CreateAccountScreen = ({ navigation }) => {
  return (
    <View>
      <LinearGradient colors={["#000", "#000"]}>
        <ImageBackground
          source={bgImage}
          style={styles.bgImageStyle}
          imageStyle={{ opacity: 0.5 }}
          resizeMethod="scale"
          resizeMode="cover"
        >
          <View
            style={{
              position: "absolute",
              bottom: "6%",
              paddingHorizontal: 23,
            }}
          >
            <Title>Create an Account</Title>
            <SubTitle style={{ marginVertical: 25 }}>
              Lorem ipsum dolor sit amet
            </SubTitle>
          </View>
        </ImageBackground>
      </LinearGradient>
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          height: 320,
          justifyContent: "center",
          paddingHorizontal: 32,
          paddingTop: 30,
        }}
      >
        <View style={{ width: "100%" }}>
          <PrimaryButton onPress={() => navigation.navigate("Auth")}>
            Sign Up
          </PrimaryButton>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 15,
              marginBottom: 40,
            }}
          >
            <TouchableOpacity
              style={[
                tw`justify-center items-center`,
                {
                  width: width * 0.4,
                  backgroundColor: "rgba(237, 110, 58, 0.25)",
                  borderRadius: 15,
                  height: 60,
                },
              ]}
            >
              <AntDesign name="google" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                tw`justify-center items-center`,
                {
                  width: width * 0.4,
                  backgroundColor: "rgba(237, 110, 58, 0.25)",
                  borderRadius: 15,
                  height: 60,
                },
              ]}
            >
              <AntDesign name="apple1" size={24} color="#462F4D" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              alignItems: "center",
              marginHorizontal: width * 0.22,
              justifyContent: "flex-end",
            }}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={{ color: "#462F4D", fontWeight: "700", fontSize: 13 }}>
              Have an account? Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreateAccountScreen;

const styles = StyleSheet.create({
  bgImageStyle: {
    width: "100%",
    height: 556,
  },
});
