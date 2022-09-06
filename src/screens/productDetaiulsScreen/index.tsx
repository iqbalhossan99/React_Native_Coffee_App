import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, Modal, Alert, StyleSheet, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import Line from '../../line/Line';
import Checkbox from 'expo-checkbox';

const ProductDetaiulsScreen = () => {

  const [currentIndex, setCurrentIndex] = useState<number>();
  const [isChecked, setChecked] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);


  const addIns = [
    {
    id:1,
    name:"Flavors",
    values:[
      { id: 1,
        title:"Vanila",
        price:2.5
      }, 
      {
        id: 2,
        title:"Hazelnut",
        price:.5
      },
      {
        id: 3,
        title:"CAR-A-VAN",
        price: 1.7
         
      },
    ]
  },
    {
    id:2,
    name:"Dairy",
    values:[
      { id: 1,
        title:"Vanila",
        price:2.5
      }, 
      {
        id: 2,
        title:"Hazelnut",
        price:.5
      },
      {
        id: 3,
        title:"CAR-A-VAN",
        price: 1.7
         
      },
    ]
  },
    {
    id:3,
    name:"Extra Espresso Shot",
    values:[
      { id: 1,
        title:"Vanila",
        price:2.5
      }, 
      {
        id: 2,
        title:"Hazelnut",
        price:.5
      },
      {
        id: 3,
        title:"CAR-A-VAN",
        price: 1.7
         
      },
    ]
  }

]

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Banner Section */}
        <View style={{backgroundColor:"#07746E", paddingHorizontal:34, }}>
          <View style={{flexDirection:"row" , alignItems:"center", justifyContent:"center", }}>
            <View style={{flex:1, paddingBottom: 20}}>
              <Text style={{fontFamily:"Inter_700Bold", fontSize:30, color:"#fff",lineHeight:50}}>Iced Latte</Text>
              <Text style={{fontFamily:"Inter_600SemiBold", fontSize:18, color:"#fff", lineHeight:22}}>Prep time: 5-8  min</Text>
              <View style={{width:165, height:2, backgroundColor:"#fff", marginTop:5, marginBottom:14}}></View>
              <Text style={{fontFamily:"Inter_400Regular", fontSize:16, color:"#fff",lineHeight:16}}>Maple syrup, ice, whole milk, espresso shots</Text>
            </View>
            <View style={{}}>
                <Image style={{width:110, height:110, borderRadius:55}} source={{uri:"https://www.alphafoodie.com/wp-content/uploads/2020/08/iced-latte.jpeg"}}/>
            </View>
          
          </View>
        </View>
        {/* Bottom Section */}
        <View style={{
          backgroundColor:"#161616", paddingTop:44, paddingBottom:20, paddingHorizontal:25
        }}>
          {/* Size Section */}
          <View style={{paddingBottom:44}}>
            <Text style={{fontFamily:"Inter_600SemiBold", fontSize:16, lineHeight:19, color:"#fff"}}>Size</Text>
            {/* Sizes */}
            <View style={{paddingTop:20, paddingBottom:25, flexDirection:"row", justifyContent:"space-around",  alignItems:"flex-end"}}>
              <View>
              <MaterialCommunityIcons name="cup-outline" size={44} color="#fff" />
              <Text style={{color:"#fff", fontSize:10, lineHeight:12, textAlign:"center", marginTop:8}}>Large</Text>
              </View>
              <View>
                <MaterialCommunityIcons name="cup-outline" size={36} color="#FF8400" />
                <Text style={{color:"#FF8400", fontSize:10, lineHeight:12, textAlign:"center", marginTop:8}}>Medium</Text>
              </View>
              <View>
              <MaterialCommunityIcons name="cup-outline" size={32} color="#fff" />
              <Text style={{color:"#fff", fontSize:10, lineHeight:12, textAlign:"center", marginTop:8}}>Small</Text>
              </View>
            </View>

            {/* Bar */}
            <View style={{
              backgroundColor:"#000000",
              height:7, 
              width:"100%", 
              borderRadius:3.5,
              flexDirection:"row",
              justifyContent:"space-around"
            }}>
              <View style={{
                backgroundColor:"#FF8400",
                height:7,
                width:7,
                borderRadius:3.5
              }}></View>
              <View style={{
                backgroundColor:"#FF8400",
                height:7,
                width:7,
                borderRadius:3.5
              }}></View>
              <View style={{
                backgroundColor:"#FF8400",
                height:7,
                width:7,
                borderRadius:3.5
              }}></View>
            </View>
          </View>

          {/* Add-In Section */}
          <View>
            <Text style={{
              fontFamily:"Inter_600SemiBold",
              fontSize:16,
              lineHeight:19,
              color:"#E1E1E1", 
              marginBottom:20
            }}>Add-ins</Text>

            <Line backgroundColor="#fff"/>

            {/* Map the add-ins */}
            {addIns.map(({id, name, values}, index )=>(
              <TouchableOpacity  onPress={() => {
                setCurrentIndex(index === currentIndex ? null : index);                
              }}
               key={id} 
              activeOpacity={0.8}
              >
                <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                  <Text style={{
                    fontFamily:"Inter_600SemiBold",
                    fontSize:16,
                    lineHeight:19,
                    color:"#E1E1E1",
                    marginVertical:20
                  }}>{name}</Text>
                  {
                    index === currentIndex ? <AntDesign name="down" size={20} color="#fff" /> 
                    : 
                    <AntDesign name="right" size={20} color="#fff" />
                  }
                </View>

                  {
                  index === currentIndex &&
                    <View style={{
                      marginBottom:22
                    }}>
                      {values.map(({id, title, price})=>(

                          <View key={id} style={{
                            paddingVertical:15,
                            paddingHorizontal:20,
                            backgroundColor:"#0A0A0A",
                            borderRadius:4,
                            marginBottom:8,
                            flexDirection:"row",
                            justifyContent:"space-between",
                            alignItems:"center"
                          }}>

                            <Text style={{
                              fontFamily:"Inter_400Regular",
                              color:"#E1E1E1",
                              fontSize:14,
                              lineHeight:17
                            }}>{title}</Text>

                            <View style={{
                              // flexDirection:'row'
                            }}>
                              <Text style={{
                                fontFamily:"Inter_400Regular",
                                color:"#E1E1E1",
                                fontSize:14,
                                lineHeight:17,
                                // marginRight:10
                                marginBottom:5
                              }}>{price}</Text>
                              <Checkbox style={{
                                backgroundColor:"#fff",
                                borderWidth:0,
                                padding: 12,
                                borderRadius:5
                                
                              }}  
                              value={isChecked} 
                              onValueChange={()=>setChecked(!isChecked)} 
                              />
                            </View>
                          </View>
                        ))}
                  </View>        
                  }   
                {/* Under Line */}
                <Line backgroundColor="#575151"/>   
              </TouchableOpacity>
              ))}
          </View>  
          {/* Special Instruction */}
          <View>
            <Text style={{
              fontFamily:"Inter_600SemiBold",
              fontSize:16,
              lineHeight:19,
              color:"#e1e1e1",
              paddingVertical:15
            }}>Special Instructions</Text>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    alignItems:"center",
                    marginBottom:30
                  }}>
                    <Text style={styles.modalText}>Special Instructions</Text>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} >
                      <AntDesign name="close" size={20} color="#161616" />
                    </TouchableOpacity>
                  </View>                                   
                  <TextInput 
                    style={{
                      borderRadius:15,
                      backgroundColor:"#fff",
                      paddingTop:0,
                      paddingHorizontal:15,
                      height:100,
                      marginBottom:10
                    }} 
                    placeholder={"Enter special instructions here!"}
                    multiline
                    />
                    <TouchableOpacity style={{
                      backgroundColor:"#FF8400",
                      paddingVertical:12,
                      borderRadius:24,                      
                    }}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={{
                        textAlign:"center",
                        color:"#fff",
                        fontFamily:"Inter_400Regular",
                        fontSize:16,
                      }}>Confirm</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </Modal>
            {/* <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable> */}
            <TouchableOpacity 
              style={{
                flexDirection:"row",
                alignItems:"center", 
                marginBottom:25              
              }}
              onPress={() => setModalVisible(true)}
              >
              <SimpleLineIcons name="note" size={24} color="#fff" />
              <Text style={{
                fontFamily:"Inter_600SemiBold",
                fontSize:14,
                lineHeight:17,
                color:"#E3D9BD",
                marginLeft:25
              }}>Add</Text>             
            </TouchableOpacity>
            <Line backgroundColor="#575151"/>
          </View> 
          {/* Quantity and Price */}
          <View>
            <Text style={{
              fontFamily:"Inter_600SemiBold",
              fontSize:16,
              lineHeight:19,
              color:"#e1e1e1",
              paddingTop:15
            }} >Quantity</Text>
            <View style={{
              flexDirection:"row",
              justifyContent:"space-between"
            }}>
              <View style={{
                flexDirection:"row",
                alignItems:"center"
              }}>
                <TouchableOpacity>
                  <AntDesign name="minuscircle" size={30} color="#FF8400" /> 
                </TouchableOpacity>
                <Text style={{
                  fontFamily:"Inter_400Regular",
                  fontSize:18,
                  lineHeight:22,
                  color:"#E1E1E1",
                  marginHorizontal:15
                }}>2</Text>
                <TouchableOpacity>
                  <AntDesign name="pluscircle" size={30} color="#FF8400" /> 
                </TouchableOpacity>
              </View>
              <View style={{
                backgroundColor:"#07746E",
                paddingVertical:17,
                paddingHorizontal:20,
                borderRadius:30
              }}>
                <Text style={{
                  fontFamily:"Inter_600SemiBold",
                  fontSize:16,
                  lineHeight:19,
                  color:"#fff"
                }}>
                  Add To Cart $ 5.60
                </Text>
              </View>
            </View>
          </View>
        </View> 
      </ScrollView>
    </SafeAreaView>
  ) }

export default ProductDetaiulsScreen



const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: "center",
    marginTop: 22
  },
  modalView: {
    // margin: 20,
    backgroundColor: "#07746E",
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom:30,
    paddingHorizontal: 27,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
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
});
