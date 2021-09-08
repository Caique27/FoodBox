import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { nome } from "./Login.js"
import greeting from "../data/time.js"
userName = nome
userName = userName.charAt(0).toUpperCase() + userName.slice(1);//Capitalizes the firs letter


function Order({ navigation }) {


    const [name, setName] = useState(userName)
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View id='header'>
                <Text>
                    {greeting()}
                </Text>
                <Text id='name'>
                    Caique
                </Text>
            </View>
            <View id='order'>
            </View>
            <View id='footer'>
                <TouchableOpacity style={styles.orderBtn} >
                    <Text  >
                        Fazer pedido
                    </Text>
                </TouchableOpacity>
            </View>
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
    orderBtn: {
        width: 360,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "rgb(0, 128, 255)",

    },
});


export default Order;