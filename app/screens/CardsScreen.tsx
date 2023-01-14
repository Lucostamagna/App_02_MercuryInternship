import React from 'react'
import { View, ViewStyle, TextStyle } from 'react-native';
import { useColorScheme } from "react-native"
import { Text } from '../components';

import { colors, spacing, typography} from "../theme"

const CardsScreen = () => {
  const theme = useColorScheme()
  return (
    <View style={{ ...$ViewContainer, backgroundColor: colors[theme].cardBackground }}>
      <Text style={{ ...$Title, color: colors[theme].text }}> Card Screen</Text>
    </View>
  )
}

export default CardsScreen

const $ViewContainer: ViewStyle = {
  backgroundColor: colors.violetBackground,
  width: "100%",
  height:"100%",
  
}
const $Title: TextStyle = {
  fontFamily: typography.primary.bold,
  fontSize: 22,
  textAlign: 'center',
  marginTop:'50%'
  
  
}