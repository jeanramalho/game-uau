import { ApolloProvider } from '@apollo/client'
import { client } from '../../Lib/apollo'
import { View, Text } from "react-native"
import EditCard from '../../Components/EditCard'
import styles  from "./style"

let data = {
    pontos: 500,
    novosPontos: 550,
}

const EditGamer = () => {

        return (
            <ApolloProvider client={client}>

                <View style={styles.container}>
                    <EditCard gamer="Jean" points={data.pontos} newPoints={data.novosPontos}/>
                </View>

            </ApolloProvider>            
        )
}

export default EditGamer