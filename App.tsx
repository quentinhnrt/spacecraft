import LoginScreen from "./src/screens/LoginScreen";
import {Provider as PaperProvider} from "react-native-paper";
import {TermsScreen} from "./src/screens/TermsScreen";
export default function App() {
    return (
        <PaperProvider>
            <LoginScreen />
        </PaperProvider>
    );
}