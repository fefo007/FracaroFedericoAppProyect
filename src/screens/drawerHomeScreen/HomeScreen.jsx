import { View} from 'react-native'
import { useLayoutEffect } from 'react'
import ProductsList from '../../components/productsList/ProductsList'
import colors from '../../constants/colors'
import iconMenuClose from '../../assets/icons/hamburger.png'
import iconCart from '../../assets/icons/carrito.webp'
import CustomButtom from '../../components/customButton/CustomButtom'
import styles from './styles'
import ButtomTabNav from '../../navigation/buttomTabNav/ButtomTabNav'
import StackCartNavigation from '../../navigation/stackNavigation/StackCartNavigation'
// import {useIsDrawerOpen} from '@react-navigation/drawer'

const MenuScreen = ({navigation}) => {
    // console.log(useIsDrawerOpen())
    // const isOpen = useIsDrawerOpen()
    // const handleDrawer = ()=>{
    //     isOpen ? navigation.closeDrawer() : navigation.openDrawer()
    // }
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:'Artesanias O&E',
                headerStyle:{
                    backgroundColor:colors.tertiaryColor
                },
                headerTinColor:colors.primaryColor,
                headerTitleStyle:{
                    fontWeight:'bold'
                },
                headerShown:true,
                headerLeft:()=>{
                    return(
                        <CustomButtom 
                        styleContainer={styles.buttom} 
                        imageUrl={iconMenuClose}
                        buttonAction={()=>{navigation.openDrawer()}}
                        />
                    )
                },
                headerRight:()=>(
                    <CustomButtom 
                    styleContainer={styles.buttom} 
                    imageUrl={iconCart} 
                    buttonAction={()=>(<StackCartNavigation/>)}
                    />
                    )
        })
    })
    return (
        <View>
            <ProductsList/>
            <ButtomTabNav/>
        </View>
        )
}

export default MenuScreen