import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles  from "./style"

const EditCard = ({gamer, points, newPoints}) => {
    return (
        <View style={styles.container}>
            <Text>{gamer}</Text>
            <Text>{points}pt</Text>
            <Text>+</Text>
            <TextInput style={styles.intupPoint} value={newPoints}/>
        </View>
    )
}

export default EditCard