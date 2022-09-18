import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import InpuText from '../../components/inputText/InpuText'
import Button from '../../components/button/Button'
import style from './style'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import SignInWithSocial from '../../components/signInWithSocial/SignInWithSocial'

const SignInScreen = () => {
  return (
    <SafeAreaView style={{
        backgroundColor:"#07746E",
        height:"100%",
        
    }}>
      <ScrollView>
        <View style={{
          paddingHorizontal:30,
          paddingVertical:20
        }}>
          {/* <InpuText placeholder="First Name"/>
          <InpuText placeholder="Last Name"/> */}
          <InpuText placeholder="Email Address"/>
          {/* <InpuText placeholder="Phone"/> */}
          <InpuText placeholder="Password"/>
          <Text style={style.termConditionText}>By clicking Sign up you agree to our <Text style={{
            textDecorationLine:"underline",
          }}>Term and Conditions </Text>  and <Text style={{
            textDecorationLine:"underline",
          }}>Privacy Statement.</Text> </Text>

          <Button text={"Sign in"} textStyle={style.singUpBtnText} btnStyle={style.signUpBtn}/>
          <TouchableOpacity>
            <Text style={style.forgotText}>Forgot password?</Text>
          </TouchableOpacity>
          {/* Sign in with social */}
          <SignInWithSocial/>
        </View>
     
       </ScrollView>
       <View style={style.bottomSection}>
        <Text style={style.alreadyText}>New to Main Street?</Text>
        <Button text={"Sign up"} btnStyle={style.alreadySignInBtn} textStyle={style.alreadySignInBtnText}/>
       </View>
    </SafeAreaView>
  )
}

export default SignInScreen;