import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native'
import styles  from "./style"
import { MaterialIcons } from '@expo/vector-icons'

const EditCard = ({gamer, points, newPoints}) => {
    return (
        <View style={styles.container}>
            <Text>{gamer}</Text>
            <Text>{points}pt</Text>
            <Text>+</Text>
            <TextInput style={styles.intupPoint} value={newPoints}/>
            <Button style={styles.buttonStyle}><Text>Olé</Text></Button>
        </View>
    )
}

export default EditCard