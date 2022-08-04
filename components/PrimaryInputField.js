import { useState } from 'react';
import { ProgressViewIOSComponent, StyleSheet } from 'react-native'
import { View, Modal, Image, TextInput } from 'react-native';

function PrimaryInputField(props) {

    function passUserInput(input) {
        props.catchUserInput(input)
    }

    return (


        <TextInput placeholder={props.children} style={styles.inputField} autoCapitalize='none' autoCorrect={false}
            onChangeText={passUserInput} value={props.clearInput} placeholderTextColor={props.placeholderColor} />


    )

}

export default PrimaryInputField;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'yellow'

    },
    inputField: {
        width: 301,
        height: 50,
        borderBottomColor: '#1A805D',
        borderBottomWidth: 2,
        fontSize: 15,
        margin: 5,
        padding: 5,
        paddingBottom: -15

    }
})