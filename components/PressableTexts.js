import { useState } from "react";
import { Pressable, View, StyleSheet, Text } from "react-native";

function PressableTexts(props) {
    return (


        <Pressable onPress={props.action} style={({ pressed }) => pressed ? styles.buttonPressed : styles.text}>

            <View><Text>{props.children}</Text></View>

        </Pressable>

    )

}


const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: '#114333'
    },
    buttonPressed: {
        opacity: 0.7
    },
})

export default PressableTexts;