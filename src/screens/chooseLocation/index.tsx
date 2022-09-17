import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const ChooseLocation = () => {
  return (
    <View style={{
      // height:500
    }}>
      <TouchableOpacity onPress={()=>{
        console.log("first")
      }}>
        <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
                console.log("first")
            }}
            query={{
                key: process.env.GOOGLE_MAPS_APIKEY,
                language: 'en',
            }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ChooseLocation