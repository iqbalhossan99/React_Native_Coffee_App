import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './style';
import { useNavigation } from '@react-navigation/native';



const ProductList = ({product,
  //  handleNavigateProduct
  }) => {
  const navigation = useNavigation();

  const handleNavigateProduct=(product):void=>{
    navigation.navigate("Details");
 }
 
 return (
    <TouchableOpacity onPress={()=>handleNavigateProduct(product)} style={[styles.categories]}>
      <View style={{flex:1}}>
        <Text style={styles.categoryTitle}>{product.title}</Text>
        <Text style={styles.subTitle}>{product.subTitle}</Text>
      </View>
      <Image style={styles.categoryImg } source={{
            uri: product.img,
      }}/>
    </TouchableOpacity>
  )
}

export default ProductList