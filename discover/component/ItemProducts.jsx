import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import discoverStyles from '../discoverStyles'

const ItemProducts = ({product}) => {
  return (
    <View style={discoverStyles.productCard}>
      <Image
            source={{uri:product.thumbnail}} 
            imageStyle={{borderRadius:20}} 
            style={discoverStyles.cardImage}
        ></Image>
        <Text style={{fontSize: 15, fontWeight: "700", marginBottom: 5}}>{product.title}</Text>
        <Text style={{fontSize: 15, fontWeight: "900", color: "#000", marginBottom: 10}}>${product.price}</Text>
    </View>
  )
}

export default ItemProducts