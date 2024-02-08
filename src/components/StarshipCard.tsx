import { Text } from "react-native";
import React from "react";
import { Card } from "react-native-paper";

interface StarshipCardProps {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
}

const StarshipCard = ({
  name,
  model,
  manufacturer,
  cost_in_credits
}: StarshipCardProps) => {
  return (
    <Card className={"mb-8"}>
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
