import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    topMenuContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom: 25 
    },
    menus:{
        flexDirection:"row"
    },
    menuItem:{
        color:"#FFF", 
        fontSize:16,
        lineHeight:19,  
        marginRight:35,              
    },
    menuItemBorder:{
        borderBottomColor:"#FF8400",
        borderWidth:2,
    }
})

export default style;