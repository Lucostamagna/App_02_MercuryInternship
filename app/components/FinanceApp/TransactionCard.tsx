import React from 'react'
import { View, useColorScheme, ViewStyle, Text, TextStyle } from 'react-native';
import { transaction } from './AccountInterface';
import {colors, spacing, typography} from "../../theme"






interface TProps{
  transactionData:transaction
  Id:boolean
}

const TransactionCard = ({transactionData, Id}:TProps) => {
const theme = useColorScheme()
  return ( 
    <View style= {$CardContainer}>
   <View style={$cardIcon}>
<Text> -</Text>
   </View>
   <View style={Id ? $conteinerId : { ...$conteinerText, borderColor: colors[theme].border}}>
<Text style={{...$transactionTitle, color:colors[theme].text}}> titulo</Text>
<Text style={{...$transactionData, color:colors [theme].description}}> data de trans</Text>

    
   </View>
   <View>
    
   </View>

    </View>
  )
}

export default TransactionCard;

const $CardContainer: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  backgroundColor:'red',
  marginBottom: spacing.tiny,
}
const $cardIcon:ViewStyle={
  marginRight: spacing.medium,
  backgroundColor: colors.orangeBackground,
  width: 30,
  height: 30,
  borderRadius: 8,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}
const $conteinerId:ViewStyle={
  width: "20%",
}
const $conteinerText:ViewStyle={
  width: "20%",
  borderBottomWidth: 1,
  borderColor: "#DCDCDC",
  paddingBottom: 13,
}
const $transactionTitle:TextStyle={
  textAlign: "left",
  lineHeight: 15,
  fontSize: 12,
  fontFamily: typography.primary.semiBold,
}
const $transactionData:TextStyle={
  textAlign: "left",
  lineHeight: 15,
  fontSize: 12,
  fontFamily: typography.primary.semiBold,
  color: colors.description
}