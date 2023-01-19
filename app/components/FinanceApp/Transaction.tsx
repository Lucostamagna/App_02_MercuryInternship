import React from "react"
import { View, ViewStyle, FlatList, Image, TextStyle, Pressable, Text } from "react-native"
import TransactionCard from "./TransactionCard"
import { colors, spacing, typography } from "../../theme"
import { useColorScheme } from "react-native"
import { transaction } from "./AccountInterface"
import img6 from "../images/line.png"
import { ScrollView } from "react-native-gesture-handler"

interface TransactionProp {
  transactions: transaction[]
}
interface IRender {
  item: transaction
}

const Transaction = ({ transactions }: TransactionProp) => {
  const theme = useColorScheme()

  const renderItem = ({ item: transaction }: IRender) => (
    <TransactionCard
      transactionData={transaction}
      Id={transactions[transactions.length - 1].id === transaction.id}
    />
  )
  
  return (
    <View>
    <View style={{ ...$transactionsContainer, backgroundColor: colors[theme].cardBackground }}>
      <View style={$transactionsTitle}>
        <Text style={{ ...$Title, color: colors[theme].text }}> Recent transaction</Text>
        <Pressable style={$logoContainer}>
          <Image source={img6}></Image>
        </Pressable>
      </View>
      <FlatList
        keyExtractor={(Transaction) => Transaction.id}
        data={transactions}
        renderItem={renderItem}
        
      />
      <Pressable style={$PressableBotton}>
        <Text style={{ ...$ButtonText, color: colors[theme].text }}> All Transactions</Text>
      </Pressable>
    </View>
    </View>
    
  )
}


const $PressableBotton:  ViewStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F76654",
  width: '50%',
  height:'8%',
  alignSelf: "center",
  borderRadius: 5,
  marginTop: 50,
}

const $ButtonText: TextStyle = {
  fontSize: 14,
  fontFamily: typography.primary.semiBold,
}

const $transactionsContainer: ViewStyle = {
  backgroundColor: colors.whiteBackground,
  width: "93%",
  
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: 30,
  paddingHorizontal: spacing.large,
  paddingTop: spacing.large,
  paddingBottom: "30%",
 
}

const $transactionsTitle: ViewStyle = {
  paddingBottom: spacing.large,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}
const $Title: TextStyle = {
  lineHeight: 21,
  fontSize: 17,
  fontFamily: typography.primary.semiBold,
}
const $logoContainer: ViewStyle = {
  backgroundColor: colors.violetBackground,
  width: 30,
  height: 30,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 15,
}
export default Transaction
