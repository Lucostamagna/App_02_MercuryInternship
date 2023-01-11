import React from "react"
import { View, ViewStyle, FlatList, Image, TextStyle, Pressable, Text } from "react-native"
import TransactionCard from "./TransactionCard"
import { colors, spacing, typography } from "../../theme"
import { useColorScheme } from "react-native"
import { transaction } from "./AccountInterface"

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
    <View style={{ ...$transactionsContainer, backgroundColor: colors[theme].cardBackground }}>
      <View style={$transactionsTitle}>
        <Text style={{ ...$Title, color: colors[theme].text }}> Recent transaction</Text>
        <Pressable style={$logoContainer}>
          <Image resizeMode="cover" source={require("../images/Path 41164.png")}></Image>
        </Pressable>
      </View>
      <FlatList
        keyExtractor={(Transaction) => Transaction.id}
        data={transactions}
        renderItem={renderItem}
      />
    </View>
  )
}
const $transactionsContainer: ViewStyle = {
  backgroundColor: colors.whiteBackground,
  width: "93%",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: 30,
  paddingHorizontal: spacing.large,
  paddingTop: spacing.medium,
  paddingBottom: spacing.medium,
}

const $transactionsTitle: ViewStyle = {
  paddingBottom: spacing.extraSmall,
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
