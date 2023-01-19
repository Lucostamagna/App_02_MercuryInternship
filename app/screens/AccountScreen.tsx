import React, { useState, useEffect } from "react"
import {
  Text,
  View,
  useColorScheme,
  ViewStyle,
  Dimensions,
  TextStyle,
  Pressable,
  Image,
} from "react-native"
import axios from "axios"
import "../services/api/accountData"
import { account, transaction } from "../components/FinanceApp/AccountInterface"
import { colors, spacing, typography } from "../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import { navigate } from "../navigators"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import AccountCarroousel from "../components/FinanceApp/AccountCarroousel"
import Transaction from "../components/FinanceApp/Transaction"
import img7 from "../components/images/setting.png"
import { ScrollView } from "react-native-gesture-handler"
import { Button } from '../components/Button';


const AccountScreen = () => {
  const [accounts, setAccounts] = useState<account[]>([])
  const [transactions, setTransactions] = useState<transaction[]>([])

  const theme = useColorScheme()
  const { bottom } = useSafeAreaInsets()

  useEffect(() => {
    try {
      ;(async () => {
        const responseAccounts = await axios.get("/accounts")
        const responseTransactions = await axios.get("/transactions")
        setAccounts(responseAccounts.data.accounts)
        setTransactions(responseTransactions.data.transactions)
      })()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <View style={$screenContainer}>
      <SafeAreaView style={{ ...$container, backgroundColor: colors[theme].background }}>
        <ScrollView style={$ScrollView}>
        <View style={$title}>
          <View style={$sectionLeft}></View>
          <Text style={$titleSection}> Account History</Text>
          <View style={$sectionRight}>
            <Pressable onPress={() => navigate("SettingsScreen")} style={$logoContainer}>
              <Image source={img7}></Image>
            </Pressable>
          </View>
        </View>

        <AccountCarroousel accounts={accounts} />

        <Transaction transactions={transactions} />
       
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
const { width, height } = Dimensions.get("window")


const $ScrollView: ViewStyle = {
  flex:1
}
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

export default AccountScreen
