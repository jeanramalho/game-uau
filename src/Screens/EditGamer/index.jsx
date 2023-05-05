import { ApolloProvider } from '@apollo/client'
import { client } from '../../Lib/apollo'
import { View, Text } from "react-native"
import EditCard from '../../Components/EditCard'
import styles  from "./style"



const EditGamer = () => {

        return (
            <ApolloProvider client={client}>

                <View style={styles.container}>
                    <Text>Olá mundo!</Text>
                </View>

            </ApolloProvider>            
        )
}

export default EditGamer