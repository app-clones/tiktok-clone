import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import firebase from "firebase/app";

import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Hello World!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
