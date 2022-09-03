import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/homeScreen'
import MaterialBottomTabNavigation from './MaterialBottomTabNavigation'
import BottomTabNavigation from './BottomTabNavigation'


const Routers = () => {
  return (
   <NavigationContainer>
    {/* <HomeScreen/> */}
    {/* <MaterialBottomTabNavigation/> */}
    <BottomTabNavigation/>
   </NavigationContainer>
  )
}

export default Routers