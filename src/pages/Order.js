import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { nome } from "./Login.js"
var name = nome
name = name.charAt(0).toUpperCase() + name.slice(1);//Capitalizes the firs letter

function Order({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text >
                Boa noite, {name}
            </Text>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
});


export default Order;