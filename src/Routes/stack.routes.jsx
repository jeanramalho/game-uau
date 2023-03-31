import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "../Screens/Home/Home"
import CompleteRanking from '../Screens/CompleteRanking/CompleteRanking';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes(){
    return (
        <Navigator>
            <Screen
              name="Home"  
              component={Home}
            />

            <Screen
              name="CompleteRanking"  
              component={CompleteRanking}
            />
        </Navigator>
    )
}