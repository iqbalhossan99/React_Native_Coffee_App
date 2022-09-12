import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    bannerContainer:{
        backgroundColor:"#07746E", 
        paddingHorizontal:34, 
        flexDirection:"row" , 
        alignItems:"center", 
        justifyContent:"center",
    },
    prInfo:{
        flex:1, 
        paddingBottom: 20
    },
    prTitle:{
        fontFamily:"Inter_700Bold", 
        fontSize:30, 
        color:"#fff",
        lineHeight:50
    },
    prepTime:{
        fontFamily:"Inter_600SemiBold", 
        fontSize:18, color:"#fff", 
        lineHeight:22
    },
    amenities:{
        fontFamily:"Inter_400Regular", 
        fontSize:16, 
        color:"#fff",
        lineHeight:16
    },
    prImg:{
        width:110, 
        height:110, 
        borderRadius:55
    }

})

export default style