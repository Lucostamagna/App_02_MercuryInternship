import React from "react"
import { View, useColorScheme, ViewStyle, Text, TextStyle, Image } from "react-native"
import { transaction } from "./AccountInterface"
import { colors, spacing, typography } from "../../theme"
import { ACCOUNT_CARD_HORIZONTAL_MARGIN } from './AccountCard';

interface TransactionCardProps {
  transactionData: transaction
  Id: boolean
}

const colorCode = (n: number) => {
  let color = ""
  n > 0 ? (color = "#523CF8") : (color = "#F76654")
  return color
}

const TransactionCard = ({ transactionData, Id }: TransactionCardProps) => {
  const theme = useColorScheme()

  return (
    <View style={$CardContainer}>
      <View style={$cardIcon}>
        <Image source={transactionData.img}></Image>
      </View>

      <View style={Id ? $conteinerId : { ...$conteinerText, borderColor: colors[theme].border }}>
        <Text style={{ ...$transactionTitle, color: colors[theme].text }}>
          {" "}
          {transactionData.title}
        </Text>

        <Text style={{ ...$transactionData, color: colors[theme].description }}>
          {" "}
          {transactionData.date}
         
          
        
       
          
        </Text>
      </View>

      <View
        // style={Id ? $conteinerRightId : { ...$conteinerText, borderColor: colors[theme].border }}
      >
        <Text
          style={{
            textAlign: "right",
            lineHeight: 15,
            fontSize: 12,
            fontFamily: typography.primary.semiBold,
            color: colorCode(transactionData.amount),
            
           
          }}
        >

          {transactionData.amount > 0
            ? `+${transactionData.amount.toFixed(2)}`
            : `${transactionData.amount.toFixed(2)}`}  
        </Text>
        <Text style={{ ...$TextRight, color: colors[theme].description }}>
          {transactionData.coin}
        </Text>
        
      </View>
    </View>
  )
}

export default TransactionCard

const $CardContainer: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  marginBottom: spacing.tiny,
}
const $cardIcon: ViewStyle = {
  marginRight: spacing.medium,
  backgroundColor: colors.orangeBackground,
  width: 30,
  height: 30,
  borderRadius: 8,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  
}
const $conteinerId: ViewStyle = {
  width: "62%",
}
const $conteinerRightId: ViewStyle = {
  width: "20%",
}
const $conteinerText: ViewStyle = {
  width: "62%",
  borderBottomWidth: 1,
  borderColor: "#DCDCDC",
  paddingBottom: 13,
}
const $transactionTitle: TextStyle = {
  textAlign: "left",
  lineHeight: 15,
  fontSize: 12,
  fontFamily: typography.primary.semiBold,
}
const $transactionData: TextStyle = {
  textAlign: "left",
  lineHeight: 15,
  fontSize: 12,
  fontFamily: typography.primary.semiBold,
}
const $TextRight: TextStyle = {
  textAlign: "right",
  lineHeight: 15,
  fontSize: 12,
  fontFamily: typography.primary.semiBold,
  color: colors.description,
}
