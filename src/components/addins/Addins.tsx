import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import style from "./style"
import Line from '../line/Line';
import { AntDesign } from '@expo/vector-icons';
import CustomCheck from '../customCheckbox/CustomCheckbox';

const Addins = () => {
    const [currentIndex, setCurrentIndex] = useState<number>();
  
    const addInsAmenities = [
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
    <View>
        <Text style={style.addinTitle}>Add-ins</Text>
        <Line backgroundColor="#fff"/>
        {/* Map the add-ins */}
        {addInsAmenities.map(({id, name, values}, index )=>(
            <TouchableOpacity  
                onPress={() => {
                    setCurrentIndex(index === currentIndex ? null : index);                
                }}
                key={id} 
                activeOpacity={0.8}
            >
                <View style={style.amenityTitleContainer}>
                    <Text style={style.amenityTitle}>{name}</Text>
                    {
                        index === currentIndex ? <AntDesign name="down" size={20} color="#fff" /> 
                        : 
                        <AntDesign name="right" size={20} color="#fff" />
                    }
                </View>

                {index === currentIndex &&
                    <View style={{
                    marginBottom:22
                    }}>
                    {values.map((item,index)=>(

                        <TouchableOpacity key={id} style={style.amenityContainer}                        
                        activeOpacity={.9}
                        
                        >
                            <Text style={style.amenityName}>{item.title}</Text>

                            <View style={style.priceContainer}>
                                <Text style={style.amenityPrice}>{item.price}</Text>
                                <CustomCheck item={item} 
                                />                             
                            </View>
                        </TouchableOpacity>
                        ))}
                    </View>        
                }   
                <Line backgroundColor="#575151"/>   
            </TouchableOpacity>
        ))}
  </View>  
  )
}

export default Addins