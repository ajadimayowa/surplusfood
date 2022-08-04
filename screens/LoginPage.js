import { useState } from 'react';
import { StyleSheet } from 'react-native'
import { View, Modal, Image, Text } from 'react-native';
import PrimaryButtons from '../components/PrimaryButtons';
import PrimaryInputField from '../components/PrimaryInputField';
import NavIcon from '../components/NavIcon';

function LoginPage(props) {
    const [loginModal, toggleLoginModal] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [uplaceholder, setPlaceholder] = useState('Username/email')
    const [pplaceholder, setpPlaceholder] = useState('Password')
    const [uplaceholderColor, setuplaceholderColor] = useState('#AAAAAA')
    const [pplaceholderColor, setpplaceholderColor] = useState('#AAAAAA')

    function backToPreviousPage() {
        props.closePage()

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
        <Modal visible={props.state} animationType='slide'>
            <View style={styles.container}>
                <NavIcon action={backToPreviousPage} />
                <Image source={require('../assets/images/login-image.png')} style={styles.image} />
                <Text style={styles.text}>Login</Text>
                <PrimaryInputField placeholderColor={uplaceholderColor} catchUserInput={catchUserUsername}
                    clearInput={username}>{uplaceholder}</PrimaryInputField>
                <View><Text>{''}</Text></View>

                <PrimaryInputField placeholderColor={pplaceholderColor} catchUserInput={catchPassword} clearInput={password} >{pplaceholder}</PrimaryInputField>
                <Text style={styles.p}>Forgot password?</Text>
                <PrimaryButtons action={checkdetails}><Text style={styles.buttonText}>Login</Text></PrimaryButtons>
                <Text style={styles.p2}>A new member? {<Text style={styles.pLink}>Register</Text>}</Text>

            </View>
        </Modal >
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingVertical: 80,
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
        alignSelf: 'flex-end',
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

export default LoginPage;