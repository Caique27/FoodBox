import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    KeyboardAvoidingView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
var nome = ""







const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const GoToOrder = () => {

        /*    if (password == "admin") {
                navigation.navigate('Order')
            } else {
                alert("Wrong Password.")
            } */
        navigation.navigate('Order')
    }

    nome = email
    return (
        <DismissKeyboard>
            <KeyboardAvoidingView style={styles.container}
                behavior={"padding"}
                keyboardVerticalOffset={60}>
                <StatusBar style="auto" />
                <Text style={styles.logoText}>FoodBox
                </Text>
                <Image style={styles.image} source={require("../images/Logo.jpg")} />


                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email ou Nome."
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Senha."
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <TouchableOpacity >
                    <Text style={styles.forgot_button}>Como Fazer Login?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn} onPress={GoToOrder}>
                    <Text style={styles.loginText} >LOGIN
                    </Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </DismissKeyboard>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
        width: '40%',
        height: '20%',
        marginBottom: 30,

    },

    inputView: {
        backgroundColor: "rgb(128, 191, 255)",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        marginTop: 10,

        alignItems: "center",
    },

    TextInput: {

        height: 50,
        width: "100%",
        padding: 10,
        textAlign: "center"
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "rgb(0, 128, 255)",
    },
    instructions: {
        fontSize: 30,
        marginBottom: 20,
    },
    logoText: {
        fontSize: 45,
        color: '#0862A0',
        fontFamily: 'Avenir Next',
        fontWeight: 'normal',
        right: 0,
        marginBottom: 10
    }
});
export default Login;
export var nome;