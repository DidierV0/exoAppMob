import { View, Text, Image } from 'react-native'
import React from 'react'
import discoverStyles from '../discoverStyles'
import Entypo from 'react-native-vector-icons/Entypo'

const ItemPopular = ({popular}) => {
  return (
    <View style={discoverStyles.itemPopular}>
      
      <Image 
        source={{uri:popular.thumbnail}} 
        imageStyle={{borderRadius:20}} 
        style={discoverStyles.imagePopular}
        />

      <View style={{justifyContent: 'center', alignItems: "flex-start"}}>
        <Text style={{fontSize:20, color:"#FFF"}}>{popular.title}</Text>
        <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize:20, color:"#FFF", marginHorizontal:5}}>${popular.price}</Text>
            <Text style={{fontSize:20, color:"#FFF", marginHorizontal:5}}>-{popular.discountPercentage}%</Text>
        </View>
      </View>

      <View style={{justifyContent:  "center", marginHorizontal: 20}}>
        <Entypo name="heart-outlined" size={30} color="#FFF"/>
        <Text style={{color: "#FFF", fontWeight: "700"}}>{popular.rating}</Text>
      </View>

    </View>
  )
}

export default ItemPopular