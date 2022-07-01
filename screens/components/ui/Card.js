import { View, StyleSheet } from 'react-native'
import Colors from '../constants/Colors';

function Card({ children }) {
    return <View style={styles.card}> {children}

    </View>
}

export default Card;

const styles = StyleSheet.create({

    card: {
        marginTop: 35,
        marginHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        //Android specific shadow effect
        elevation: 4,
        //IOS specific shadow effect
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 7,
        shadowOpacity: 0.25

    }

})