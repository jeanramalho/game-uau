import { createDrawerNavigator } from '@react-navigation/drawer'
import { MaterialIcons } from '@expo/vector-icons'
import  {Home}  from '../Screens/Home/Home'
import CompleteRanking from '../Screens/CompleteRanking/CompleteRanking';
import CompleteRankingClasse from '../Screens/CompleteRankingClasse/CompleteRankingClasse'
import EditGamer from '../Screens/EditGamer';
import Cadastro  from '../Screens/Cadastro'



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
                drawerLabel: () => null,
                drawerItemStyle: { height: 0 },
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
                drawerLabel: () => null,
                drawerItemStyle: { height: 0 },
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
              name='Cadastro'  
              component={Cadastro}
              options={{
                drawerLabel: "Novo Gamer",
                drawerIcon: () => <MaterialIcons  name="add" size={22} />,
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
              name='Inserir Pontos'  
              component={EditGamer}
              options={{
                drawerLabel: "Inserir Pontos",
                drawerIcon: () => <MaterialIcons  name="edit" size={22} />,
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