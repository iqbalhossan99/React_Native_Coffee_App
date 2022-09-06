import { View, Text, Image, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import RewardPickup from '../../components/rewardPickup/RewardPickup';
import styles from './style';

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
import TopMenu from '../../components/topMainMenu/TopMenu';
import ProductList from '../../components/productList/ProductList';
import CategoryList from '../../components/categoryList/CategoryList';


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
  // const navigation = useNavigation();

  const hanldeCategory = (products, category):void=>{
    setGetProducts(products);
    setCategoryName(category);
  }    

  const handleMenuTab = ():void =>{
    setGetProducts([]);
  }
//   const handleNavigateProduct=():void=>{
//     navigation.navigate("Details");
//     console.log("================first===============");
//  }
  if(!fontsLoaded){
    return <AppLoading/>;
  }


  return (
    <SafeAreaView>
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
              renderItem={ ({item})=>(
                <ProductList product={item}
                //  handleNavigateProduct={handleNavigateProduct}
                />
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
              showsVerticalScrollIndicator={true}             
          />           
          : 
          // Category List
          <FlatList 
            data={ ProductCategory }
            renderItem={({item})=>(
              <CategoryList category={item} hanldeCategory={hanldeCategory}/>
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
              showsVerticalScrollIndicator={true}
          />  
      }        
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;
