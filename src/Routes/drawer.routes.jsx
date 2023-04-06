import { createDrawerNavigator } from '@react-navigation/drawer'
import  {Home}  from '../Screens/Home/Home'
import CompleteRanking from '../Screens/CompleteRanking/CompleteRanking';
import CompleteRankingClasse from '../Screens/CompleteRankingClasse/CompleteRankingClasse'
import { MaterialIcons } from '@expo/vector-icons'


const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes(){
    return (
        <Navigator>
            <Screen
              name='Home'  
              component={Home}
              options={{
                drawerLabel: "Início",
                drawerIcon: () => <MaterialIcons  name="home" size={22} />
              }}
            />

            <Screen
              name='CompleteRanking'  
              component={CompleteRanking}
            />

            <Screen
              name='CompleteRankingClasse'  
              component={CompleteRankingClasse}
            />
        </Navigator>
    )
}