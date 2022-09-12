import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        // alignItems: "center",
        marginTop: 22
      },
    modalView: {
    backgroundColor: "#07746E",
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom:30,
    paddingHorizontal: 27,
    },
    modalTitleClose:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:30
    },
    inputField:{
        borderRadius:15,
        backgroundColor:"#fff",
        paddingTop:0,
        paddingHorizontal:15,
        height:100,
        marginBottom:10
    },
    confrmBtn:{
    backgroundColor:"#FF8400",
    paddingVertical:12,
    borderRadius:24,
    alignItems:"center",
    },
    btnText:{
        textAlign:"center",
        color:"#fff",
        fontFamily:"Inter_400Regular",
        fontSize:16,
    },
    textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
    },
    modalText: {
    fontFamily:"Inter_600SemiBold",
    fontSize:18,
    lineHeight:19,
    color:"#fff",
    }
})

export default style;