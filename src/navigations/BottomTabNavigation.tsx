
import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/homeScreen';
import CartScreen from '../screens/cartScreen/CartScreen';
import PreviousOrder from '../screens/previosOrder/PreviousOrder';
import Favourites from '../screens/favourites/Favourites';
import Profile from '../screens/profile';
import { MaterialCommunityIcons,Ionicons, AntDesign, FontAwesome5  } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreNavigator from './ExploreNavigation';
import ProductDetaiulsScreen from '../screens/productDetaiulsScreen';

const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarStyle: { backgroundColor:"#0B0B0B",  height:80, width:'100%', borderTopLeftRadius:30, borderTopRightRadius:30, marginTop:-30, paddingLeft:44, paddingRight:44, paddingTop:13,  }, //#0B0B0B

      tabBarItemStyle:{    height:55,  borderRadius:27.5,  alignItems:"center",},
      tabBarShowLabel:false,            
      tabBarInactiveTintColor:'#fff' ,
      tabBarActiveTintColor:'#161616',
      tabBarActiveBackgroundColor:'#CC9366',
    }}
    
    >
        <Tab.Screen 
          name="Explore" 
          component={ExploreNavigator}         
          options={{
            headerShown:false,
            tabBarIcon: ({ color }) => (
               <MaterialCommunityIcons name="cup-outline" size={24} color={color} />            
            ),
           }}
        />    
        <Tab.Screen 
          name="PreviousOrder" 
          component={PreviousOrder} 
          options={{
            // headerShown:false,
            tabBarIcon: ({ color }) => (
                <Ionicons name="ios-reorder-four-sharp" size={24} color={color} /> 
            ),
          }}
        />
        <Tab.Screen 
          name=" Favourites" 
          component={ Favourites}       
          options={{          
            tabBarIcon: ({ color }) => (
              <AntDesign name="hearto" size={24} color={color} /> 
            ),
          }}       
        />
        <Tab.Screen 
          name=" Cart" 
          component={CartScreen}     
          options={{
            headerShown:false,
            tabBarIcon: ({ color }) => (
              <AntDesign name="shoppingcart" size={24} color={color}/>
              ),
              tabBarBadge: 3,
              tabBarBadgeStyle:{backgroundColor:"#00FF19"}

              
          }}               
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="user-circle" size={24} color={color} />
              ),
          }}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation