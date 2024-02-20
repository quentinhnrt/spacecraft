import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useStarships } from "~/hooks/useStarships";
import { useImage } from "~/hooks/useImage";
import { ScreenContainer } from "~/components/ScreenContainer";
import StarshipCard from "~/components/StarshipCard";
import {Button} from "react-native-paper";
import {useAuthContext} from "~/contexts/AuthContext";

export const StarshipFeedScreen = ({ navigation, route }: any) => {
  const { isLoading, isError, data } = useStarships();
  const { isSignedIn, toggleIsSignedIn } = useAuthContext();

  function renderItem({ item }) {
    let image = useImage(item.name);

    if (!image) {
      image = { uri: "https://picsum.photos/400/200" };
    }

    return (
      <StarshipCard
        name={item.name}
        model={item.model}
        manufacturer={item.manufacturer}
        cost_in_credits={item.cost_in_credits}
        navigation={navigation}
        image={image}
      />
    );
  }

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Button onPress={toggleIsSignedIn} mode="contained" className={"mb-8"}>
            <Text>Disconnect</Text>
        </Button>
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
