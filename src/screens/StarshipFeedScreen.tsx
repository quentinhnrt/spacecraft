import React from "react";
import {StyleSheet, StatusBar, View, Text, FlatList, Image} from "react-native";
import {Card} from "react-native-paper";
import {useStarships} from "~/hooks/useStarships";
import {useImage} from "~/hooks/useImage";
import {ScreenContainer} from "~/components/ScreenContainer";
import {SafeAreaView} from "react-native-safe-area-context";

export const StarshipFeedScreen = () => {
    const {isLoading, isError, data} = useStarships()

    if (isLoading) {
        return <Text>Loading...</Text>
    }

    if (isError) {
        return <Text>Error</Text>
    }

    function renderItem({item}) {
        let image = useImage(item.name)

        if (!image) {
            image = {uri: "https://picsum.photos/400/200"}
        }

        return (
            <Card className={"mb-8"}>
                <Card.Cover source={image}/>
                <Card.Title title={item.name} subtitle={item.model}/>
                <Card.Content>
                    <Text>{item.crew + ' / ' + item.hyperdrive_rating + ' / $' + item.cost_in_credits}</Text>
                </Card.Content>
            </Card>
        );
    }

    return (
        <ScreenContainer title={"Starships"}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <SafeAreaView>
                        <FlatList onRefresh={() => console.log("refreshData")} refreshing={false} data={data.results}
                                  renderItem={renderItem} keyExtractor={item => item.name}/>
                    </SafeAreaView>
                </View>
            </View>
        </ScreenContainer>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        paddingHorizontal: 20,
    },
});