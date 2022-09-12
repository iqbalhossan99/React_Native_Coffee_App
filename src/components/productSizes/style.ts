import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    prSizesContainer:{
        paddingBottom:44
    },
    sizeTitle:{
        fontFamily:"Inter_600SemiBold",
        fontSize:16, 
        lineHeight:19, 
        color:"#fff"
    },
    sizes:{
        paddingTop:20, 
        paddingBottom:25, 
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"flex-end"
    },
    sizeName:{
        color:"#fff", 
        fontSize:10, 
        lineHeight:12, 
        textAlign:"center", 
        marginTop:8
    },

    // Bar
    barContainer:{
        backgroundColor:"#000000",
        height:7, 
        width:"100%", 
        borderRadius:3.5,
        flexDirection:"row",
        justifyContent:"space-around"
    },
    barPoint:{
        backgroundColor:"#FF8400",
        height:7,
        width:7,
        borderRadius:3.5
        }

})

export default style;