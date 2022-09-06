import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    categoryContainer:{
        paddingHorizontal:30, 
        paddingVertical:30, 
        backgroundColor:"#161616", 
        borderTopLeftRadius:30, 
        borderTopRightRadius:30,
        marginTop:-40,
        minHeight: 400
    },
    categories:{
        flexDirection:"row", 
        alignItems:"center"},
    categoryImg:{
        height:70, 
        width:70, 
        borderRadius:35},
    categoryTitle:{
        color:"#fff", 
        fontSize:22, 
        lineHeight:27, 
        fontWeight:"600"
    },
    separator:{
        marginVertical:10,
        width:"100%",
        height:1,
        backgroundColor:"#6B6A6A"
    }
})

export default styles