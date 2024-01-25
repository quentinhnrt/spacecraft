import React from "react";
import {StyleSheet, StatusBar, View, Text, FlatList, Image} from "react-native";

import {default as data} from "../../api/data.json";
import {Card} from "react-native-paper";
import {useImage} from "~/hooks/useImage";

export const StarshipFeedScreen = () => {
    function renderItem({item}) {
        const image = useImage(item.name)
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
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <FlatList data={data.results} renderItem={renderItem} keyExtractor={item => item.name}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
    },
    headerContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
});