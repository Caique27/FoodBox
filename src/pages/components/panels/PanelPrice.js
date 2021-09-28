import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import OrderBtn from "../OrderButton"
//var shownValue = 20

const Price = (props) => {

    // function Update(value) {
    //    props.handleClick
    // }
    const Update = (value) => {

        props.action(value)
        setShownValue(value)
    }
    const [shownValue, setShownValue] = useState(20)
    return (
        <View style={{ alignItems: "center" }} >
            <Text style={{ fontSize: 18, fontWeight: "500", marginTop: 15, marginBottom: 20, }}>
                Quanto quer gastar ?
            </Text>
            <Text style={{ color: "#2CA3FF", fontSize: 30, marginBottom: 15 }}>
                R$
                <Text style={{ fontSize: 40 }}>{shownValue}
                </Text>
            </Text>
            <Slider
                style={{ width: 300, }}
                maximumValue={100}
                minimumValue={0}
                minimumTrackTintColor="#2CA3FF"
                maximumTrackTintColor="#cccccc"
                step={10}
                value={shownValue}
                onValueChange={
                    (sliderValue) => Update(sliderValue)


                }


            />
            <View id="button" style={{
                position: "absolute", bottom: -110
            }}>
                <OrderBtn text="Fazer pedido" status={props.status} />
            </View>

        </View>

    );
};

export default Price;