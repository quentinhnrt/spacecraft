import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Header from "~/components/Header";
import PasswordInput from "~/components/PasswordInput";
import Routes from "~/navigation/Route";
import route from "~/navigation/Route";
import {useAuthContext} from "~/contexts/AuthContext";

export default function LoginScreen({ navigation, route }: any) {
  const { isSignedIn, toggleIsSignedIn } = useAuthContext();

  return (
    <View className="flex-1 bg-primary-500">
      <Header title={"SpaceCraft"} />
      <View className={"px-4 py-8 gap-6"}>
        <TextInput
          mode={"flat"}
          underlineStyle={styles.buttonUnderline}
          className={"bg-primary-200"}
          placeholder={"Email"}
        />
        <View>
          <PasswordInput />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Terms")}>
          <Text className="text-primary-300 underline">
            by login you accept the Terms and Conditions
          </Text>
        </TouchableOpacity>

        <Button
          onPress={toggleIsSignedIn}
          className={"bg-secondary-300 rounded-md py-2"}
        >
          <Text className={"text-center text-white"}>Login</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonUnderline: {
    backgroundColor: "#FF9F54"
  }
});
