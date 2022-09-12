import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, Modal, Alert, TextInput } from 'react-native';
import React, { useState } from 'react'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import Line from '../../components/line/Line';
import CustomCheck from '../../components/customCheckbox/CustomCheckbox';
import CommonBanner from '../../components/commonBanner/CommonBanner';
import style from './style';
import ProductSizes from '../../components/productSizes/ProductSizes';
import Addins from '../../components/addins/Addins';
import SpecialInstruction from '../../components/specialInstruction/SpecialInstruction';
import Quantity from '../../components/quantity/Quantity';
import Button from '../../components/button/Button';

const ProductDetaiulsScreen = () => {

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Banner Section */}       
        <CommonBanner/>
        {/* Main Section */}
        <View style={style.prDetailsMain}>
          {/* Size and Bar Section */}
          <ProductSizes/>

          {/* Add-In Section */}          
          <Addins/>

          {/* Special Instruction */}
         <SpecialInstruction/>
          {/* Quantity and Price */}
          <View>
            <Text style={style.quantityText} >Quantity</Text>
            <View style={style.qntBtn}>
              <Quantity iconColor={style.icon} />
              <Button text="Add To Cart $ 5.60" btnStyle={style.cartBtn} textStyle={style.btnText}/>
            </View>
          </View>
        </View> 
      </ScrollView>
    </SafeAreaView>
  ) }

export default ProductDetaiulsScreen




