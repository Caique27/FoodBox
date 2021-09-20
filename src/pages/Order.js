import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { SwipeablePanel } from 'rn-swipeable-panel'
import { nome } from "./Login.js"
import Slider from '@react-native-community/slider';
import OptionBtn from "./components/options/OptionBtn"
import HelpBtn from "./components/HelpButton.js"
import OrderBtn from "./components/OrderButton"
import greeting from "../data/time.js"
import People from "./components/panels/PanelPeople"
import Price from "./components/panels/PanelPrice"
userName = nome
userName = userName.charAt(0).toUpperCase() + userName.slice(1);//Capitalizes the firs letter



function Order({ navigation }) {


    const [name, setName] = useState(userName)
    const [button, setButton] = useState(false)
    const [people, setPeople] = useState(5);
    const [price, setPrice] = useState(20)

    //  -------------------Panel Configs------------------
    const Panel = (content) => {
        if (content == Price) {
            setDefaultPanel(<Price text=" texto do Preço" action={(valor) => setPrice(valor)} Valor={sliderValue}></Price>)
        }
        else if (content == People) {
            setDefaultPanel(<People text="Pessoas" ></People>)
        }


        openPanel()
    }

    const [defaultPanel, setDefaultPanel] = useState(People)

    const [panelProps, setPanelProps] = useState({
        fullWidth: true,
        onlySmall: true,
        closeOnTouchOutside: true,
        showCloseButton: true,
        onClose: () => closePanel(),
        onPressCloseButton: () => closePanel(),

    });
    const [isPanelActive, setIsPanelActive] = useState(false);

    function openPanel() {
        setIsPanelActive(true);
    };

    const closePanel = () => {
        setIsPanelActive(false);
    };
    //  -------------------End of Panel Configs------------------
    const [sliderValue, setSliderValue] = useState(15);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View id='header' style={styles.header}>
                <Image style={styles.image} source={require("../images/Logo.jpg")} />

                <View style={styles.message}>
                    <View>
                        <Text style={styles.greeting}>
                            {greeting()}
                        </Text>
                    </View>


                    <View id='name' style={styles.name} >
                        <Text style={{
                            fontWeight: "500",
                            fontSize: 25,
                        }}>
                            Caique
                        </Text>
                    </View>
                </View>


                <HelpBtn />
            </View>
            <View id='order' style={styles.order}>
                <Button title="Press me" onPress={() => { setButton(button ? false : true) }}></Button>

                <Button title="Painel Pessoas" onPress={() => Panel(People)}></Button>
                <Button title="Painel Preço" onPress={() => Panel(Price)}></Button>
                <View id='options' style={styles.options}>
                    <OptionBtn handleClick={() => Panel(Price)} />
                    <OptionBtn />
                    <OptionBtn />
                    <OptionBtn />
                    <OptionBtn />
                    <OptionBtn />

                </View>

                <Text>
                    {price}
                </Text>



            </View>
            <View id='footer'>
                <OrderBtn text="Fazer pedido" status={button} />
            </View>
            <SwipeablePanel {...panelProps} isActive={isPanelActive}>
                {defaultPanel}

            </SwipeablePanel>

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    header: {

        marginTop: "10%",
        position: "absolute",
        left: "2%",
        top: "2%",
        borderBottomWidth: 1,
        borderBottomColor: "rgb(191, 191, 191)",
        flexDirection: "row",
        paddingBottom: "3%",




    },
    order: {

        height: '70%',
        width: '90%',
        marginTop: "30%"
    },

    orderBtn: {
        width: 370,
        borderRadius: 15,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 13,
        backgroundColor: "rgb(0, 128, 255)",

    },

    image: {
        width: 70,
        height: 70,

    },

    greeting: {
        fontSize: 18,
        fontWeight: "300",

    },
    message: {
        marginLeft: "1%",
        marginTop: "3%"
    },
    options: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 15


    }
});


export default Order;