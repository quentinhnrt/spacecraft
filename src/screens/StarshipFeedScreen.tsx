import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Card } from "react-native-paper";
import { useStarships } from "~/hooks/useStarships";
import { useImage } from "~/hooks/useImage";
import { ScreenContainer } from "~/components/ScreenContainer";

export const StarshipFeedScreen = () => {
  const { isLoading, isError, data } = useStarships();

  function renderItem({ item }) {
    let image = useImage(item.name);

    if (!image) {
      image = { uri: "https://picsum.photos/400/200" };
    }

    return (
      <Card className={"mb-8"}>
        <Card.Cover source={image} />
        <Card.Title
          title={item.name}
          subtitle={item.model}
        />
        <Card.Content>
          <Text>
            {item.crew +
              " / " +
              item.hyperdrive_rating +
              " / $" +
              item.cost_in_credits}
          </Text>
        </Card.Content>
      </Card>
    );
  }

  return (
    <ScreenContainer title={"Starships"}>
      <View style={styles.container}>
        <View>
          {isLoading && <Text>Loading...</Text>}
          {isError && <Text>Error</Text>}
          {data ? (
            <FlatList
              onRefresh={() => console.log("refreshData")}
              refreshing={false}
              data={data.results}
              renderItem={renderItem}
              keyExtractor={(item) => item.name}
            />
          ) : null}
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
