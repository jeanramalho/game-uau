import { ApolloProvider } from '@apollo/client'
import { client } from '../../Lib/apollo'
import { View, Text } from "react-native"
import EditCard from '../../Components/EditCard'
import styles  from "./style"
import { ApolloProvider } from '@apollo/client'
import { client } from '../../Lib/apollo'

let data = {
    pontos: 500,
    novosPontos: 550,
}

const EditGamer = () => {

        return (
            <ApolloProvider client={client}>

                <View style={styles.container}>
                    <EditCard gamer="Jean Ramalho" points={data.pontos + data.novosPontos} newPoints={data.novosPontos}/>
                </View>

            </ApolloProvider>            
        )
}

export default EditGamer