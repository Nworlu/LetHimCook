import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import bgImage1 from "../../assets/icons/slide1.png";
import bgImage2 from "../../assets/icons/slide2.png";
import bgImage3 from "../../assets/icons/slide3.png";
import PrimaryButton from "../../components/ui/PrimaryButton";
import Title from "../../components/typography/Title";
import SubTitle from "../../components/typography/SubTitle";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = ({ navigation }) => {
  const slides = [
    {
      id: 1,
      title: "Find New Recipes",
      subtitle: `Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut.`,
      image: bgImage1,
    },
    {
      id: 2,
      title: "Share Yours!",
      subtitle: `Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut.`,
      image: bgImage2,
    },
    {
      id: 3,
      title: "Discover Based On Your Needs",
      subtitle: `Have ingredients for...something, but not quite sure what? No worries! Find recipes based on your list. Starting a new diet? We’ve got you. Sign up to get started`,
      image: bgImage3,
    },
  ];
  const renderSlidesData = (itemData) => {
    const item = itemData.item;
    return (
      <View style={{ width }}>
        <ImageBackground source={item.image} style={styles.backgroundStyle}>
          <View style={tw`absolute bottom-[2.5%] px-6 items-center w-full`}>
            <View style={tw`px-4`}>
              <Title>{item.title}</Title>
              <SubTitle style={{ marginVertical: 10, marginBottom: 35 }}>
                {item.subtitle}
              </SubTitle>
            </View>
            <PrimaryButton
              onPress={() => navigation.replace("CreateAccountScreen")}
            >
              Get started
            </PrimaryButton>
          </View>
        </ImageBackground>
      </View>
    );
  };
  return (
    <FlatList
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      data={slides}
      renderItem={renderSlidesData}
      keyExtractor={(item) => item.id}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  backgroundStyle: {
    width: "100%",
    height: "100%",
  },
});
