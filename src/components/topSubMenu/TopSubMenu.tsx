import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const TopSubMenu = (
    // {handleMenuTab, categoryName}
    ) => {
  return (
    <View style={{ flexDirection:"row", justifyContent:"space-between",  marginBottom:35}}>
          <View  style={{flexDirection:"row", alignItems:"center"}}>
            <TouchableOpacity 
            // onPress={handleMenuTab}
            >
              <Text style={{color:"#fff", fontFamily:"Inter_400Regular", fontSize:16, lineHeight:22}}>Menu</Text>
            </TouchableOpacity>
            <AntDesign style={{marginLeft:15, marginRight:10}} name="right" size={16} color="#fff" />
            <Text style={{color:"#fff", fontFamily:"Inter_400Regular", fontSize:16, lineHeight:22}}>
                {/* {categoryName} */}
                </Text>             
          </View>
          <TouchableOpacity  activeOpacity={.5}>
              <AntDesign name="search1" size={24} color="#fff" />     
          </TouchableOpacity>
    </View>
  )
}

export default TopSubMenu