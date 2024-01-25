import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {ActivityIndicator, MD2Colors} from "react-native-paper";
import {useIsConnected} from "react-native-offline";

export const Offline = () => {
    const isConnected = useIsConnected();

    return (
        <View className={"absolute top-0 left-0 w-full"}>
            {!isConnected && (
                <View className={"items-center flex-row justify-center w-full px-4 py-4 bg-red-200 z-50"}>
                    <ActivityIndicator animating={true} color={MD2Colors.red800}/>
                    <Text style={styles.message}>No Internet Connection</Text>
                </View>
            )}
        </View>
    )
        ;
};

const styles = StyleSheet.create({
    message: {
        color: "#991B1B",
        marginLeft: 8,
    },
});