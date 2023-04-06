import { NavigationContainer } from '@react-navigation/native'
import { StackRoutes } from "./stack.routes"
import { DrawerRoutes } from "./drawer.routes"

export const Routes = () => {
    return (
    <NavigationContainer>
        <DrawerRoutes />
    </NavigationContainer>
    )
}

export const RoutesDrawer = () => {
    return (
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
    )
}