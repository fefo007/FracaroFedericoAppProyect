
import { createStackNavigator } from '@react-navigation/stack'
import CartScreen from '../../screens/stackCartScreen/CartScreen'

const StackCartNavigation = () => {
    const stack = createStackNavigator()
    return(
        <stack.Navigator>
            <stack.Screen name='Cart' component={CartScreen}/>
        </stack.Navigator>
    )
}

export default StackCartNavigation