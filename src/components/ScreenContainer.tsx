import type {ReactNode} from "react";
import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {Text} from "react-native-paper";
import {Offline} from "~/components/Offline";
import {SafeAreaView} from "react-native-safe-area-context";
import {useIsConnected} from "react-native-offline";

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

            <ScrollView style={styles.container} nestedScrollEnabled={true}>
                <Text variant="headlineMedium" style={isConnected ? styles.headerTextConnected : styles.headerText}>
                    {title}
                </Text>
                {children}
                {withSeparatorFooter && <View style={styles.footer}/>}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        marginTop: 36,
    },
    headerText: {
        fontWeight: "bold",
    },
    headerTextConnected: {
        fontWeight: "bold",
        marginTop: 20
    },
    footer: {
        paddingBottom: 256,
    },
});