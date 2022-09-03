import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import RewardPickup from '../../components/rewardPickup/RewardPickup'
import styles from './style'
import TopMenu from '../../components/topMenu/TopMenu'
import { ProductCategory } from '../../../assets/data/productData'
import { useNavigation } from '@react-navigation/native'
const HomeScreen = () => {
   
  const navigation = useNavigation();
  const hanldeCategory = ()=>{
    navigation.navigate("")
  }
  return (
    <View>
      {/* Top Banner */}
     <View style={{height:314}}>
        <Image style={{position:'relative'}} source={require("../../../assets/img/homeBanner.png")} />
        <View style={{position:'absolute'}}>
         <RewardPickup />
        </View>
     </View>

    {/* Product List */}
    <View style={{paddingHorizontal:40, paddingVertical:30, backgroundColor:"#161616", borderRadius:40, marginTop:-40 }}>
      <TopMenu/>
        <FlatList 
            data={ProductCategory}
            renderItem={({item})=>(
              <TouchableOpacity  style={{flexDirection:"row", alignItems:"center"}}>
                <Image style={{height:70, width:70, borderRadius:35}} source={{
                      uri: item.img,
                }}/>
                    <View style={{marginLeft:30}}>
                      <Text style={{color:"#fff", fontSize:22, lineHeight:27, fontWeight:"600"}}>{item.category}</Text>
                    </View>
              </TouchableOpacity>
            )}
            // horizontal={true}
            showsVerticalScrollIndicator={true}
            ItemSeparatorComponent={
            Platform.OS == 'android' &&
              (({ highlighted }) => (
                <View
                  style={[
                    styles.separator,
                    highlighted && { marginLeft: 0 }
                  ]}
                />
             ))
            }
        />  
        {/* End The Flatlist */}
       
    </View>

    </View>
  )
}

export default HomeScreen