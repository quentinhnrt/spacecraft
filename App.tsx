import LoginScreen from "./src/screens/LoginScreen";
import {Provider as PaperProvider} from "react-native-paper";
import {TermsScreen} from "./src/screens/TermsScreen";
import {StarshipFeedScreen} from "./src/screens/StarshipFeedScreen";
export default function App() {
    return (
        <PaperProvider>
            <StarshipFeedScreen />
        </PaperProvider>
    );
}