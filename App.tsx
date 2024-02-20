import {Provider as PaperProvider} from "react-native-paper";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {NetworkProvider} from "react-native-offline";
import {SafeAreaProvider} from "react-native-safe-area-context";
import RootNavigator from "~/navigation/RootNavigator";
import Constants from "expo-constants";
import {useState} from "react";
import AuthNavigator from "~/navigation/AuthNavigator";
import {AuthContextProvider} from "~/contexts/AuthContext";
import Navigator from "~/navigation/Navigator";

const queryClient = new QueryClient();

function App() {
    return (
        <AuthContextProvider>
            <NetworkProvider>
                <QueryClientProvider client={queryClient}>
                    <PaperProvider>
                        <Navigator />
                    </PaperProvider>
                </QueryClientProvider>
            </NetworkProvider>
        </AuthContextProvider>
    );
}

let AppEntryPoint = App;

if (
    Constants &&
    Constants.expoConfig &&
    Constants.expoConfig.extra &&
    Constants.expoConfig.extra.storybookEnabled === "true"
) {
    AppEntryPoint = require("./.storybook").default;
}

export default AppEntryPoint;
