import React, {useState, useEffect} from 'react'
import { View, ViewStyle, Dimensions, useColorScheme, } from 'react-native';
import axios from 'axios';
import Transaction from "../components/FinanceApp/Transaction"
import { transaction } from "../components/FinanceApp/AccountInterface"
import { Screen } from "../components"
import { colors } from "../theme"
import { spacing } from '../theme/spacing';
import { api } from '../services/api';

const AllTransactionsScreen = () => {
  const [transactions, setTransactions] = useState<transaction[]>([])
  const [activeAccount, setActiveAccount] = useState(0)

  const theme = useColorScheme()

  useEffect(() => {
    try {
      ;(async () => {
        const responseTransactions = await api.getTransactions(5)
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
        <Transaction transactions={transactions} CurrentAccount={activeAccount}/>
      </View>
    </Screen>
  )
}

const $Screen: ViewStyle = {
  marginVertical: spacing.medium,
}

const $View: ViewStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}
export default AllTransactionsScreen
