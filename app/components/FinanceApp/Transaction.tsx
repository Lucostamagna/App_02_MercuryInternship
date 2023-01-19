import React from "react"
import { View, ViewStyle, FlatList, Image, TextStyle, Pressable, Text } from "react-native"
import TransactionCard from "./TransactionCard"
import { colors, spacing, typography } from "../../theme"
import { useColorScheme } from "react-native"
import { transaction } from "./AccountInterface"
import img6 from "../images/line.png"

import { useRoute } from "@react-navigation/native"
import { navigate } from "../../navigators"

interface TransactionProp {
  transactions: transaction[]
}
interface IRender {
  item: transaction
}

const Transaction = ({ transactions }: TransactionProp) => {
  const theme = useColorScheme()
  const route = useRoute()

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
          data={route.name === "AccountScreen" ? transactions.slice(0, 5) : transactions}
          keyExtractor={(Transaction) => Transaction.id}
          renderItem={renderItem}
        />
        {route.name === "AccountScreen" && (
          <Pressable style={$PressableBotton} onPress={() => navigate("AllTransactionsScreen")}>
            <Text style={{ ...$ButtonText, color: colors[theme].text }}> All Transactions</Text>
          </Pressable>
        )}
      </View>
    </View>
  )
}


const $PressableBotton:  ViewStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
  width: '50%',
  height:'8%',
  alignSelf: "center",
  
  marginTop: 50,
}

const $ButtonText: TextStyle = {
  fontSize: 15,
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
