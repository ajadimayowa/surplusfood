import { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native'
import { View, Modal, Image, Text } from 'react-native';
import PrimaryButtons from '../components/PrimaryButtons';
import PrimaryInputField from '../components/PrimaryInputField';
import NavIcon from '../components/NavIcon';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import PressableTexts from '../components/PressableTexts';
import SignupPage from './SignupPage';

function LoginPage({ back }) {
    const [forgotPasswordModal, onforgotPasswordModal] = useState(false)
    const [signUpModal, onsignUpModal] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [uplaceholder, setPlaceholder] = useState('Username/email')
    const [pplaceholder, setpPlaceholder] = useState('Password')
    const [uplaceholderColor, setuplaceholderColor] = useState('#AAAAAA')
    const [pplaceholderColor, setpplaceholderColor] = useState('#AAAAAA')


    function offRessetModal() {
        onforgotPasswordModal(!forgotPasswordModal)

    }

    function onForgotpasswordModal() {
        onforgotPasswordModal(true)

    }

    function onSignupModal() {
        onsignUpModal(!signUpModal)
    }

    function closePage() {
        onsignUpModal(false)
    }


    function catchUserUsername(input) {
        setUsername(input)
        // console.log(username)
    }
    function catchPassword(input) {
        setPassword(input)
        // console.log(username)
    }

    function checkdetails() {
        if (username != '' && password == '') {
            setpplaceholderColor('red')
            setuplaceholderColor(uplaceholderColor)
            console.log('Enter Password')
        } else if (password != '' && username == '') {
            setuplaceholderColor('red')
            setpplaceholderColor(pplaceholderColor)
            console.log('Enter Username')
        } else if (username == '' && password == '') {
            setpplaceholderColor('red')
            setuplaceholderColor('red')
            console.log('Empty Fields')
        } else {
            console.log('Username is :', username, 'And Password is:', password)
            setUsername('')
            setPassword('')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <NavIcon action={back.bind(this, null)} />
                <Image source={require('../assets/images/login-image.png')} style={styles.image} />
                <Text style={styles.text}>Login</Text>
                <ForgotPasswordScreen onModal={forgotPasswordModal} closePage={offRessetModal} />
                <PrimaryInputField placeholderColor={uplaceholderColor} catchUserInput={catchUserUsername}
                    clearInput={username}>{uplaceholder}</PrimaryInputField>
                <View><Text>{''}</Text></View>
                <PrimaryInputField placeholderColor={pplaceholderColor} catchUserInput={catchPassword} clearInput={password} >{pplaceholder}</PrimaryInputField>
                <View style={{
                    flexDirection: 'row', justifyContent: 'flex-end',
                    width: '100%', paddingHorizontal: 20
                }}><Text style={styles.p}>Forgot password? {' '}</Text>
                    <PressableTexts action={onForgotpasswordModal}><Text style={styles.pLink}>Reset</Text></PressableTexts>
                </View>


                <PrimaryButtons action={checkdetails}><Text style={styles.buttonText}>Login</Text></PrimaryButtons>
                <View style={{
                    flexDirection: 'row', justifyContent: 'center',
                    width: '100%', paddingVertical: 30
                }}><Text style={styles.p}>A new member?{' '}</Text>
                    <PressableTexts action={back.bind(this, 'signup')}><Text style={styles.pLink}>Register</Text></PressableTexts>
                </View>

            </View>
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
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
        marginBottom: 25,

    },

    p: {
        fontSize: 14,
        justifyContent: 'center',
        marginBottom: 60,
        flexDirection: 'row'
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

export default LoginPage;