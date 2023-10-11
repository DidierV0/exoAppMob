import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Home = () => {
  return (
    <View style={{height: "100%" ,backgroundColor: "#bdbfc1"}}>
        <ImageBackground 
            source={require('./asset/food-delivery.jpg')} 
            resizeMode="cover" 
            style={{height: "95%", width: "100%", flex: 1}} 
        />

        <View style={{marginBottom: 30, height: 100, justifyContent: 'center'}}>

        <Button mode="contained" style={{
            backgroundColor: "#e94e3c",
            borderRadius: 20,
            marginHorizontal: 30,
            height: 70,
            justifyContent: 'center'
        }}>
            <Text style={{fontSize: 20, fontWeight: "700"}} >Get started</Text> 
        </Button>
        </View>
    </View>
  )
}

export default Home