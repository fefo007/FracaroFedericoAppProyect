import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import CartItem from '../cartItem/CartItem'

const CustomCart = () => {

  const renderCartItem = ({item})=>(
    <CartItem item={item} onDelete={handleDeleteItem}/>
  )
  const handleDeleteItem = (itemId)=>{

  }
  return (
    <View>
      <Text>carrito</Text>
      <View>
        <FlatList
        data={asa}
        keyExtractor={item=>item.id}
        renderItem={renderCartItem}
        >
        </FlatList>
      </View>
      <View>
        <Text>
            total:
        </Text>
        <TouchableOpacity>

        </TouchableOpacity>
      </View>
    </View>

      
  )
}

export default CustomCart