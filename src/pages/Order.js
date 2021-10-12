// React Native Imports
import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { SwipeablePanel } from 'rn-swipeable-panel'
import { nome } from "./Login.js"
// Components Imports
import OptionBtn from "./components/OptionBtn"
import HelpBtn from "./components/HelpButton.js"
import OrderBtn from "./components/OrderButton"
import greeting from "../data/time.js"
import People from "./components/panels/PanelPeople"
import Price from "./components/panels/PanelPrice"
import Unlike from "./components/panels/PanelUnlike"
// Images Import

//userName = nome
//userName = userName.charAt(0).toUpperCase() + userName.slice(1);//Capitalizes the firs letter



function Order(props, { navigation }) {


    const [name, setName] = useState(props.userName)
    const [button, setButton] = useState(true)
    const [people, setPeople] = useState(5);
    const [price, setPrice] = useState(20)

    //  -------------------Panel Configs------------------
    const Panel = (content) => {
        if (content == Price) {
            setPanelProps(smallProps)
            setDefaultPanel(<Price status={button} action={(valor) => setPrice(valor)} ></Price>)
        }
        else if (content == People) {
            setPanelProps(smallProps)
            setDefaultPanel(<People status={button} action={(valor) => setPeople(valor)} ></People>)
        } else if (content == Unlike) {
            setPanelProps(bigProps)
            setDefaultPanel(<Unlike status={button}  ></Unlike>)

        }


        openPanel()
    }

    const [defaultPanel, setDefaultPanel] = useState()


    const [panelProps, setPanelProps] = useState(smallProps);

    const bigProps = {
        fullWidth: true,
        onlySmall: false,
        onlyLarge: true,
        openLarge: true,
        closeOnTouchOutside: true,
        showCloseButton: true,
        onClose: () => closePanel(),
        onPressCloseButton: () => closePanel(),

    }
    const smallProps = {
        fullWidth: true,
        onlySmall: true,
        onlyLarge: false,
        openLarge: false,
        closeOnTouchOutside: true,
        showCloseButton: true,
        onClose: () => closePanel(),
        onPressCloseButton: () => closePanel(),

    }
    const [isPanelActive, setIsPanelActive] = useState(false);

    function openPanel() {

        setIsPanelActive(true);
    };

    const closePanel = () => {
        setIsPanelActive(false);
    };
    //  -------------------End of Panel Configs------------------


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


                <View id="info" style={styles.info}>
                    <View id="price" style={{ flexDirection: "row", }} >

                        <Image
                            style={{ width: 35, height: 35, marginTop: 2 }}
                            source={require('../images/icons/priceIcon.png')}
                        />
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{
                                fontWeight: "600",
                                fontSize: 30,

                            }}>
                                {price}
                            </Text>
                            <Text style={{
                                fontWeight: "400",
                                fontSize: 15,

                            }}>
                                Preço
                            </Text>

                        </View>

                    </View>
                    <View id="people" style={{ flexDirection: "row", marginLeft: 20 }} >

                        <Image
                            style={styles.icons}
                            source={require('../images/icons/peopleIcon.png')}
                        />
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{
                                fontWeight: "600",
                                fontSize: 30,
                                marginLeft: 10

                            }}>
                                {people}
                            </Text>
                            <Text style={{
                                fontWeight: "400",
                                fontSize: 15,

                            }}>
                                Pessoas
                            </Text>

                        </View>

                    </View>

                    <View id="time" style={{ flexDirection: "row" }} >

                        <Image
                            style={styles.icons}
                            source={require('../images/icons/timeIcon.png')}
                        />
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row", marginLeft: 6, }}>
                                <Text style={{
                                    fontWeight: "600",
                                    fontSize: 30,

                                }}>
                                    50
                                </Text>
                                <Text style={{ fontSize: 15, marginTop: 15 }}>
                                    min
                                </Text>
                            </View>

                            <Text style={{
                                fontWeight: "400",
                                fontSize: 15,

                            }}>
                                Tempo
                            </Text>

                        </View>

                    </View>
                </View>
                <Text style={styles.instructions}>
                    Escolha os detalhes do pedido
                </Text>
                <View id='options' style={styles.options}>
                    <OptionBtn handleClick={() => Panel(Price)} />
                    <OptionBtn handleClick={() => Panel(People)} />
                    <OptionBtn handleClick={() => Panel(Unlike)} />
                    <OptionBtn />
                    <OptionBtn />
                    <OptionBtn />

                </View>





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
        left: 21,
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
        marginTop: 35,
        justifyContent: "space-evenly"



    },
    info: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingBottom: 10,
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: "rgb(191, 191, 191)",


    },
    icons: {
        width: 35,
        height: 35

    },
    instructions: {
        fontSize: 15,
        fontWeight: "500",
        marginLeft: "18%",
        marginTop: 15
    }
});


export default Order;