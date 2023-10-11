import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Home = () => {
  return (
    <View style={{height: "100%" ,backgroundColor: "#bdbfc1"}}>
        <ImageBackground 
            source={require('./asset/bike.jpeg')} 
            resizeMode="cover" 
            style={{
                width: "100%",
                height: "100%",
                flex: 1,
                justifyContent: "flex-end",
            }} 
        >
            <View style={{
                backgroundColor: "rgba(000 , 000, 000, 0.6)",
                flex:1,
                justifyContent: "flex-end",
            }}>

                <View style={{flex: 1, marginHorizontal: 30, justifyContent:"flex-end"}}>

                    <Text style={{color: "rgb(222 , 222, 222)",
                        fontSize: 40, fontWeight: "500", marginBottom: 40
                        }}> 
                        The Original Thermic Motorbike
                        </Text>
                    <Text style={{color: "rgba(222 , 222, 222, 0.7)",
                        fontSize: 20, fontWeight: "500", marginBottom: 40
                        }}> 
                        Take a closer look at the features behind the one of its bad motorbike.
                        </Text>
                </View>

                <Button mode="contained" style={{
                    backgroundColor: "#e4ed6d",
                    borderRadius: 20,
                    marginHorizontal: 30,
                    height: 70,
                    justifyContent: 'center',
                    marginBottom: 15
                }}>
                    <Text style={{fontSize: 20,
                        fontWeight: "700",
                        color: "#000"
                        }} >
                            ORDER NOW
                    </Text> 
                </Button>

            </View>


        </ImageBackground>
    </View>
  )
}

export default Home