import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

var ready = true

export default function OrderButton(props, { navigation }) {

    ready = props.status

    return (

        <TouchableOpacity style={ready ? styles.ready : styles.unready} backgroundColor={"black"}>
            <Text style={ready ? { color: "black" } : { color: "rgb(156, 156, 156)" }} >
                {props.text}
            </Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

    ready: {
        width: windowWidth - 13,
        borderRadius: 15,
        height: windowHeight * 0.09,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 13,
        backgroundColor: 'rgb(0, 153, 230)'


    },

    unready: {
        width: windowWidth - 13,
        borderRadius: 15,
        height: windowHeight * 0.09,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 13,
        backgroundColor: 'rgb(237, 237, 237)',

    }
})