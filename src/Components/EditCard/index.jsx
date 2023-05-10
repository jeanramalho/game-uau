import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles  from "./style"
import { MaterialIcons, Fontisto } from '@expo/vector-icons'

const EditCard = ({gamer, points, newPoints}) => {
    return (
        <View style={styles.container}>
            <Text>{gamer}</Text>
            <Text>{points}pt</Text>
            <Text>+</Text>
            <TextInput style={styles.intupPoint} value={newPoints}/>
            <TouchableOpacity style={styles.buttonStyle}>
                <Fontisto name="save-1" size={22} color="#00cccc"/>
            </TouchableOpacity>
        </View>
    )
}

export default EditCard