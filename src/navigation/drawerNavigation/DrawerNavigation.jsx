
import HomeScreen from '../../screens/drawerHomeScreen/HomeScreen'
import CategoryScreen from '../../screens/drawerCategoryScreen/CategoryScreen'
import AboutUsScreen from '../../screens/drawerAboutUsScreen/AboutUsScreen'
import ContactScreen from '../../screens/drawerContactScreen/ContactScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MenuDrawer from '../../components/menuDrawer/MenuDrawer'

const DrawerNavigation = () => {

    const Drawer = createDrawerNavigator()

return (
        <Drawer.Navigator 
        drawerContent={(props)=>(<MenuDrawer {...props}/>)}
        headerMode='screen'>
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name='Porcelana'  component={CategoryScreen}/>
            <Drawer.Screen name='Tela'  component={CategoryScreen}/>
            <Drawer.Screen name='AbautUs'  component={AboutUsScreen}/>
            <Drawer.Screen name='Contact'  component={ContactScreen}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigation