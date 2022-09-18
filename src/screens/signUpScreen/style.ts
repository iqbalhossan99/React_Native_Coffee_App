import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    termConditionText:{
        fontFamily:"Inter_600SemiBold",
        fontSize:16,
        marginBottom:10
    },
    signUpBtn:{
        backgroundColor:"#07746E",
        shadowColor:"#000", //#07746E
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    singUpBtnText:{
        fontFamily:'Inter_600SemiBold',
        fontWeight:"900",
        fontSize:18,
        lineHeight:23,
        color:'#ffffff',
        textAlign:"center"
    },
   
    bottomSection:{
        backgroundColor:"#000000",
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:30,
        paddingHorizontal:30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
        
    },
    alreadyText:{
        fontFamily:"Inter_400Regular",
        fontSize:18,
        lineHeight:25,
        color:"#ffffff",
        marginRight:10
    },
    alreadySignInBtn:{
        backgroundColor:"#07746E"
    },
    alreadySignInBtnText:{
        fontFamily:"Inter_600SemiBold",
        fontSize:16,
        lineHeight:20,
        color:"#ffffff"
    }

})

export default style;