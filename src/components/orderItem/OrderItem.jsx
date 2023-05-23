import { View, Text } from 'react-native'
import React from 'react'

const formatDate = (date)=>{
    const date = new Date(date)
    return date.toLocaleDateString()
}

const OrderItem = ({item}) => {
  return (
    <View>
      <View>
        <Text>

        </Text>
        <Text>

        </Text>
      </View>
    </View>
  )
}

export default OrderItem