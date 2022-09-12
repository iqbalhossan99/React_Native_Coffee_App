import { View, Text, Image } from 'react-native';
import React from 'react';
import style from './style';

const CommonBanner = () => {
  return (
    <View style={style.bannerContainer}>
        <View style={style.prInfo}>
            <Text style={style.prTitle}>Iced Latte</Text>
            <Text style={style.prepTime}>Prep time: 5-8  min</Text>
            <View style={{width:165, height:2, backgroundColor:"#fff", marginTop:5, marginBottom:14}}></View>
            <Text style={style.amenities}>Maple syrup, ice, whole milk, espresso shots</Text>
        </View>
        <Image style={style.prImg} source={{uri:"https://www.alphafoodie.com/wp-content/uploads/2020/08/iced-latte.jpeg"}}/>        
    </View>
  )
}

export default CommonBanner;