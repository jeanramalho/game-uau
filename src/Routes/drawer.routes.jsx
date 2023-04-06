import { createDrawerNavigator } from '@react-navigation/drawer'
import  {Home}  from '../Screens/Home/Home'
import CompleteRanking from '../Screens/CompleteRanking/CompleteRanking';
import CompleteRankingClasse from '../Screens/CompleteRankingClasse/CompleteRankingClasse'


const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes(){
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