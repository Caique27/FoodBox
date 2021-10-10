import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import OrderBtn from "../OrderButton.js"



const People = (props) => {
    const [shownValue, setShownValue] = useState(5)
    const Update = (value) => {

        props.action(value)
        setShownValue(value)


    }


    return (
        <View style={{ alignItems: "center" }} >
            <Text style={{ fontSize: 18, fontWeight: "500", marginTop: 15, marginBottom: 20, }}>
                Para quantas pessoas ?
            </Text>
            <View style={{ color: "#2CA3FF", fontSize: 30, marginBottom: 15, flexDirection: "row" }}>
                <Image
                    style={{ width: 30, height: 30, marginTop: 10, marginRight: 3 }}
                    source={require('../../../images/icons/lightPeopleIcon.png')}
                />
                <Text style={{ fontSize: 40, color: "#2CA3FF" }}>
                    {shownValue}
                </Text>
            </View>
            <Slider
                style={{ width: 300, }}
                maximumValue={10}
                minimumValue={0}
                minimumTrackTintColor="#2CA3FF"
                maximumTrackTintColor="#cccccc"
                step={1}
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



export default People;