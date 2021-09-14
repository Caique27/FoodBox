import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';



function help({ navigation }) {

    return (
        <TouchableOpacity id="help" style={styles.helpBtn} activeOpacity={0.3} >
            <Text style={styles.icon}>?</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    helpBtn: {

        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        borderColor: "rgb(128, 191, 255)",
        borderWidth: 2,
        marginLeft: "38%",
        marginRight: "4%",
        marginTop: "5%"




    },
    icon: {
        fontSize: 15,
        fontWeight: "600",
        color: 'rgb(0, 153, 230)'
    }
})
export default help;
