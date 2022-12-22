import React from "react";
import { View,Text } from "react-native";

export default function Table(props){

    return(
        <View>
            <Text> {props.name} </Text>
            <Text> {props.age} </Text>
        </View>
    )
}