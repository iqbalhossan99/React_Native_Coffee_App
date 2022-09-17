import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    topSubMenuContainer:{ 
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:35
    },
    menu:{
        flexDirection:"row",
        alignItems:"center"
    },
    menuText:{
        color:"#fff", 
        fontFamily:"Inter_400Regular", 
        fontSize:16,
        lineHeight:22
    },
    categoryName:{
        color:"#fff",
        fontFamily:"Inter_400Regular", 
        fontSize:16, 
        lineHeight:22
    }
})

export default style;