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

            <View style={buttonContainer}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Fontisto name="save-1" size={22} color="#00cccc"/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle}>
                    <MaterialIcons name="delete" size={22} color="#00cccc"/>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default EditCard

//exemplo de passando uma função de componente para outro
// // Componente Pai
// const ParentComponent = () => {
//     const handleAction = () => {
//       // Faça algo aqui
//     };
  
//     return (
//       <View>
//         <ChildComponent onAction={handleAction} />
//       </View>
//     );
//   };
  
//   // Componente Filho
//   const ChildComponent = ({ onAction }) => {
//     return (
//       <TouchableOpacity onPress={onAction}>
//         <Text>Clique aqui para acionar a função do componente pai</Text>
//       </TouchableOpacity>
//     );
//   };