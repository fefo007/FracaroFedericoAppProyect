import { View,FlatList} from 'react-native'
import React from 'react'
import CustomCard from '../customCard/CustomCard'
import styles from './styles'
import {products} from '../../data/propducts'

const ProductsList = ({navigation,routes}) => {
    const handleSelected = (item)=>{
        navigation.navigate('detail',{
            name:item.name
        })
    // const handleOnCart = ()=>{
    //     console.log('gogo')
    // }
    // const handleOnFavorite=()=>{
    //     console.log('sdsdsa')
    // }
    }
    const renderProducts=({item})=>(
        <View>
            <CustomCard 
            item={item} 
            onSelect={handleSelected}
            // onCart={handleOnCart} 
            // onFavorite={handleOnFavorite}
            />
        </View>
    )

return (
    <View>
        <FlatList 
        contentContainerStyle={styles.scroll}
        data={products}
        renderItem={renderProducts}
        keyExtractor={item=>item.id}
        numColumns={2}
        bouncesZoom={true}
        >
        </FlatList>
    </View>
)
}

export default ProductsList