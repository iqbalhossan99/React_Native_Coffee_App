import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import style from './style';

const Button = ({text, btnStyle, textStyle, icon }) => {
  return (
    <TouchableOpacity style={[btnStyle , style.btn]}>
      {icon}
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button