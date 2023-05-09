import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles  from "./style"
import { MaterialIcons } from '@expo/vector-icons'

const EditCard = ({gamer, points, newPoints}) => {
    return (
        <View style={styles.container}>
            <Text>{gamer}</Text>
            <Text>{points}pt</Text>
            <Text>+</Text>
            <TextInput style={styles.intupPoint} value={newPoints}/>
            <TouchableOpacity style={styles.buttonStyle}>
                <MaterialIcons name="save" size={22} />
            </TouchableOpacity>
        </View>
    )
}

export default EditCard