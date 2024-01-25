import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from "react-native-paper";
import Header from "~/components/Header";
import PasswordInput from "~/components/PasswordInput";

export default function App() {
    return (
        <View className="flex-1 bg-primary-500">
            <Header title={"SpaceCraft"}/>
            <View className={"px-4 py-8 gap-6"}>
                <TextInput mode={'flat'} underlineStyle={styles.buttonUnderline} className={"bg-primary-200"} placeholder={"Email"}/>
                <View>
                    <PasswordInput/>
                </View>
                <Button className={"bg-secondary-300 rounded-md py-2"}>
                    <Text className={"text-center text-white"}>Login</Text>
                </Button>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonUnderline: {
        backgroundColor: '#FF9F54',
    }
})
