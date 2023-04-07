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
                drawerIcon: () => <MaterialIcons  name="home" size={22} />,
                headerStyle: {
                    backgroundColor: "#00cccc",
                    height: 120,
                    marginTop: 0,
                    paddingTop: 0,
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  },
                headerTintColor: '#fff',
                headerTitle: "Game UAU",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 30,
                    fontWeight: 600, 
                    color: "#fff", 
                }
                                
              }}
              
            />

            <Screen
              name='CompleteRanking'  
              component={CompleteRanking}
              options={{
                drawerLabel: "Ranking Completo Liderança",
                drawerIcon: () => <MaterialIcons  name="home" size={22} />,
                headerStyle: {
                    backgroundColor: "#00cccc",
                    height: 120,
                    marginTop: 0,
                    paddingTop: 0,
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  },
                headerTintColor: '#fff',
                headerTitle: "Game UAU",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 30,
                    fontWeight: 600, 
                    color: "#fff", 
                }
                                
              }}
            />

            <Screen
              name='CompleteRankingClasse'  
              component={CompleteRankingClasse}
              options={{
                drawerLabel: "Ranking Completo Classe",
                drawerLabelStyle: {
                  display: "none",
                },
                drawerIcon: () => <MaterialIcons  name="home" size={22} />,
                headerStyle: {
                    backgroundColor: "#00cccc",
                    height: 120,
                    marginTop: 0,
                    paddingTop: 0,
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  },
                headerTintColor: '#fff',
                headerTitle: "Game UAU",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 30,
                    fontWeight: 600, 
                    color: "#fff", 
                }
                                
              }}
            />
        </Navigator>
    )
}