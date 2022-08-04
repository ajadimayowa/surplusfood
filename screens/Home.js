import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import PrimaryButtons from '../components/PrimaryButtons';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';



function Home() {
    const [loginModal, toggleLoginModal] = useState(false)
    const [signupModal, toggleSignupModal] = useState(false)

    function loginPage() {
        toggleLoginModal(!loginModal)

    }


    function signUpPage() {
        toggleSignupModal(!signupModal)
    }
    return (
        <LinearGradient style={styles.homeContainer} colors={['#10815C', '#113C2E']}>
            <ImageBackground style={styles.homeContainer} imageStyle={styles.bgStyle}
                source={require('../assets/images/bgimage.png')}>
                <Image source={require('../assets/images/home-image.png')} style={styles.homeImageStyle} />
                <Text style={styles.homeHeader}>
                    Grocery Delivery
                </Text>
                <Text style={styles.homeHeader2}>
                    To Your Doorstep
                </Text>
                <Text style={styles.homeHeader3}>
                    We are fast and reliable
                </Text>
                <PrimaryButtons style={styles.loginButton} action={loginPage}>Login</PrimaryButtons>
                <PrimaryButtons style={styles.signUpButton} action={signUpPage}><Text style={styles.text}>Sign up</Text></PrimaryButtons>
                <LoginPage state={loginModal} closePage={loginPage} />
                <SignupPage state={signupModal} closePage={signUpPage} />







            </ImageBackground>
        </LinearGradient>
    );
}

export default Home;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',

    },

    bgStyle: {
        opacity: 0.05
    },

    homeImageStyle: {
        // backgroundColor: 'red',
        marginRight: 18,
        marginTop: 20,
    },
    homeHeader: {
        fontSize: 40,
        fontWeight: '800',
        color: '#FFFFFF',
        marginTop: -25,
    },
    homeHeader2: {
        fontSize: 35,
        fontWeight: '700',
        color: '#FFFFFF',
        marginTop: -10,
    },
    homeHeader3: {
        fontSize: 15,
        fontWeight: '700',
        color: '#FFFFFF',
        marginBottom: 60,

    },
    successButton: {
        color: '#fff'
    },

    loginButton: {
        backgroundColor: 'white'
    },
    signUpButton: {
        backgroundColor: '#FF5B00'
    },
    text: {
        color: 'white'
    }
});
