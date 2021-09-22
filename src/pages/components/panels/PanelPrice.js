import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
var shownValue;

const Price = (props) => {

    // function Update(value) {
    //    props.handleClick
    // }
    const Update = (value) => {

        props.action(value)
        shownValue = value
    }

    return (
        <View >
            <Text>
                {props.text}
            </Text>
            <Slider

                maximumValue={100}
                minimumValue={0}
                minimumTrackTintColor="#307ecc"
                maximumTrackTintColor="#000000"
                step={10}
                value={shownValue}
                onValueChange={
                    (sliderValue) => Update(sliderValue)


                }


            />
        </View>
    );
};

export default Price;