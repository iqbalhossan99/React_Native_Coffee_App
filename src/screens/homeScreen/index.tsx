import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import RewardPickup from '../../components/rewardPickup/RewardPickup';
import styles from './style';
import TopMenu from '../../components/topMenu/TopMenu';
import { ProductCategory } from '../../../assets/data/productData';
import { AntDesign } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

import { PorductsTypes } from '../../model/productType';


const HomeScreen = () => {

  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  const [getProducts, setGetProducts] = useState<PorductsTypes[]>([]);
  const [categoryName, setCategoryName] = useState<string>('');
  const hanldeCategory = (products, category):void=>{
    setGetProducts(products);
    setCategoryName(category);
  }    

  const handleMenuTab = () =>{
    setGetProducts([]);
  }

  if(!fontsLoaded){
    return <AppLoading/>;
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

    {/* Category and Product List */}
    <View style={styles.categoryContainer}>
     { 
      // {/* Top Menu */}

      getProducts.length > 0 ? 
      <View style={{ flexDirection:"row", justifyContent:"space-between",  marginBottom:35}}>
        <View  style={{flexDirection:"row", alignItems:"center"}}>
          <TouchableOpacity onPress={handleMenuTab}>
            <Text style={{color:"#fff", fontFamily:"Inter_400Regular", fontSize:16, lineHeight:22}}>Menu</Text>
          </TouchableOpacity>
          <AntDesign style={{marginLeft:15, marginRight:10}} name="right" size={16} color="#fff" />
          <Text style={{color:"#fff", fontFamily:"Inter_400Regular", fontSize:16, lineHeight:22}}>{categoryName}</Text> 
          
        </View>
        <TouchableOpacity  activeOpacity={.5}>
            <AntDesign name="search1" size={24} color="#fff" />     
        </TouchableOpacity>
      </View>
      
      :

      <TopMenu/>
      }

        { getProducts.length > 0 ? 

        // Prodcut lists
          <FlatList 
              data={ getProducts }             
              renderItem={ ({item}: {item: PorductsTypes})=>(
                <TouchableOpacity  
                  style={[styles.categories]}
                >
                  <View style={{flex:1}}>
                    <Text style={styles.categoryTitle}>{item.title}</Text>
                    <Text style={styles.subTitle}>{item.subTitle}</Text>
                  </View>
                  <Image style={styles.categoryImg } source={{
                        uri: item.img,
                  }}/>
                </TouchableOpacity>

              )}              
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
                keyExtractor={item => item.id}
              // horizontal={true}
              showsVerticalScrollIndicator={true}             
          /> 
          
          : 

          // Category List
          <FlatList 
            data={ ProductCategory }
            renderItem={({item})=>(
              <TouchableOpacity  
                style={styles.categories}
                onPress={()=>{ hanldeCategory(item.porducts, item.category)}}
              >
                <Image style={styles.categoryImg} source={{
                      uri: item.img,
                }}/>
                    <View style={{marginLeft:30}}>
                      <Text style={styles.categoryTitle}>{item.category}</Text>
                    </View>
              </TouchableOpacity>

            )}
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
              keyExtractor={item => item.id}
              // horizontal={true}
              showsVerticalScrollIndicator={true}
          />  
      }
        {/* End The Flatlist */}
       
    </View>
    </View>
  )
}

export default HomeScreen