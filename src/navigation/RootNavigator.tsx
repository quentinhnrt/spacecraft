import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {TermsScreen} from "~/screens/TermsScreen";
import Routes from "./Route";
import {StarshipFeedScreen} from "~/screens/StarshipFeedScreen";
import StarshipDetailsScreen from "~/screens/StarshipDetailsScreen";
import CustomNavigationBar from "~/navigation/CustomNavigationBar";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                header: (props) => <CustomNavigationBar {...props} />,
            }} initialRouteName={Routes.STARSHIP_FEED_SCREEN}>
                <Stack.Group>
                    <Stack.Screen
                        name={Routes.STARSHIP_FEED_SCREEN}
                        component={StarshipFeedScreen}
                    />
                    <Stack.Screen
                        name={Routes.TERMS_SCREEN}
                        component={TermsScreen}
                    />
                    <Stack.Screen
                        name={Routes.STARSHIP_DETAILS_SCREEN}
                        component={StarshipDetailsScreen}
                        options={{
                            presentation: "modal",
                        }}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
