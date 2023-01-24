import React, { useState, useEffect } from "react"
import {
  RefreshControl,
  Text,
  View,
  useColorScheme,
  ViewStyle,
  Dimensions,
  TextStyle,
  Pressable,
  Image,
} from "react-native"
import "../services/api/api.mock"
import { observer } from "mobx-react-lite"
import { account, transaction } from "../components/FinanceApp/AccountInterface"
import { colors, spacing, typography } from "../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import { navigate } from "../navigators"
import {AccountCarroousel} from "../components/FinanceApp/AccountCarroousel"
import {Transaction} from "../components/FinanceApp/Transaction"
import img7 from "../components/images/setting.png"
import { api } from "../services/api"
import { Screen } from '../components/Screen';


export const AccountScreen = observer(function AccountScreen () {
  const [accounts, setAccounts] = useState<account[]>([])
  const [transactions, setTransactions] = useState<transaction[]>([])
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [activeAccount, setActiveAccount] = useState(0)

  const theme = useColorScheme()
 
  

  const refreshData = async () => {
    ;(async () => {
      setIsRefreshing(true)
      const responseTransactions = await api.getTransactions(activeAccount)
      setTransactions(responseTransactions.data)
      setIsRefreshing(false)
    })()
  }
  useEffect(() => {
    ;(async () => {
      const [AccountsResponse] = await Promise.all([api.getAccounts()])
      setAccounts(AccountsResponse.data)
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const TransactionsResponse = await api.getTransactions(activeAccount)
      setTransactions(TransactionsResponse.data)
    })()
  }, [activeAccount])
  return (
    <Screen
      style={{ ...$screenContainer, backgroundColor: colors[theme].background }}
      preset="scroll"
      ScrollViewProps={{
        overScrollMode: "always",
        refreshControl: (
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={refreshData}
            tintColor="white"
            colors={["#523CF8"]}
          />
        ),
      }}
    >
      <SafeAreaView>
        <View style={$title}>
          <View style={$sectionLeft}></View>
          <Text style={$titleSection}> Account History</Text>
          <View style={$sectionRight}>
            <Pressable onPress={() => navigate("SettingsScreen")} style={$logoContainer}>
              <Image source={img7}></Image>
            </Pressable>
          </View>
        </View>
        <AccountCarroousel accounts={accounts} onChangeCurrentAccount={setActiveAccount} />
        <Transaction transactions={transactions} CurrentAccount={activeAccount} />
      </SafeAreaView>
    </Screen>
  )
})
const { width, height } = Dimensions.get("window")


const $screenContainer: ViewStyle = {
  backgroundColor: colors.violetBackground,
  minHeight: height,
  width,
}

const $container: ViewStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width,
  height,
}
const $title: ViewStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: spacing.large,
  flexDirection: "row",
}
const $sectionLeft: ViewStyle = {
  marginLeft: spacing.extraLarge,
}
const $titleSection: TextStyle = {
  fontSize: 17,
  textAlign: "center",
  color: "white",
  fontFamily: typography.primary.semiBold,
}

const $sectionRight: ViewStyle = {
  marginRight: spacing.small,
}
const $logoContainer: ViewStyle = {
  backgroundColor: "transparent",
  width: 30,
  height: 30,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

// El propósito de SafeAreaViewes representar contenido dentro de los límites del área segura de un dispositivo. Actualmente solo es aplicable a dispositivos
// iOS con iOS versión 11 o posterior.

// useEffect(() => {
  //   try {
  //     ;(async () => {
  //       const responseAccounts = await axios.get("/accounts")
  //       const responseTransactions = await axios.get("/transactions")
  //       setAccounts(responseAccounts.data.accounts)
  //       setTransactions(responseTransactions.data.transactions)
  //     })()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, [])