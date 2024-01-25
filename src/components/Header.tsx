import {View} from "react-native";
import {Text} from "react-native-paper";

export default function Header({title}) {
    return (
        <View className={"w-full py-32 bg-primary-400"}>
            <Text className={"text-center text-3xl font-bold text-white"}>{title}</Text>
        </View>
    )
}