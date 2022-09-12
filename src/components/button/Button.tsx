import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import style from './style';

const Button = ({text, btnStyle, textStyle}) => {
  return (
    <TouchableOpacity style={btnStyle}>
        <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button