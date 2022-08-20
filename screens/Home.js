import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import PrimaryButtons from '../components/PrimaryButtons';



function Home({ switchScreen }) {

    return (
        <LinearGradient style={styles.homeContainer} colors={['#10815C', '#113C2E']}>
            <ImageBackground style={styles.homeContainer} imageStyle={styles.bgStyle}
                source={require('../assets/images/bgimage.png')}>
                <SafeAreaView style={styles.homeContainer}>
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
                    <PrimaryButtons action={switchScreen.bind(this, 'login')} style={styles.loginButton}>
                        <Ionicons name="md-log-in" size={20} />Login</PrimaryButtons>
                    <PrimaryButtons action={switchScreen.bind(this, 'signup')} style={styles.signUpButton}>
                        <Text style={styles.text}> <Ionicons name="settings" />Sign up</Text></PrimaryButtons>
                </SafeAreaView>

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
        fontFamily: 'montserat-bold',
        fontWeight: '800',
        color: '#FFFFFF',
        marginTop: -25,
    },
    homeHeader2: {
        fontFamily: 'montserat-bold',
        fontSize: 35,
        fontWeight: '700',
        color: '#FFFFFF',
        marginTop: -10,
    },
    homeHeader3: {
        fontSize: 15,
        fontFamily: 'montserat-regular',
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
        color: 'white',
        fontFamily: 'montserat-bold'

    }
});
