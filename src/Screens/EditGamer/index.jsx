import { ApolloProvider } from '@apollo/client'
import { client } from '../../Lib/apollo'
import { View } from "react-native"
import { styles } from "./style"



const EditGamer = () => {

        return (
            <ApolloProvider client={client}>

                <View style={styles.container}>

                </View>

            </ApolloProvider>            
        )
}

export default EditGamer