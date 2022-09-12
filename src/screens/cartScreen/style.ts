import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    banner:{
        backgroundColor:"#07746E",
        paddingHorizontal:30,
        paddingTop:50,
        paddingBottom:20,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    pickupText:{
        fontFamily:"Inter_400Regular",
        fontSize:16,
        color:"#ffffff",
        lineHeight:20,
        marginBottom:10,
    },
    pageTitle:{
        fontFamily:"Inter_700Bold",
        fontSize:26,
        lineHeight:31,
        color:"#ffffff"
      
    },

    // Banner Right
    bannerRight:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#ffffff",
        paddingHorizontal:10,
        paddingVertical:5,
        height:40,
        borderRadius:20,
        // width:"100%"
    },
    locationText:{
        fontFamily:"Inter_600SemiBold",
        lineHeight:16

    },

    // Main Section
    mainSection:{
        backgroundColor:"#161616",
        paddingHorizontal:30,
        paddingTop:20,
        paddingBottom:300
        // minHeight:700
    },
    separator:{
        marginVertical:15,
        width:"100%",
        height:1,
        backgroundColor:"#6B6A6A"
    },
    // Add more btn
    addMoreBtn:{
        paddingVertical:15,
        paddingHorizontal:20,
        backgroundColor:"#FF8400",
        alignItems:"center",
        borderRadius:30,
        marginVertical:50,
        width:"80%",
        alignSelf:"center"    
    },
    btnText:{
        fontFamily:"Inter_600SemiBold",
        fontSize:16,
        lineHeight:19,
        color:"#fff",
    },

    

})

export default style;