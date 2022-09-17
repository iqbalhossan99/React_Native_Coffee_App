import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import style from './style'

const CategoryList = ({category,hanldeCategory}) => {
  return (
    <View style={{
      // paddingBottom:200
    }}>
      <TouchableOpacity  
      style={style.categories}
      onPress={()=>{ hanldeCategory(category.porducts, category.category)}}
      >
        <Image style={style.categoryImg} source={{
          uri: category.img,
        }}/>
        <View style={{marginLeft:30}}>
          <Text style={style.categoryTitle}>{category.category}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CategoryList