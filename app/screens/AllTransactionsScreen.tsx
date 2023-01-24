import React, {FC, useState, useEffect} from 'react'
import { View, ViewStyle, Dimensions, useColorScheme, } from 'react-native';
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import Transaction from "../components/FinanceApp/Transaction"
import { transaction } from "../components/FinanceApp/AccountInterface"
import { Screen } from "../components"
import { colors } from "../theme"

import { spacing } from '../theme/spacing';
import { api } from '../services/api';
// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore


export const AllTransactionsScreen: FC<StackScreenProps<AppStackScreenProps, "Transaction">> = observer(function AllTransactionsScreen() {
  const [transactions, setTransactions] = useState<transaction[]>([])

  const theme = useColorScheme()

  useEffect(() => {
    try {
      ;(async () => {
        const responseTransactions = await api.getTransactions(10)
        setTransactions(responseTransactions.data)
      })()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <Screen style={$Screen}
    preset="scroll">
      <View style={{ ...$View, backgroundColor: colors[theme].background }}>
        <Transaction transactions={transactions} />
      </View>
    </Screen>
  )
})

const $Screen: ViewStyle = {
  marginVertical: spacing.medium,
}

const $View: ViewStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

