import React from 'react'
import { View, useColorScheme, ViewStyle, Text } from 'react-native';

const TransactionCard = () => {

    const theme = useColorScheme()
  return ( 
    <View style= {$CardContainer}>
<Text> Hola</Text>

    </View>
  )
}

export default TransactionCard;

const $CardContainer: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  backgroundColor:'red'
//   marginBottom: spacing.tiny,
}