import { View, Text } from 'react-native'
import React from 'react'
import Button from '../button/Button'
import style from './style'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

const SignInWithSocial = () => {
  return (
    <View>
        <Text style={style.orContinueText}> Or continue with</Text>
        <Button text={"Sign in with apple"} textStyle={style.appleBtnText} btnStyle={style.appleBtn} icon={ <AntDesign style={{marginRight:10}} name="apple1" size={24} color="black" />
        }/>
        <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:20}}>
            <Button text={"Google"} btnStyle={style.googleBtn} textStyle={style.googleBtnText} icon={<AntDesign name="google" size={24} color="black" />}/>
            <Button text={"Facebook"} btnStyle={style.googleBtn} textStyle={style.googleBtnText} icon={<FontAwesome name="facebook-f" size={24} color="#38539A" />}/>       
        </View>
    </View>
  )
}

export default SignInWithSocial