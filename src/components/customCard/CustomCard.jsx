import { Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import CustomButtom from '../customButton/CustomButtom'

const CustomCard = ({item,onCart,onFavorite,onSelect}) => {
return (
    <View style={styles.card}>
        <TouchableOpacity
        onPress={onSelect}
        >
            <Image  
            borderRadius={20}
            style={styles.images} 
            source={item.image}/>
        </TouchableOpacity>
        <Text>
            {item.name}
        </Text>
        <Text>
            {item.price}
        </Text>
        <View>
            <CustomButtom 
            buttomName={'A Favoritos'} 
            buttonAction={onFavorite}
            styleimageContainer={styles.imageButton}
            />
            <CustomButtom 
            buttomName={'A Carrito'} 
            buttonAction={onCart}
            styleimageContainer={styles.imageButton}
            />
        </View>
    </View>
)
}

export default CustomCard

