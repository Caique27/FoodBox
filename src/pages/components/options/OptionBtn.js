import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const buttonDiameter = 80


function People(props) {

    return (
        <TouchableOpacity style={styles.button} onPress={props.handleClick}>

        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    button: {
        width: buttonDiameter,
        height: buttonDiameter,
        borderRadius: 100,
        backgroundColor: "#2CA3FF",
        alignItems: 'center',
        margin: 15,
        marginBottom: 20


    },

})

export default People;