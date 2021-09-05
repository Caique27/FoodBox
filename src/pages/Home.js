import React from 'react';
import { Pressable, Text, View, StyleSheet, Image, Button } from 'react-native';
import { StatusBar } from "expo-status-bar";


function HomeScreen({ navigation }) {
    setTimeout(function () { navigation.navigate('Login') }, 1000);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.text}>FoodBox</Text>
            <Image
                style={styles.image}
                source={require('../images/Logo.jpg')}
            />
            <Pressable style={styles.button}
                onPress={() => navigation.navigate('Login')}
            >
            </Pressable >
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
    text: {
        fontSize: 45,
        color: '#0862A0',
        fontFamily: 'Avenir Next',
        fontWeight: 'normal',
        position: 'absolute',
        top: '43%',
        bottom: 0,
        left: '35%',
        right: 0,
    },
    image: {

        width: '21%',
        height: '13%',
        position: 'absolute',
        top: '40.5%',
        bottom: 0,
        left: '13%',
        right: 0,

    },
    button: {
        backgroundColor: '#fff',
        color: 'black',
        width: '80%',
        height: '10%',
        position: 'absolute',
        top: '78%',
        bottom: 0,
        left: '10%',
        right: 0,

    },

});


export default HomeScreen;