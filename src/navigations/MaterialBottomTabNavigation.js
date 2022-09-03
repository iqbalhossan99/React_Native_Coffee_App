
import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import CartScreen from '../screens/cartScreen/CartScreen';
import PreviousOrder from '../screens/previosOrder/PreviousOrder';
import Favourites from '../screens/favourites/Favourites';
import Profile from '../screens/profile';
import { MaterialCommunityIcons,Ionicons, AntDesign, FontAwesome5  } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator()

const MaterialBottomTabNavigation = () => {
  return (
    <Tab.Navigator shifting={true} labeled={true}  activeColor="#161616"  inactiveColor={"#fff"}  barStyle={{ backgroundColor: '#ffb541', //#0B0B0B
    //  borderRadius:30,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
     paddingTop:13, paddingBottom:26, paddingHorizontal:10 ,
    // padding:20,
    marginTop: -30
    
    
    }}>
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            title:"home",
            // tabBarLabel: 'Home',
            tabBarColor:'#ddd',
            tabBarAccessibilityLabel:"IqbalTest",
            tabBarIcon: ({ color }) => (
              // console.log(color)
              <View style={{
                // height:50, width:50, borderRadius:30, backgroundColor:"#CC9366", justifyContent:"center", alignItems:"center"
              }}> 
                  <MaterialCommunityIcons name="glass-pint-outline" size={24} color={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen name="Cart" component={CartScreen} 
          options={{
            tabBarColor:'red',

            tabBarLabel: '',
            // tabBarColo="#CC9366",​
            tabBarIcon: ({ color }) => (
                <Ionicons name="ios-reorder-four-sharp" size={24} color={color} /> 
            ),
          }}
        
        />
        <Tab.Screen name="PreviousOrder" component={PreviousOrder}       
        options={{
          tabBarColor:'blue',

          tabBarLabel: '',
          // tabBarColo="#CC9366",​
          tabBarIcon: ({ color }) => (
            <AntDesign name="hearto" size={24} color={color} /> 
          ),
        }}
        
        />
        <Tab.Screen name="Favourites" component={Favourites}                
        options={{
          tabBarLabel: '',
          // tabBarColo="#CC9366",​
          tabBarBadge: 3 ,
          tabBarIcon: ({ color }) => (
            <AntDesign name="shoppingcart" size={24} color={color}/>
            ),
        }}
        
        />
        <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarLabel: '',
          // tabBarColo="#CC9366",​
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-circle" size={24} color={color} />
            ),
        }}
        />
    </Tab.Navigator>
  )
}

export default MaterialBottomTabNavigation