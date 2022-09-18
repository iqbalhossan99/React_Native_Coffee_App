import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import InpuText from '../../components/inputText/InpuText'
import Button from '../../components/button/Button'
import style from './style'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

const SignUpScreen = () => {
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
          <InpuText placeholder="First Name"/>
          <InpuText placeholder="Last Name"/>
          <InpuText placeholder="Email Address"/>
          <InpuText placeholder="Phone"/>
          <InpuText placeholder="Password"/>
          <Text style={style.termConditionText}>By clicking Sign up you agree to our <Text style={{
            textDecorationLine:"underline",
          }}>Term and Conditions </Text>  and <Text style={{
            textDecorationLine:"underline",
          }}>Privacy Statement.</Text> </Text>

          <Button text={"Sign up"} textStyle={style.singUpBtnText} btnStyle={style.signUpBtn}/>
          <View>
            <Text style={style.orContinueText}> Or continue with</Text>

            <Button text={"Sign in with apple"} textStyle={style.appleBtnText} btnStyle={style.appleBtn} icon={ <AntDesign style={{marginRight:10}} name="apple1" size={24} color="black" />
            }/>
            <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:20}}>
              <Button text={"Google"} btnStyle={style.googleBtn} textStyle={style.googleBtnText} icon={<AntDesign name="google" size={24} color="black" />}/>
              <Button text={"Facebook"} btnStyle={style.googleBtn} textStyle={style.googleBtnText} icon={<FontAwesome name="facebook-f" size={24} color="#38539A" />}/>       
            </View>
          </View>
        </View>
     
       </ScrollView>
       <View style={style.bottomSection}>
        <Text style={style.alreadyText}>Already have an account?</Text>
        <Button text={"Sign in"} btnStyle={style.alreadySignInBtn} textStyle={style.alreadySignInBtnText}/>
       </View>
    </SafeAreaView>
  )
}

export default SignUpScreen;