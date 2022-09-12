import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import style from "./style"

const CheckoutBtn = () => {
  return (
    <View style={style.checkoutBtn}>
              <View style={{
                marginRight:20
              }}>
                <Text style={style.prepText}>Prep time</Text>
                <Text style={style.prepTime}>8-10</Text>
              </View>
              {/* <Line backgroundColor={"#fff"}/> */}
              <View style={style.verticalLine}></View>
              <TouchableOpacity style={{
                flexDirection:"row"
              }}>
                <Text style={style.chckoutText}>Checkout</Text>
                <AntDesign name="right" size={24} color="#ffffff" />
              </TouchableOpacity>
      </View>
  )
}

export default CheckoutBtn