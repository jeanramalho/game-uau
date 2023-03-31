import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "../Screens/Home/Home"

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes(){
    return (
        <Navigator>
            <Screen
              name="Home"  
              component={Home}
            />
        </Navigator>
    )
}