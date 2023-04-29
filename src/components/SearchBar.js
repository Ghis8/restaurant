import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons'


const SearchBar = () => {
  return (
    <View className="bg-white flex-row mt-5">
       <GooglePlacesAutocomplete 
        placeholder='Search ...'
        styles={{
            textInput:{
                borderRadius:20,
                fontWeight:'700',
                marginTop:5
            },
            textInputContainer:{
              backgroundColor:"#eee",
              borderRadius:50,
              flexDirection:'row',
              alignItems:'center',
              marginHorizontal:20
            }

        }}
    />
    </View>
  )
}

export default SearchBar

