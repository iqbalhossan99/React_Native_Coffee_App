import { View, Text, Button, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import MaterialBottomTabNavigation from './MaterialBottomTabNavigation'
import BottomTabNavigation from './BottomTabNavigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductDetaiulsScreen from '../screens/productDetaiulsScreen'
import MapScreen from '../screens/mapScreen'
import ChooseLocation from '../screens/chooseLocation'
import SignInScreen from '../screens/signInScreen'
import SignUpScreen from '../screens/signUpScreen'

const Stack = createNativeStackNavigator()

const Routers = () => {
  return (
   <NavigationContainer>
      <Stack.Navigator  
      // initialRouteName='SignIn'
      >
        <Stack.Screen 
          name='Home' 
          component={BottomTabNavigation}
          options={{
            headerShown:false
          }}          
        />
        <Stack.Screen 
          name='Details' 
          component={ProductDetaiulsScreen}
          options={{
            headerStyle:{
              backgroundColor:"#07746E",
              
            },
            headerShadowVisible:false,
            headerTintColor:"#fff",
            headerTitle:""

          }}          
        />
        <Stack.Screen 
          name='Map' 
          component={MapScreen}
          options={{
            headerStyle:{
              backgroundColor:"#07746E",
              
            },
            headerShadowVisible:false,
            headerTitle:"",
            headerTintColor:"#fff",
            headerRight: () => (
              <TouchableOpacity>
                <Text style={{
                  fontFamily:"Inter_400Regular",
                  fontSize:16,
                  lineHeight:19,
                  color:"#ffffff"
                }}>Done</Text>
              </TouchableOpacity>),
          }}                 
        />
        <Stack.Screen 
          name='ChooseLocation' 
          component={ChooseLocation}
          options={{
            headerStyle:{
              backgroundColor:"#07746E",
              
            },
            headerShadowVisible:false,
            headerTintColor:"#fff",
            headerTitle:""

          }}          
        />
        <Stack.Screen 
          name='SignIn' 
          component={SignInScreen}
          options={{
            headerStyle:{
              backgroundColor:"#07746E",          
              
            },
            headerShadowVisible:false,
            headerTintColor:"#fff",            
          }}          
        />
        <Stack.Screen 
          name='SignUp' 
          component={SignUpScreen}
          options={{
            headerStyle:{
              backgroundColor:"#07746E",          
              
            },
            headerShadowVisible:false,
            headerTintColor:"#fff",            
          }}          
        />
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Routers