import { Provider as PaperProvider } from "react-native-paper";
import { StarshipFeedScreen } from "~/screens/StarshipFeedScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NetworkProvider } from "react-native-offline";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Constants from "expo-constants";

const queryClient = new QueryClient();

function App() {
  return (
    <SafeAreaProvider>
      <NetworkProvider>
        <QueryClientProvider client={queryClient}>
          <PaperProvider>
            <StarshipFeedScreen />
          </PaperProvider>
        </QueryClientProvider>
      </NetworkProvider>
    </SafeAreaProvider>
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
