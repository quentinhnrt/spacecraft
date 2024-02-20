import { Text } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import Routes from "~/navigation/Route";

interface StarshipCardProps {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  navigation?: any;
}

const StarshipCard = ({
  name,
  model,
  manufacturer,
  cost_in_credits,
  navigation,
    image
}: StarshipCardProps) => {
  function onPress() {
    navigation?.navigate(Routes.STARSHIP_DETAILS_SCREEN, {
      name,
      model,
      manufacturer,
      cost_in_credits,
      image
    });
  }

  return (
    <Card
      onPress={() => onPress()}
      className={"mb-8"}
    >
      <Card.Cover source={image} />
      <Card.Title
        title={name}
        subtitle={model}
      />
      <Card.Content>
        <Text>{manufacturer + " / " + cost_in_credits}</Text>
      </Card.Content>
    </Card>
  );
};

export default StarshipCard;
