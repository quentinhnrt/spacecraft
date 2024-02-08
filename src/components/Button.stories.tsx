import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

export default {
  title: "Button"
};

export const Default = () => (
  <View className="flex justify-center h-full gap-8">
    <Button mode="text">Press me</Button>
    <Button mode="outlined">Press me</Button>
    <Button mode="contained">Press me</Button>
  </View>
);

Default.story = {
  name: "Default"
};
