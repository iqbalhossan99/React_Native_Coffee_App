import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import style from './style';
import { useNavigation } from '@react-navigation/native';



const ProductList = ({product,
  //  handleNavigateProduct
  }) => {
  const navigation = useNavigation();

  const handleNavigateProduct=(product):void=>{
    navigation.navigate("Details");
 }
 
 return (
    <TouchableOpacity onPress={()=>handleNavigateProduct(product)} style={[style.categories]}>
      <View style={{flex:1}}>
        <Text style={style.categoryTitle}>{product.title}</Text>
        <Text style={style.subTitle}>{product.subTitle}</Text>
      </View>
      <Image style={style.categoryImg } source={{
            uri: product.img,
      }}/>
    </TouchableOpacity>
  )
}

export default ProductList