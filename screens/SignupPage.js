import { useState } from 'react';
import { StyleSheet } from 'react-native'
import { View, Modal, Image, Text } from 'react-native';
import PrimaryButtons from '../components/PrimaryButtons';
import PrimaryInputField from '../components/PrimaryInputField';
import NavIcon from '../components/NavIcon';

function LoginPage(props) {
    const [loginModal, toggleLoginModal] = useState(false)

    const [email, setEmail] = useState('');
    const [fName, setfName] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const [eplaceholder, setelaceholder] = useState('Email')
    const [fplaceholder, setfPlaceholder] = useState('Full Name')
    const [uplaceholder, setuPlaceholder] = useState('Username')
    const [pplaceholder, setpPlaceholder] = useState('Password')
    const [uplaceholderColor, setuplaceholderColor] = useState('#AAAAAA')
    const [pplaceholderColor, setpplaceholderColor] = useState('#AAAAAA')


    function catchEmail(input) {
        setEmail(input)
        // console.log(username)
    }

    function closePage() {
        props.closePage()
    }
    function catchFullname(input) {
        setfName(input)
        // console.log(username)
    }

    function catchUsername(input) {
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
            setEmail('')
            setfName('')
            setPassword('')
            setUsername('')

        }
    }

    return (
        <Modal visible={props.sModal} animationType='slide'>
            <View style={styles.container}>
                <NavIcon action={closePage} />
                <Image source={require('../assets/images/signup-image.png')} style={styles.image} />
                <Text style={styles.text}>Sign up</Text>

                <PrimaryInputField placeholderColor={uplaceholderColor} catchUserInput={catchEmail}
                    clearInput={email}>{eplaceholder}</PrimaryInputField>

                <PrimaryInputField
                    catchUserInput={catchFullname} clearInput={fName} >{fplaceholder}</PrimaryInputField>

                <PrimaryInputField placeholderColor={uplaceholderColor} catchUserInput={catchUsername}
                    clearInput={username}>{uplaceholder}</PrimaryInputField>

                <PrimaryInputField
                    catchUserInput={catchPassword} clearInput={password} >{pplaceholder}</PrimaryInputField>

                <Text style={styles.p}>By signing up, you are agreeing to our
                    Terms & Conditions and Privacy Policy.</Text>
                <PrimaryButtons action={checkdetails}><Text style={styles.buttonText}>Sign up</Text></PrimaryButtons>

            </View>
        </Modal >
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingVertical: 100,
        paddingHorizontal: 50,
        alignItems: 'center',


    },
    text: {
        fontSize: 50,
        fontWeight: '700',
        color: '#10815C',
        textAlign: 'center',
        alignSelf: 'flex-start',
    },
    p: {
        fontSize: 14,
        color: '#37474F',
        alignSelf: 'flex-end',
        marginBottom: 50,
        marginTop: 10
    },
    buttonText: {
        color: 'white'
    },
    image: {
        marginBottom: 10
    }
})

export default LoginPage;