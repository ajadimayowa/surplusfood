import { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native'
import { View, Modal, Image, Text } from 'react-native';
import PrimaryButtons from '../components/PrimaryButtons';
import PrimaryInputField from '../components/PrimaryInputField';
import NavIcon from '../components/NavIcon';

function ForgotPasswordScreen(props) {
    const [email, setEmail] = useState('');
    const [eplaceholder, setePlaceholder] = useState('Email/Phone Number')
    const [eplaceholderColor, seteplaceholderColor] = useState('#AAAAAA')

    function backToPreviousPage() {
        props.closePage()

    }


    function catchEmail(input) {
        setEmail(input)
        // console.log(username)
    }

    function checkdetails() {
        if (email != '') {
            console.log('Your email is :', email)
            console.log('Email sent')
            setEmail('');
        } else {
            seteplaceholderColor('red')
            console.log('Enter email')
        }
    }

    return (
        <Modal visible={props.onModal} animationType='slide'>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <NavIcon action={backToPreviousPage} />
                    <Image source={require('../assets/images/forgotpassword-image.png')} style={styles.image} />
                    <Text style={styles.text}>Forgot
                        Password?</Text>

                    <Text style={styles.p2}>No need to panic! Kindly enter the email
                        address associated with your account.</Text>

                    <PrimaryInputField placeholderColor={eplaceholderColor} catchUserInput={catchEmail}
                        clearInput={email}>{eplaceholder}</PrimaryInputField>
                    <PrimaryButtons action={checkdetails}><Text style={styles.buttonText}>Submit</Text></PrimaryButtons>


                </View>
            </SafeAreaView>
        </Modal >
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingVertical: 50,
        paddingHorizontal: 50,
        alignItems: 'center',


    },
    text: {
        fontSize: 50,
        fontWeight: '700',
        color: '#10815C',
        textAlign: 'center',
        alignSelf: 'flex-start',
        marginBottom: 25
    },

    p: {
        fontSize: 14,
        color: '#10815C',
        marginBottom: 60,
    },
    p2: {
        fontSize: 14,
        marginBottom: 60,
        marginTop: 10
    },
    pLink: {
        fontSize: 14,
        color: '#10815C',
        alignSelf: 'flex-end',
        marginBottom: 60,

    },
    buttonText: {
        color: 'white'
    },
    image: {
        marginBottom: 20
    }
})

export default ForgotPasswordScreen;