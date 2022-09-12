import { View, Text, FlatList, TouchableOpacity, Image, Platform, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import style from './style';
import CategoryList from '../../components/categoryList/CategoryList';
import Quantity from '../../components/quantity/Quantity';

import Button from '../../components/button/Button';
import Line from '../../components/line/Line';
import CheckoutBtn from '../../components/checkoutBtn/CheckoutBtn';
import OrderList from '../../components/orderList/OrderList';

const CartScreen = () => {
  const orderList =[
    {
      id:"1",
      title:"Iced Latte",
      subTitle:"Iced Coffees, Teas, Espresso and more",
      img:"https://www.alphafoodie.com/wp-content/uploads/2020/08/iced-latte.jpeg",
      size:"medium",
      price: 2
    },
    {
      id:"2",
      title:"Iced Mocha",
      subTitle:"Iced Coffees, Teas, Espresso and more",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThBqEEQIGJFM6HD_GEhqtjwH3JJo3L_eOVtuYYj71ra0QGHsH0GrP5IV_ST-goPrOwKWo&usqp=CAU",
      size:"small",
      price: 2.5
    },
    {
      id:"3",
      title:"Cold Brew",
      subTitle:"Iced Coffees, Teas, Espresso and more",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGyZTQK_63DRI3AikVlv9CmgMP2kd03VKPAeH0iU6uVy3n2NUXBu2u6979jMcw5ZvydPU&usqp=CAU",
      size:"large",
      price: 3
    },
    {
      id:"4",
      title:"Cold Brew",
      subTitle:"Iced Coffees, Teas, Espresso and more",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGyZTQK_63DRI3AikVlv9CmgMP2kd03VKPAeH0iU6uVy3n2NUXBu2u6979jMcw5ZvydPU&usqp=CAU",
      size:"large",
      price: 3
    },
    {
      id:"5",
      title:"Cold Brew",
      subTitle:"Iced Coffees, Teas, Espresso and more",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGyZTQK_63DRI3AikVlv9CmgMP2kd03VKPAeH0iU6uVy3n2NUXBu2u6979jMcw5ZvydPU&usqp=CAU",
      size:"large",
      price: 3
    },
    {
      id:"6",
      title:"Cold Brew",
      subTitle:"Iced Coffees, Teas, Espresso and more",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGyZTQK_63DRI3AikVlv9CmgMP2kd03VKPAeH0iU6uVy3n2NUXBu2u6979jMcw5ZvydPU&usqp=CAU",
      size:"large",
      price: 3
    }
    ]
  return (
    <SafeAreaView>
      <View style={style.banner}>
          <View >
            <Text style={style.pickupText}>Pickup at</Text>
            <Text style={style.pageTitle}>Your Cart</Text>
          </View>

          <View style={style.bannerRight}>
            <View>
              <Text style={style.locationText}>Ramona - 680 
              </Text >
              <Text style={style.locationText}>Main Street</Text>
            </View>
            <Ionicons style={{
              marginLeft:20
            }} name="location-outline" size={24} color="black" />
          </View>
      </View> 
      {/* Banner End */}      
      <ScrollView>
      <View style={style.mainSection}>
        {/* Order list */}
        <FlatList 
          data={orderList}
          renderItem={({item}) =>(            
            <OrderList item={item}/>
          )}
          ItemSeparatorComponent={
            Platform.OS == 'android' &&
            (({ highlighted }) => (
              <View
              style={[
                style.separator,
                highlighted && { marginLeft: 0 }
              ]}
              />
              ))
            }
        />
        {/* Add more btn */}
        <Button text={"Add more items"} btnStyle={style.addMoreBtn} textStyle={style.btnText}/>
        
      </View>      
      </ScrollView>
      {/* Checkout btn */}
      <CheckoutBtn/>       
    </SafeAreaView>
  )
}

export default CartScreen