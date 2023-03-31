import { createNativeStackNavigator } from '@react-navigation/native-stack'
import  {Home}  from '../Screens/Home/Home'
import {CompleteRanking} from '../Screens/CompleteRanking/CompleteRanking';
import {CompleteRankingClasse} from '../Screens/CompleteRankingClasse/CompleteRankingClasse'


const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes(){
    return (
        <Navigator>
            <Screen
              name='Home'  
              options={{
                headerShown: false,
              }}
              component={Home}
            />

            <Screen
              name='CompleteRanking'  
              options={{
                headerShown: false,
              }}
              component={CompleteRanking}
            />

            <Screen
              name='CompleteRankingClasse'  
              options={{
                headerShown: false,
              }}
              component={CompleteRankingClasse}
            />
        </Navigator>
    )
}