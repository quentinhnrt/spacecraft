import LoginScreen from "./src/screens/LoginScreen";
import {Provider as PaperProvider} from "react-native-paper";
import {TermsScreen} from "./src/screens/TermsScreen";
import {StarshipFeedScreen} from "./src/screens/StarshipFeedScreen";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {NetworkProvider} from "react-native-offline";
import {ScreenContainer} from "~/components/ScreenContainer";
import {SafeAreaProvider} from "react-native-safe-area-context";

const queryClient = new QueryClient()

export default function App() {
    return (
        <SafeAreaProvider>
            <NetworkProvider>
                <QueryClientProvider client={queryClient}>
                    <PaperProvider>
                            <StarshipFeedScreen/>
                    </PaperProvider>
                </QueryClientProvider>
            </NetworkProvider>
        </SafeAreaProvider>
    );
}