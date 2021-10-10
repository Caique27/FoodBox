import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import OrderBtn from "../OrderButton.js"



const Unlike = (props) => {


  return (
    <View>


      <Text>
        Vai corinthians
      </Text>
      <View id="list">

      </View>

      <View id="button" style={{
        position: "absolute", bottom: "-3450%"
      }}>
        <OrderBtn text="Fazer pedido" status={props.status} />
      </View>


    </View>

  );
};



export default Unlike;