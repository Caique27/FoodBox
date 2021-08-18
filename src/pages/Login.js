import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login Screen</Text>
            <Button
                title="Go back"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40,
    },
    text: {
        fontSize: 30,
    }
});



export default Login;