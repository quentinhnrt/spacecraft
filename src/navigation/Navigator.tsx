import {useAuthContext} from "~/contexts/AuthContext";
import RootNavigator from "~/navigation/RootNavigator";
import AuthNavigator from "~/navigation/AuthNavigator";

export default function Navigator() {
    const { isSignedIn, toggleIsSignedIn } = useAuthContext();

    if (isSignedIn) {
        return (<RootNavigator />);
    }

    return (<AuthNavigator />);
}