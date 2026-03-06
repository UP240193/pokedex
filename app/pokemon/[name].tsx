import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function pokemonDetailsScreen() {
    const params = useLocalSearchParams();
  return (
    <View>
      <Text> pokemonDetailsScreen</Text>
    </View>
  )
}