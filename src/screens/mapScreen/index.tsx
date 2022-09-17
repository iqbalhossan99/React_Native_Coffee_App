import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import style from './style';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const MapScreen = () => {
    // khilgaon
    const pick = {
        latitude: 23.7566,
        longitude:90.4644,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    // banani
    const drop = {
        latitude: 23.7937,
        longitude:  90.4066,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

  return (
    <SafeAreaView>
        <View style={style.bannerContainer}>
            <Text style={style.pickupLocationText}>Pickup Location</Text>
            <View style={style.location}>
                <TouchableOpacity>
                    <EvilIcons name="location" size={24} color="black" /> 
                </TouchableOpacity>
                <TextInput placeholder='1 Stockton St, San Francis'/>
                
            </View>
            <View style={style.ListMapContainer}>
                <Text style={style.nearPlaceText}> 1 Places near you</Text>
                <View style={style.Listmap}>
                    <TouchableOpacity style={[style.btn, style.activeListBtn]}>
                        <Text style={style.btnText}>List</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btn}>
                        <Text style={style.btnText}>Map</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        {/* Map */}
        <View>
            <MapView
                style={{
                    width:"100%",
                    height:460,
                    // flex:1
                }}
                initialRegion={pick}                                
            >
                
                <Marker
                coordinate={pick}
                title="Khilgoan"
                description="Khilgoan Goverment school!"
                />            
                <Marker
                coordinate={drop}
                title="Banani"
                description="Banani Goverment school!"
                />            
                {/* <MapViewDirections
                    origin={pick}
                    destination={drop}
                    apikey={process.env.GOOGLE_MAPS_APIKEY}
                    strokeColor="hotPink"
                    strokeWidth={6}
                /> */}

            </MapView>
        </View>
        {/* Map bottom */}
        <View style={style.mapBottomSection}>
            <View>
                <Text style={style.placeName}>Ramona</Text>
                <Text style={style.streetAdd}>680 Main St</Text>
            </View>
            <Text style={style.distance}>1.2mi</Text>
        </View>
    </SafeAreaView>
  )
}

export default MapScreen;