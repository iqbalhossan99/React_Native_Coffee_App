import { View, Text, Modal, Alert, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import style from "./style";
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import Line from '../line/Line';
import Button from '../button/Button';

const SpecialInstruction = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <View>
        <Text style={style.insTitle}>Special Instructions</Text>
        {/* Modal */}
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
                <Button text={"Confirm"} btnStyle={style.confrmBtn} textStyle={style.btnText} />
            </View>
            </View>
        </Modal>          
        <TouchableOpacity 
            style={style.addInsBtn}
            onPress={() => setModalVisible(true)}
            >
            <SimpleLineIcons name="note" size={24} color="#fff" />
            <Text style={style.addInsBtnText}>Add</Text>             
        </TouchableOpacity>
        <Line backgroundColor="#575151"/>
    </View> 
  )
}

export default SpecialInstruction;