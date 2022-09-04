import { View, Text, TextInput } from 'react-native'
import React from 'react'

const RewardPickup = () => {
  return (
     <View >
      <View style={{
        flexDirection:"row",
        paddingVertical:50,
        paddingHorizontal:20,
        justifyContent:"space-between",
        // alignContent:"space-between",
        width:"97%" ,
     }}>
        <View>
        <Text style={{color:"#fff", fontSize:15, lineHeight:18, marginBottom:10}}>My Rewards</Text>
        <Text style={{fontSize:18, fontWeight:"600", lineHeight:22, backgroundColor:"#fff", borderRadius:19, paddingVertical:8, paddingHorizontal:20}}>$2.00</Text>
        </View>
        <View>
        <Text style={{color:"#fff", marginBottom:10}}>Pickup at</Text>
        <TextInput style={{fontSize:18, fontWeight:"600", lineHeight:22, backgroundColor:"#fff", borderRadius:19, paddingVertical:4, paddingHorizontal:20, width:200}} />
       
        </View>
        </View>
       
    </View>
  )
}

export default RewardPickup