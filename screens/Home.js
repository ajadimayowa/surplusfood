import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';


function Home() {
    return (
        <LinearGradient style={styles.homeContainer} colors={['#10815C', '#113C2E']}>
            <ImageBackground style={styles.homeContainer} imageStyle={styles.bgStyle}
                source={require('../assets/images/bgimage.png')}>


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
        justifyContent: 'center',
    },

    bgStyle: {
        opacity: 0.3
    }
});
