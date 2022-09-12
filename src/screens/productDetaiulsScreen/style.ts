import {StyleSheet } from "react-native";

const style = StyleSheet.create({
    prDetailsMain:{
        backgroundColor:"#161616", 
        paddingTop:44, 
        paddingBottom:20, 
        paddingHorizontal:25
      },
      qntBtn:{
        flexDirection:"row",
        justifyContent:"space-between"
      },
      icon:{
        color:"#FF8400"
      }
      ,
      quantityText:{
        fontFamily:"Inter_600SemiBold",
        fontSize:16,
        lineHeight:19,
        color:"#e1e1e1",
        paddingTop:15
      },
      cartBtn:{
        backgroundColor:"#07746E",
        paddingVertical:17,
        paddingHorizontal:20,
        borderRadius:30
      },
      btnText:{
        fontFamily:"Inter_600SemiBold",
        fontSize:16,
        lineHeight:19,
        color:"#fff"
      },
})

export default style;