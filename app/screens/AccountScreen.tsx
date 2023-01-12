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
import { account, transaction } from "../components/FinanceApp/AccountInterface"
import { colors, spacing, typography } from "../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import AccountCarroousel from "../components/FinanceApp/AccountCarroousel"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import Transaction from "../components/FinanceApp/Transaction"
import AccounMenu from "../components/FinanceApp/AccounMenu"
import AccountCard from "../components/FinanceApp/AccountCard"



const { width, height } = Dimensions.get("window")

const AccountScreen = () => {
  const [accounts, setAccounts] = useState<account[]>([])
  const [transactions, setTransactions] = useState<transaction[]>([])

  const theme = useColorScheme()


  return (
    <View style={$screenContainer}>
      <SafeAreaView style={{ ...$container, backgroundColor: colors[theme].background }}>
        <View style={$title}>
          <View style={$sectionLeft}></View>
          <Text style={$titleSection}> Account History</Text>
          <View style={$sectionRight}>
            <Pressable>
              <Image
                resizeMode="cover"
                source={require("../components/images/Path 41164.png")}
              ></Image>
            </Pressable>
          </View>
        </View>
<AccountCard/>
        {/* <AccountCarroousel accounts={accounts} /> */}
        {/* <Transaction transactions={transactions} />
        <AccounMenu /> */}
      </SafeAreaView>
    </View>
  )
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

// El propósito de SafeAreaViewes representar contenido dentro de los límites del área segura de un dispositivo. Actualmente solo es aplicable a dispositivos
// iOS con iOS versión 11 o posterior.

export default AccountScreen
