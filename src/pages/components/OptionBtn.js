import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;



const buttonDiameter = 80


const Option = (props) => {



    return (
        <TouchableOpacity style={styles.button} onPress={props.handleClick}>
            <Image style={styles.image} source={props.icon} />
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    button: {
        width: windowWidth * 0.23,
        height: 80,
        borderRadius: 100,
        backgroundColor: "#1A97D0",
        alignItems: 'center',
        margin: windowWidth * 0.031,
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
        width: 50,
        height: 50,
        marginTop: 12
    }

})

export default Option;