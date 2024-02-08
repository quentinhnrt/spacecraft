import { TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { useState } from "react";

export default function PasswordInput() {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <View className={"flex-row relative justify-center w-full"}>
      <TextInput
        secureTextEntry={hidePassword}
        underlineStyle={styles.buttonUnderline}
        mode={"flat"}
        className={"bg-primary-200 w-full"}
        placeholder={"Password"}
        right={
          <TextInput.Icon
            onPress={() => setHidePassword(!hidePassword)}
            icon={hidePassword ? "eye" : "eye-off"}
            testID="passwordInputIcon"
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonUnderline: {
    backgroundColor: "#FF9F54"
  }
});
