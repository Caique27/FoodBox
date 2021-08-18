import React from 'react';
import { Pressable, Text, View, StyleSheet, Image, Button } from 'react-native';


function HomeScreen({ navigation }) {
    const texto = 'aiai'
    return (
        <View style={styles.container}>
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
        fontSize: 40,
        position: 'absolute',
        top: '41%',
        bottom: 0,
        left: '40%',
        right: 0,
    },
    image: {

        width: '20%',
        height: '20%',
        position: 'absolute',
        top: '34.5%',
        bottom: 0,
        left: '16%',
        right: 0,

    },
    button: {
        backgroundColor: 'black',
        color: 'black',
        width: '80%',
        height: '10%',
        position: 'absolute',
        top: '78%',
        bottom: 0,
        left: '10%',
        right: 0,

    }
});


export default HomeScreen;