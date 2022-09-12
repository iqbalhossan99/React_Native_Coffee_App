import { View, Text } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import style from "./style";

const ProductSizes = () => {
  return (
    <View style={style.prSizesContainer}>
        <Text style={style.sizeTitle}>Size</Text>
        <View style={style.sizes}>
            <View>
                <MaterialCommunityIcons name="cup-outline" size={44} color="#fff" />
                <Text style={style.sizeName}>Large</Text>
            </View>
            <View>
                <MaterialCommunityIcons name="cup-outline" size={36} color="#FF8400" />
                <Text style={style.sizeName}>Medium</Text>
            </View>
            <View>
                <MaterialCommunityIcons name="cup-outline" size={32} color="#fff" />
                <Text style={style.sizeName}>Small</Text>
            </View>
        </View>

        {/* Bar */}
        <View style={style.barContainer}>
            <View style={style.barPoint}></View>
            <View style={style.barPoint}></View>
            <View style={style.barPoint}></View>
        </View>
    </View>
  )
}

export default ProductSizes