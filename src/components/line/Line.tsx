import { View } from 'react-native';
import React from 'react';

const Line = ({backgroundColor}) => {
  return (
    <View style={[{
        height:1,
        width:"100%",
        },
        {backgroundColor}
        ]}>
     
    </View>
  )
}

export default Line;