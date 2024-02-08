import { View } from "react-native";
import { Text } from "react-native-paper";

export default function Header({ title }: { title: string }) {
  return (
    <View className={"w-full py-24 bg-primary-400"}>
      <Text className={"text-center text-5xl font-bold text-white"}>
        {title}
      </Text>
    </View>
  );
}
