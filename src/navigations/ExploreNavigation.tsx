import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import ProductDetaiulsScreen from '../screens/productDetaiulsScreen';

const Stack = createNativeStackNavigator();

const ExploreNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Welcome' component={HomeScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen name={'ProductDetaiulsScreen'} component={ProductDetaiulsScreen}              
      />
        </Stack.Navigator>
    );
};

export default ExploreNavigator;