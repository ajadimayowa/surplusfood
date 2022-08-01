import { useState } from 'react';
import { StyleSheet } from 'react-native'
import { View, Modal, Image, Text } from 'react-native';
import PrimaryButtons from '../components/PrimaryButtons';

function LoginPage(props) {
    const [loginModal, toggleLoginModal] = useState(false)


    function check() {
        console.log('here')
    }

    return (
        <Modal visible={props.state} animationType='slide'>
            <View style={styles.container}>
                <Text style={styles.text}>Login Page here</Text>
                <Image source={require('../assets/images/login-image.png')} />
                <PrimaryButtons action={check}><Text style={styles.buttonText}>Return</Text></PrimaryButtons>

            </View>
        </Modal >
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingVertical: 100,
        alignItems: 'center'

    },
    text: {
        fontSize: 30,
        fontWeight: '600',
        color: '#10815C',
        textAlign: 'center'
    },
    buttonText: {
        color: 'white'
    }
})

export default LoginPage;