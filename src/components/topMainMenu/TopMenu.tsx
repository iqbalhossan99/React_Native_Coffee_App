import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
const TopMenu = () => {
  return (
    <View style={{flexDirection:"row", justifyContent:"space-between", marginBottom: 25 }}>
      <View style={{flexDirection:"row"}}>
          <TouchableOpacity style={{  }} activeOpacity={.5}>
            <Text style={{color:"#FFF", fontSize:16,
              lineHeight:19,  marginRight:35, borderBottomColor:"#FF8400", borderWidth:2,}}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5}>
            <Text style={{color:"#FFF", fontSize:16,
            lineHeight:19, marginRight:35}}>Favourites</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5}>
            <Text style={{color:"#FFF", fontSize:16,
              lineHeight:19,  }}>Previos</Text>
          </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={.5}>
        <AntDesign name="search1" size={24} color="#fff" />     
       </TouchableOpacity>
    </View>
  )
}

export default TopMenu