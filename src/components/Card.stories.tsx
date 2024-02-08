import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";

export default {
  title: "Card"
};

export const Default = () => (
  <View className="flex justify-center h-full gap-8 w-96 mx-auto">
    <Card
      className="h-32"
      mode="elevated"
    >
      <Card.Title title="Exemple Card" />
    </Card>
    <Card
      className="h-32"
      mode="outlined"
    >
      <Card.Title title="Exemple Card" />
    </Card>
    <Card
      className="h-32"
      mode="contained"
    >
      <Card.Title title="Exemple Card" />
    </Card>
  </View>
);

Default.story = {
  name: "Default"
};
