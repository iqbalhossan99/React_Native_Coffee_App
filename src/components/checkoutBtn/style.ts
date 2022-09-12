import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    checkoutBtn:{
        backgroundColor:"#15746E",
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:30,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center", 
        position:"absolute",
        zIndex:9,
        bottom:180,
        width:"90%",
        marginHorizontal:20

    },
    prepText:{
        fontFamily:"Inter_400Regular",
        color:"#ffffff"
    },
    prepTime:{
        fontFamily:"Inter_600SemiBold",
        color:"#ffffff"
    },
    verticalLine:{
        backgroundColor:"#E5E5E5",
        height:"100%",
        width:1
    },
    chckoutText:{
        fontFamily:"Inter_700Bold",
        color:"#ffffff",
        fontSize:16,
        lineHeight:22,
        marginRight:20
    }
})

export default style