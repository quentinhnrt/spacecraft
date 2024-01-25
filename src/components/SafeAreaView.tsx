import React, {FunctionComponent} from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {View} from "react-native";

type SafeAreaViewProps = {
    disableBottomSafeArea?: boolean,
    disableTopSafeArea?: boolean,
    disableSidesSafeArea?: boolean,
    children: React.Node
}

export const SafeAreaView: FunctionComponent<SafeAreaViewProps> = (props: SafeAreaViewProps) => {

    const { disableBottomSafeArea = false, disableTopSafeArea = false, disableSidesSafeArea = false, children } = props;

    const insets = useSafeAreaInsets();

    const style: StyleSheet = {};

    if (!disableBottomSafeArea) {
        style.marginBottom = insets.bottom;
    }

    if (!disableTopSafeArea) {
        style.marginTop = insets.top;
    }

    if (!disableSidesSafeArea) {
        style.marginRight = insets.right;
        style.marginLeft = insets.left;
    }

    return <View style={[{ flex: 1 }, style]}>
        {children}
    </View>;
};