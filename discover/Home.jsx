import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import discoverStyles from './discoverStyles'
import Entypo from 'react-native-vector-icons/Entypo'
import { Searchbar } from 'react-native-paper'
import { categories, popular, products } from './data'
import ItemCategory from './component/ItemCategory'
import ItemProducts from './component/ItemProducts'
import ItemPopular from './component/ItemPopular'

const Home = () => {
  return (
    <View style={discoverStyles.contnaire}>

        <View style={discoverStyles.navCont}>
            <Entypo name="menu" size={30} color="#1B1B1B" />
            <Image source={require('./asset/avatar1.jpeg')} style={discoverStyles.avatar} />
        </View>

        <View>
            <Text style={discoverStyles.Title} >Discover</Text>
        </View>

        <Searchbar placeholder="Search" style={discoverStyles.searchBar}/>
        
        <View style={discoverStyles.product}>

            <FlatList
                data={categories}
                renderItem={({item}) => <ItemCategory category={item}/>}
                keyExtractor={item => item.id}
                horizontal={true}            
            />

                <FlatList
                    data={products}
                    renderItem={({item}) => <ItemProducts product={item}/>}
                    keyExtractor={item => item.id}
                    horizontal={true}            
                />
            </View>

            <View>
                <View style={discoverStyles.popular}>
                    <Text style={{fontSize: 25, fontWeight: "600", color: "#000"}}>Popular</Text>
                    <Text style={{fontSize: 20, fontWeight: "600"}}>See all</Text>
                </View>
            </View>

            <FlatList
                    data={popular}
                    renderItem={({item}) => <ItemPopular popular={item}/>}
                    keyExtractor={item => item.id}
                />





    </View>
  )
}

export default Home