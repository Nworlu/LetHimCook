import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";
import IndexNavigation from "./navigation/Index";
export default function App() {
  return (
    <RootSiblingParent>
      <StatusBar style="auto" />
      <IndexNavigation />
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
