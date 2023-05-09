import { ApolloProvider } from '@apollo/client'
import { client } from '../../Lib/apollo'
import { View, Text } from "react-native"
import EditCard from '../../Components/EditCard'
import styles  from "./style"



const EditGamer = () => {

        return (
            <ApolloProvider client={client}>

                <View style={styles.container}>
                    <EditCard gamer="Jean" points={500} newPoints={500}/>
                </View>

            </ApolloProvider>            
        )
}

export default EditGamer