import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import firebase from "firebase/app";

firebase.initializeApp({
    apiKey: "AIzaSyA9BP3wGDJEHWIJ4f5WZYahKNftd0RDaBI",
    authDomain: "tiktok-clone-b29c0.firebaseapp.com",
    databaseURL: "https://tiktok-clone-b29c0-default-rtdb.firebaseio.com",
    projectId: "tiktok-clone-b29c0",
    storageBucket: "tiktok-clone-b29c0.appspot.com",
    messagingSenderId: "834280486754",
    appId: "1:834280486754:web:44cb3ce8860cd4a7855e3b"
});

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
