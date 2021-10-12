import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import OrderBtn from "../OrderButton.js"
const windowHeight = Dimensions.get('window').height;


const Unlike = (props) => {


  return (
    <View style={{ flexDirection: "column", justifyContent: "space-evenly" }}>



      <View id="list" style={{ backgroundColor: "yellow", height: windowHeight * 0.7, }}>

      </View>






    </View>

  );
};



export default Unlike;