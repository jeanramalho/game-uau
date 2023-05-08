import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles  from "./style"

const EditCard = () => {
    return (
        <View style={styles.container}>
            <Text>Nome do Gamer</Text>
            <Text>500pt</Text>
            <Text>+</Text>
            <TextInput />
        </View>
    )
}

export default EditCard