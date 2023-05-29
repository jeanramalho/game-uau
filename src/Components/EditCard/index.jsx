import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles  from "./style"
import { MaterialIcons, Fontisto } from '@expo/vector-icons'


const EditCard = ({gamer, points, newPoints, onAction}) => {
    let novosPontos = points + newPoints
    const upGamer = ''
    
    return (
        <View style={styles.container}>
            <Text style={styles.gamerName}>{gamer}</Text>
            <Text>{points}pt</Text>
            <Text styles={styles.gamerName}>+</Text>
            <TextInput style={styles.intupPoint} value={newPoints}/>            

            <View style={styles.buttonContainer}>

                <TouchableOpacity style={styles.buttonStyle}>
                    <MaterialIcons name="delete" size={18} color="#00cccc"/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle}>
                    <Fontisto name="save-1" size={18} color="#00cccc"  onPress={onAction}/>
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