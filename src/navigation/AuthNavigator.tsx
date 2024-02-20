import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "~/screens/LoginScreen";
import { TermsScreen } from "~/screens/TermsScreen";
import Routes from "./Route";
import { StarshipFeedScreen } from "~/screens/StarshipFeedScreen";
import StarshipDetailsScreen from "~/screens/StarshipDetailsScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Group screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name={Routes.LOGIN_SCREEN}
                        component={LoginScreen}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AuthNavigator;
