import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import style from './style';

const TopSubMenu = (
    {handleMenuTab, categoryName}
    ) => {
  return (
    <View style={style.topSubMenuContainer}>
          <View  style={style.menu}>
            <TouchableOpacity 
            onPress={handleMenuTab}
            >
              <Text style={style.menuText}>Menu</Text>
            </TouchableOpacity>
            <AntDesign style={{marginLeft:15, marginRight:10}} name="right" size={16} color="#fff" />
            <Text style={style.categoryName}>
                {categoryName}                
            </Text>             
          </View>
          <TouchableOpacity  activeOpacity={.5}>
              <AntDesign name="search1" size={24} color="#fff" />     
          </TouchableOpacity>
    </View>
  )
}

export default TopSubMenu;