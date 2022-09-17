import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    bannerContainer:{
        backgroundColor:"#15746E",
        paddingVertical:20,
        paddingHorizontal:30
    },
    pickupLocationText:{
        // fontFamily:"Inter_900Black",
        fontSize:26,
        lineHeight:31,
        fontWeight:"700", 
        color:"#ffffff",
        marginBottom:10
    },
    location:{
        paddingVertical:12,
        paddingHorizontal:20,
        backgroundColor:"#ffffff",
        borderRadius:24,
        flexDirection:"row",
        alignItems:"center",
    },
   
    ListMapContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:20,
    },
    nearPlaceText:{
        fontFamily:"Inter_400Regular",
        fontSize: 16,
        lineHeight: 19,
        color:"#ffffff"
    },
    Listmap:{
        flexDirection:'row',
        backgroundColor:"#FF8400",
        // paddingHorizontal:20,
        // paddingVertical:10,
        padding:4,
        borderRadius:20

    },
    btn:{
        paddingVertical:7,
        paddingLeft:17,
        paddingRight:10,
    },
    activeListBtn:{
        backgroundColor:"#000000",
        borderBottomLeftRadius:14,
        borderTopLeftRadius:14,

    },
    btnText:{
        fontFamily:"Inter_500Medium",
        fontSize:16,
        lineHeight:19,
        color:"#E1E1E1"

    },
    // Bottom
    mapBottomSection:{
        backgroundColor:'#161616',
        paddingVertical:25,
        paddingHorizontal:35,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    placeName:{
        fontFamily:"Inter_600SemiBold",
        fontSize:18,
        lineHeight:22,
        color:"#ffffff",
        marginBottom:7
    },
    streetAdd:{
        fontFamily:"Inter_400Regular",
        fontSize:14,
        lineHeight:17,
        color:"#ffffff"
    },
    distance:{
        fontFamily:"Inter_400Regular",
        fontSize:16,
        lineHeight:19,
        color:"#ffffff"

    }
})

export default style;