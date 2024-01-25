import {Provider as PaperProvider} from "react-native-paper";
import {StarshipFeedScreen} from "~/screens/StarshipFeedScreen";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {NetworkProvider} from "react-native-offline";
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