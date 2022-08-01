import { StyleSheet } from 'react-native'
import { View, Modal, Image, Text } from 'react-native';
import PrimaryButtons from '../components/PrimaryButtons';

function SignupPage(props) {
    return (
        <Modal visible={props.state} animationType='slide'>
            <View style={styles.container}>
                <Text style={styles.text}>Signup Page here</Text>
                <Image source={require('../assets/images/signup-image.png')} />
                <PrimaryButtons >Return</PrimaryButtons>
            </View>
        </Modal>
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
    }
})

export default SignupPage;