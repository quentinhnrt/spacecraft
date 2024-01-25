import type {ReactNode} from "react";
import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {Text} from "react-native-paper";
import {Offline} from "~/components/Offline";
import {useIsConnected} from "react-native-offline";
import {SafeAreaView} from "~/components/SafeAreaView";


// Import <Offline /> component

interface ScreenContainerProps {
    title: string;
    children?: ReactNode;
    withSeparatorFooter?: boolean;
}

export const ScreenContainer = ({
                                    title,
                                    children,
                                    withSeparatorFooter = false,
                                }: ScreenContainerProps) => {

    const isConnected = useIsConnected()

    return (
        <SafeAreaView>
            <View>
                <Offline/>
            </View>
            <View style={styles.container}>
                <Text variant="headlineMedium" style={isConnected || isConnected === null ? styles.headerTextConnected : styles.headerText}>
                    {title}
                </Text>
                {children}
                {withSeparatorFooter && <View style={styles.footer}/>}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        height: "100%",
    },
    headerText: {
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 70
    },
    headerTextConnected: {
        fontWeight: "bold",
        marginVertical: 20,
    },
    footer: {
        paddingBottom: 256,
    },
});