import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    addinTitle:{
        fontFamily:"Inter_600SemiBold",
        fontSize:16,
        lineHeight:19,
        color:"#E1E1E1", 
        marginBottom:20
    },
    amenityTitleContainer:{
        flexDirection:"row", 
        justifyContent:"space-between",alignItems:"center"
    },
    amenityTitle:{
        fontFamily:"Inter_600SemiBold",
        fontSize:16,
        lineHeight:19,
        color:"#E1E1E1",
        marginVertical:20
    },
    amenityContainer:{
        paddingVertical:15,
        paddingHorizontal:20,
        backgroundColor:"#0A0A0A",
        borderRadius:4,
        marginBottom:8,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    amenityName:{
        fontFamily:"Inter_400Regular",
        color:"#E1E1E1",
        fontSize:14,
        lineHeight:17
    },
    amenityPrice:{
        fontFamily:"Inter_400Regular",
        color:"#E1E1E1",
        fontSize:14,
        lineHeight:17,
        marginRight:10,
    },
    priceContainer:{
        flexDirection:'row',
        alignItems:"center"
    }
 

})

export default style;