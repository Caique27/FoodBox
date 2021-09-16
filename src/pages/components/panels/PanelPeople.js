import React from 'react';
import { View, Text, StyleSheet } from 'react-native';




function People() {
    return (
        <View style={styles.container} >

            <View style={styles.sliderView} />

            <Text >número de pessoas</Text>




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
    sliderView: {
        backgroundColor: "yellow",
        width: 10,
        height: 10
    }
})

export default People;