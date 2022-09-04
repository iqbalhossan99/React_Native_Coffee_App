import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import MaterialBottomTabNavigation from './MaterialBottomTabNavigation'
import BottomTabNavigation from './BottomTabNavigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Routers = () => {
  return (
   <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen 
          name='Home' 
          component={BottomTabNavigation}
          options={{
            headerShown:false
          }}          
        />
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Routers