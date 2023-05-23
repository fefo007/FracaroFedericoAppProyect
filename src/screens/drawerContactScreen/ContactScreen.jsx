import { View, Text } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react'
import colors from '../../constants/colors'
import CustomButtom from '../../components/customButton/CustomButtom'
import ButtomTabNav from '../../navigation/buttomTabNav/ButtomTabNav'
import iconMenuClose from '../../assets/icons/hamburger.png'
import iconCart from '../../assets/icons/carrito.webp'
import styles from './styles'

const ContactScreen = ({navigation}) => {
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
                />
                )
    })
})
  return (
    <View>
      <Text>ContactScreen</Text>
      <ButtomTabNav/>
    </View>
  )
}

export default ContactScreen