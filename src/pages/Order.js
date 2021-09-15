import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { SwipeablePanel } from 'rn-swipeable-panel';
import { nome } from "./Login.js"
import HelpBtn from "./components/HelpButton.js"
import OrderBtn from "./components/OrderButton"
import greeting from "../data/time.js"
import Caique from "./components/PanelCaique"
import Joao from "./components/PanelJoao"
userName = nome
userName = userName.charAt(0).toUpperCase() + userName.slice(1);//Capitalizes the firs letter


function Order({ navigation }) {


    const [name, setName] = useState(userName)
    const [button, setButton] = useState(false)

    //  -------------------Panel Configs------------------
    const Panel = (content) => {

        setDefaultPanel(content)

        openPanel()
    }

    const [defaultPanel, setDefaultPanel] = useState(Caique)

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

                <Button title="Painel Caique" onPress={() => Panel(Caique)}></Button>
                <Button title="Painel João" onPress={() => Panel(Joao)}></Button>


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
    name: {

    }
});


export default Order;