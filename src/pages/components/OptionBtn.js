import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
var icons = ["../components/icons/locationOpt.png", "../components/icons/priceOpt.png"]



const buttonDiameter = 80


function Option(props) {



    return (
        <TouchableOpacity style={styles.button} onPress={props.handleClick}>
            <Image style={styles.image} source={require("../components/icons/unlikeOpt.png")} />
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    button: {
        width: buttonDiameter,
        height: buttonDiameter,
        borderRadius: 100,
        backgroundColor: "#1A97D0",
        alignItems: 'center',
        margin: 12,
        marginBottom: 20,
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.63,
        shadowRadius: 12,

        elevation: 21,




    },
    image: {
        width: 60,
        height: 60,
        marginTop: 8
    }

})

export default Option;