import React, {useEffect} from "react";
import { DataTable } from "react-native-paper";

type Props = {
  route: any;
  navigation: any;
};

const StarshipDetailsScreen = ({ route, navigation }: Props) => {
  const { name, model, manufacturer, cost_in_credits } = route.params;
    useEffect(() => {
        navigation.setOptions({ title: name });
    }, []);
  return (
    <DataTable className="mt-8">
      <DataTable.Header>
        <DataTable.Title>Starship Details</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Name</DataTable.Cell>
        <DataTable.Cell>{name}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Model</DataTable.Cell>
        <DataTable.Cell>{model}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Manufacturer</DataTable.Cell>
        <DataTable.Cell>{manufacturer}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Cost in credits</DataTable.Cell>
        <DataTable.Cell>{cost_in_credits}</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default StarshipDetailsScreen;
