import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
var icon = "../components/icons/locationOpt.png"



const buttonDiameter = 80


function Option(props) {



    return (
        <TouchableOpacity style={styles.button} onPress={props.handleClick}>
            <Image style={styles.image} source={require("../components/icons/peopleOpt.png")} />
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
        marginBottom: 20


    },
    image: {
        width: 60,
        height: 60,
        marginTop: 8
    }

})

export default Option;