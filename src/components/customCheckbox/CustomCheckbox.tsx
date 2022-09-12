import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'

const CustomCheck = ({item,}) => {

    const [isChecked, setChecked] = useState<boolean>(false);
  
    const handleCheckBox =()=>{
      setChecked(!isChecked)
    }
  
  return (
    <View>
      <Checkbox style={{
        backgroundColor:"#fff",
        borderWidth:0,
        padding: 12,
        borderRadius:5
        
        }}  
        value={isChecked} 
        
        onValueChange={()=>{
        handleCheckBox()
        }}  />
    </View>
  )
}

export default CustomCheck