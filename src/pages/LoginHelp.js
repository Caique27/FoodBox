import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { StatusBar } from "expo-status-bar";


function LoginHelp({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.text}>Nome:Insira seu nome</Text>
            <Text style={styles.text}>Senha:admin</Text>
            <Button
                title='Voltar.'
                onPress={() => navigation.navigate('Login')}
            />


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

    }

});


export default LoginHelp;