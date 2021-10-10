import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';


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
        width: 400,
        borderRadius: 15,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 13,
        backgroundColor: 'rgb(0, 153, 230)'


    },

    unready: {
        width: 400,
        borderRadius: 15,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 13,
        backgroundColor: 'rgb(237, 237, 237)',

    }
})