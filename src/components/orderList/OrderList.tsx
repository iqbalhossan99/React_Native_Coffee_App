import { View, Text, Image } from 'react-native';
import React from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';
import Quantity from '../quantity/Quantity';
import style from './style'

const OrderList = ({item}) => {
  return (
    <View>
        <View  
        style={style.orderItem}
        >
        <Image style={style.orderImg} source={{
                uri: item.img,
        }}/>
        {/* <View style={{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-around"
        }}> */}
            <View style={{marginLeft:30}}>
            <Text style={style.orderTitle}>{item.title}</Text>
            <Text style={style.orderSize}>{item.size}</Text>
            </View>
            <View style={{
            flexDirection:"row",
            justifyContent:"space-between"
            }}>
            <Entypo style={{marginRight:15}} name="edit" size={24} color="#07746E" />
            <AntDesign name="hearto" size={24} color="#07746E" />
            </View>
        {/* </View> */}
        </View>
        {/* Quantity and Price */}
        <View style={style.quantityPrice}>
        <Text style={style.removeText}>Remove</Text>
        <View>
            <Quantity iconColor={style.icon}/>
        </View> 
        <Text style={style.price}>${item.price}</Text>
        </View>
    </View>
  )
}

export default OrderList