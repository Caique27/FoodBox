import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
var Valor = ""

const Price = (props) => {
    const [sliderValue, setSliderValue] = useState(Valor);



    function set(valor) {
        Valor = valor
        setSliderValue(valor)
    }

    return (
        <View >
            <Text>O valor é : {sliderValue}</Text>
            <Slider

                maximumValue={100}
                minimumValue={0}
                minimumTrackTintColor="#307ecc"
                maximumTrackTintColor="#000000"
                step={1}
                value={sliderValue}
                onValueChange={(input) => set(input)
                }

            />
        </View>
    );
};

export default Price;