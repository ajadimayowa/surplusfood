import { useState } from "react";
import { Pressable, View, StyleSheet, Text, Image } from "react-native";

function NavIcon({ action }) {
    return (


        <Pressable onPress={action} style={({ pressed }) => pressed ? [styles.buttonBack] : [styles.button]}>
            <Image source={require('../assets/icons/navicon-back.png')} />
        </Pressable>

    )

}


const styles = StyleSheet.create({
    button: {
        width: 330,
        height: 50,
    },
    buttonBack: {
        width: 320,
        height: 50,
    },
})

export default NavIcon;