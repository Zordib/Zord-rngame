import { Text } from 'react-native'
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';


function instructionText({ children }) {
    return <Text style={styles.instructionText}>{children}</Text>

}

export default instructionText;

const styles = StyleSheet.create({

    instructionText: {
        color: Colors.accent500,
        fontSize: 24
    }


})