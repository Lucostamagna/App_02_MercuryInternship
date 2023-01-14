import React from 'react'
import { View, ViewStyle, Text, TextStyle } from 'react-native';
import { useColorScheme } from "react-native"


import { colors, spacing, typography} from "../theme"
const DashboardScreen = () => {
  const theme = useColorScheme()
  return (
    <View style={{ ...$ViewContainer, backgroundColor: colors[theme].cardBackground }}>
    <Text style={{ ...$Title, color: colors[theme].text }}> Dashboard Screen </Text>
   </View>
  )
}

export default DashboardScreen
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