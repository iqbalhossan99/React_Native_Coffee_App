import { View, Text, Modal, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Button from '../button/Button';
import { AntDesign } from '@expo/vector-icons';
import style from "./style";

const InsModal = ({modalVisible, setModalVisible}) => {
  return (
    <View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }}
        >
            <View style={style.centeredView}>
            <View style={style.modalView}>
                <View style={style.modalTitleClose}>
                    <Text style={style.modalText}>Special Instructions</Text>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} >
                        <AntDesign name="close" size={20} color="#161616" />
                    </TouchableOpacity>
                </View>                                   
                <TextInput 
                style={style.inputField} 
                placeholder={"Enter special instructions here!"}
                multiline
                />
                <Button text={"Confirm"} btnStyle={style.confrmBtn} textStyle={style.btnText}/>
            </View>
            </View>
        </Modal> 
    </View>     
  )
}

export default InsModal