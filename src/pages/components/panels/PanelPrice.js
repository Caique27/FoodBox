import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

const Price = (props) => {

    // function Update(value) {
    //    props.handleClick
    // }
    const Update = (value) => {

        props.action(value)
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
                step={1}
                value={props.Valor}
                onValueChange={
                    (sliderValue) => Update(sliderValue)


                }


            />
        </View>
    );
};

export default Price;