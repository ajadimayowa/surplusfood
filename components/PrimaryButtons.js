import { useState } from "react";
import { Pressable, View, StyleSheet, Text } from "react-native";

function PrimaryButtons(props) {
    return (


        <Pressable onPress={props.action} style={({ pressed }) => pressed ? [styles.buttonPressed, styles.testStyle, props.style] : [styles.button, props.style]}>
            <View>
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </Pressable>

    )

}


const styles = StyleSheet.create({
    button: {
        width: 330,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#10815C',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 7
    },
    text: {
        fontSize: 18,
        fontWeight: '700',
        color: '#114333'
    },
    buttonPressed: {
        opacity: 0.8
    },
    testStyle: {
        width: 330,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 7,
        backgroundColor: '#F0ECEC'
    }
})

export default PrimaryButtons;