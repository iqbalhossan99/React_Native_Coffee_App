import { View, Text, TextInput } from 'react-native';
import React from 'react';
import style from './style';

const InpuText = (
  {placeholder}
  ) => {
  return (
    <TextInput style={style.inputField} 
      placeholder={placeholder
      }
          
    />   
  )
}

export default InpuText;