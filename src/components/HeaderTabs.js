import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'


const HeaderTabs = () => {
  const [isSelected,setIsSelected]=useState(false)
  return (
    <View className="flex-row w-2/4 justify-center mx-auto mt-5">
      <TouchableOpacity onPress={()=>setIsSelected(false)} className={isSelected?'bg-white px-3  mr-5 py-2 rounded-full':"bg-black px-3  mr-5 py-2 rounded-full"}>
        <Text className={isSelected?'text-black':"text-white text-center"}>Delivery</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setIsSelected(true)} className= {isSelected ?"bg-black px-3  mr-5 py-2 rounded-full":"px-3 space-x-4 mr-5 py-2 rounded-full"}>
        <Text className={isSelected?"text-white":"text-black text-center"}>Pickup</Text>
    </TouchableOpacity>
    </View>
  )
}

export default HeaderTabs