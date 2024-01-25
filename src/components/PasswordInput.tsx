import {Button, TextInput, Text} from "react-native-paper";
import {StyleSheet, View} from "react-native";
import {useState} from "react";

export default function PasswordInput({onChangeText, value, placeholder}) {
    const [hidePassword, setHidePassword] = useState(true)
    return (
        <View className={"flex-row relative justify-center w-full"}>
            <TextInput secureTextEntry={hidePassword} underlineStyle={styles.buttonUnderline} mode={'flat'}
                       className={"bg-primary-200 w-full"} placeholder={"Password"}/>
            <Button
                className={"items-center justify-center bg-primary-200 rounded-none absolute right-0 top-0 h-full aspect-square"}
                onPress={() => setHidePassword(!hidePassword)} icon={hidePassword ? "eye" : "eye-off"}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonUnderline: {
        backgroundColor: '#FF9F54',
    }
})