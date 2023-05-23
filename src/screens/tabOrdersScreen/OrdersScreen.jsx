import { View, FlatList } from 'react-native'
import styles from './styles'
import OrderItem from '../../components/orderItem/OrderItem'


const BuysScreen = () => {

  const renderOrderItem =({item})=>(
    <OrderItem item={item}/>
  )

  return (
    <View>
      <FlatList
      data={sas}
      keyExtractor={item=>item.id}
      renderItem={renderOrderItem}
      />      
    </View>
  )
}

export default BuysScreen