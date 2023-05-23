import {Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import CustomButtom from '../customButton/CustomButtom'
import styles from './styles'

const MenuDrawer = ({navigation}) => {
return (
    <DrawerContentScrollView style={styles.drawerContainer}>
        <Text>
            Menu
        </Text>
        <CustomButtom 
        buttomName={'Home'} 
        buttonAction={()=>navigation.navigate('Home')}
        styleimageContainer={styles.imageContainer}
        styleContainer={styles.buttonContainer}
        styletextContainer={styles.textContainer}
        styleText={styles.buttomText}
        />
        <CustomButtom 
        buttomName={'Porcelana'} 
        buttonAction={()=>navigation.navigate('Porcelana')}
        styleimageContainer={styles.imageContainer}
        styleContainer={styles.buttonContainer}
        styletextContainer={styles.textContainer}
        styleText={styles.buttomText}
        />
        <CustomButtom 
        buttomName={'Tela'} 
        buttonAction={()=>navigation.navigate('Tela')}
        styleimageContainer={styles.imageContainer}
        styleContainer={styles.buttonContainer}
        styletextContainer={styles.textContainer}
        styleText={styles.buttomText}
        />
        <CustomButtom 
        buttomName={'Nosotros'} 
        buttonAction={()=>navigation.navigate('AbautUs')}
        styleimageContainer={styles.imageContainer}
        styleContainer={styles.buttonContainer}
        styletextContainer={styles.textContainer}
        styleText={styles.buttomText}
        />
        
        <CustomButtom 
        buttomName={'Contacto'} 
        buttonAction={()=>navigation.navigate('Contact')}
        styleimageContainer={styles.imageContainer}
        styleContainer={styles.buttonContainer}
        styletextContainer={styles.textContainer}
        styleText={styles.buttomText}
        />
    </DrawerContentScrollView>
)
}

export default MenuDrawer