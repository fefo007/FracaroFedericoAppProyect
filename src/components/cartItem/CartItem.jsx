import { View, Text,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons';

const CartItem = ({item,onDelete}) => {
return (
    <View>
        <View>
            <Image source={item.image}/>
        </View>
        <View>
            <Text>{item.name}</Text>
        </View>
        <View>
            <Text>
                unidades:{item.quantity}
            </Text>
        </View>
        <View>
            <Text>
                precio: ${item.price * item.quantity}
            </Text>
        </View>
        <TouchableOpacity onPress={()=>{onDelete}}>
            <Fontisto name="trash" size={24} color="red" />
        </TouchableOpacity>
    </View>     
)
}

export default CartItem