import { View, Text } from 'react-native'
import React from 'react'
import discoverStyles from '../discoverStyles'

const itemCategory = ({category}) => {
  return (
    <View>
      <Text style={discoverStyles.itemCategory}>{category.name}</Text>
    </View>
  )
}

export default itemCategory