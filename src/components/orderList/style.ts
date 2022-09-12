import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    orderItem:{
        flexDirection:"row", 
        alignItems:"center",
        justifyContent:"space-between"
    },
    orderImg:{
        height:70, 
        width:70, 
        borderRadius:35
    },
    orderTitle:{
        fontFamily:"Inter_600SemiBold",
        color:"#fff", 
        fontSize:18, 
        lineHeight:27, 
    },
    orderSize:{
        fontFamily:"Inter_400Regular",
        fontSize:15,
        color:"#ffffff"
    },
    quantityPrice:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-end",
        paddingVertical:10
    },
    removeText:{
        fontFamily:"Inter_400Regular",
        fontSize:12,
        lineHeight:12,
        color:"#07746E",
        marginRight:5
    },
    icon:{
        color:"#07746E"
    },
    price:{
        fontFamily:"Inter_400Regular",
        fontSize:16,
        // lineHeight:12,
        color:"#07746E",
        marginLeft:5
    },
    separator:{
        marginVertical:15,
        width:"100%",
        height:1,
        backgroundColor:"#6B6A6A"
    },

})

export default style;