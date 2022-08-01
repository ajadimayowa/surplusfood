import { StyleSheet } from 'react-native'
import { View, Modal, Image } from 'react-native';
import { } from 'react-native-web';

function PrimaryInputField() {
    return (
        <Modal visible={true}>
            <View style={styles.container}>
                <Text>Login Page here</Text>
                <Image />
            </View>
        </Modal>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%'

    }
})

export default PrimaryInputField;