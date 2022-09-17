import { View, Text, Image, FlatList, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import RewardPickup from '../../components/rewardPickup/RewardPickup';
import style from './style';
import { ProductCategory } from '../../../assets/data/productData';
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
import TopSubMenu from '../../components/topSubMenu/TopSubMenu';

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
  const handleMenuTab = ():void =>{
    setGetProducts([]);
  }
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
      <View style={style.categoryContainer}>
      { 
        // {/* Top Menu */}
        getProducts.length > 0 ?        
        <TopSubMenu categoryName={categoryName} handleMenuTab={handleMenuTab}/>
        :
        <TopMenu/>
        }
        <ScrollView>
          <View style={{
            paddingBottom:500,
          }}>
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
                            style.separator,
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
                      style.separator,
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
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;
