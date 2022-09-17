import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import style from './style';

const TopMenu = () => {
  return (
    <View style={style.topMenuContainer}>
      <View style={style.menus}>
          <TouchableOpacity activeOpacity={.5}>
            <Text style={[style.menuItem, style.menuItemBorder]}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5}>
            <Text style={style.menuItem}>Favourites</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5}>
            <Text style={style.menuItem}>Previos</Text>
          </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={.5}>
        <AntDesign name="search1" size={24} color="#fff" />     
       </TouchableOpacity>
    </View>
  )
}

export default TopMenu