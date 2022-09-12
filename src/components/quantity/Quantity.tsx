import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import style from './style';

const Quantity = ({iconColor}) => {
  return (
    <View style={style.quantityContainer}>
        <TouchableOpacity>
          <AntDesign name="minuscircle" size={30} style={iconColor} /> 
        </TouchableOpacity>
        <Text style={style.quantity}>2</Text>
        <TouchableOpacity>
          <AntDesign name="pluscircle" size={30} style={iconColor}  /> 
        </TouchableOpacity>
    </View>
  )
}

export default Quantity