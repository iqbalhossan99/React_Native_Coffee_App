import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'

const CategoryList = ({category,hanldeCategory}) => {
  return (
    <TouchableOpacity  
    style={styles.categories}
    onPress={()=>{ hanldeCategory(category.porducts, category.category)}}
  >
    <Image style={styles.categoryImg} source={{
          uri: category.img,
    }}/>
        <View style={{marginLeft:30}}>
          <Text style={styles.categoryTitle}>{category.category}</Text>
        </View>
  </TouchableOpacity>
  )
}

export default CategoryList