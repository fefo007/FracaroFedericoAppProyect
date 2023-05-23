import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import styles from './styles'
import UserScreen from '../../screens/tabUserScreen/UserScreen'
import FavoriteScreen from '../../screens/tabFavoriteScreen/FavoriteScreen'
import OrdersScreen from '../../screens/tabOrdersScreen/OrdersScreen'
import { View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../constants/colors'


const buttomTab = createBottomTabNavigator()

const ButtomTabNav = () => {
    return (
        <buttomTab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:styles.tabBar,
        }}
        >
            <buttomTab.Screen 
            name='User' 
            component={UserScreen} 
            options={{tabBarIcon:({focused})=>{
                let iconName = focused ? "user" : "user-o"
                return(
                    <View>
                        <FontAwesome 
                        name={iconName} 
                        size={30} 
                        color={colors.primaryColor} />
                    </View>
                )
            }}}/>
            <buttomTab.Screen 
            name='Favorite' 
            component={FavoriteScreen}
            options={{tabBarIcon:({focused})=>{
                let iconName = focused ?"heart" : "heart-o"
            return(
                    <View>
                        <FontAwesome 
                        name={iconName} 
                        size={30} 
                        color={colors.primaryColor} />
                    </View>
                )
            }}}
            />
            <buttomTab.Screen 
            name='Buys' 
            component={OrdersScreen}
            options={{tabBarIcon:({focused})=>{
                let iconName = focused ? "shopping":"shopping-outline"
            return(
                    <View>
                        <MaterialCommunityIcons 
                        name={iconName} 
                        size={30} 
                        color={colors.primaryColor} />
                    </View>
                )
            }}}
            />
        </buttomTab.Navigator>
    )
}

export default ButtomTabNav