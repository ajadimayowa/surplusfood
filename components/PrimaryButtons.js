import { useState } from "react";
import { Pressable, View, StyleSheet, Text, useWindowDimensions }
    from "react-native";

function PrimaryButtons({ action, style, children }) {
    const { width } = useWindowDimensions()
    return (


        <Pressable onPress={action} style={({ pressed }) => pressed ? [styles.buttonPressed,
        styles.testStyle, style, { width: width < 360 ? 150 : 330 }] : [styles.button, style, { width: width < 360 ? 150 : 330 }]}>
            <View>
                <Text style={styles.text}>{children}</Text>
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
        color: '#114333',
        fontFamily: 'montserat-bold'
    },
    buttonPressed: {
        opacity: 0.7
    },
    testStyle: {
        width: 330,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 7,
        backgroundColor: '#10815C',

    }
})

export default PrimaryButtons;