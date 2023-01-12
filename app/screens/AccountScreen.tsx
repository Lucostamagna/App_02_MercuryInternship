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
import AccountCarroousel from "../components/FinanceApp/AccountCarroousel"

import { colors, spacing, typography } from "../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import Transaction from "../components/FinanceApp/Transaction"
import AccounMenu from "../components/FinanceApp/AccounMenu"
import img1 from "../components/images/CardIcon.png"
import img2 from "../components/images/RestaurantIcon.png"
import img3 from "../components/images/TravelltIcon.png"
import img4 from "../components/images/ConstructionIcon.png"
import img5 from "../components/images/PersonIcon.png"
import { account, transaction } from "../components/FinanceApp/AccountInterface"
import img7 from "../components/images/setting.png"


const mock = new MockAdapter(axios)

mock.onGet("/accounts").reply(200, {
  accounts: [
    {
      id: "1234-4567-3456-3456",
      currentBalance: 76451.0,
    },
    {
      id: "1234-4567-3456-9999",
      currentBalance: 12455.0,
    },
    {
      id: "1234-4567-3456-8888",
      currentBalance: 90.0,
    },
    {
      id: "1234-4567-3456-7777",
      currentBalance: 51200.5,
    },
  ],
})

mock.onGet("/transactions").reply(200, {
  transactions: [
    {
      id: `"Golub" Taxi Transportation`,
      title: `"Golub" Taxi Transportation`,
      date: "20th May, 18:39",
      amount: -345.0,
      coin: "EUR",
      img: img1
    },
    {
      id: `"Francois" Restaurant Dinner`,
      title: `"Francois" Restaurant Dinner`,
      date: "15th May, 20:56",
      amount: -1158.0,
      coin: "EUR",
      img: img2
    },
    {
      id: `"AirMax" Travel to Paris`,
      title: `"AirMax" Travel to Paris`,
      date: "14th May, 16:00",
      amount: -813.0,
      coin: "EUR",
      img: img3
    },
    {
      id: `Construction ltd`,
      title: `Construction ltd`,
      date: "11th May, 09:26",
      amount: 24500.0,
      coin: "USD",
      img: img4
    },
    {
      id: `Robert Smith`,
      title: `Robert Smith`,
      date: "03rd May, 12:06",
      amount: 11215.0,
      coin: "USD",
      img: img5
    },
  ],
})

const AccountScreen = () => {
  const [accounts, setAccounts] = useState<account[]>([])
  const [transactions, setTransactions] = useState<transaction[]>([])

  const theme = useColorScheme()

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
        <View style={$title}>
          <View style={$sectionLeft}></View>
          <Text style={$titleSection}> Account History</Text>
          <View style={$sectionRight}>
            <Pressable style={$logoContainer}>
              <Image source={img7}></Image>
            </Pressable>
          </View>
        </View>

        <AccountCarroousel accounts={accounts} />
      
        <Transaction transactions={transactions} />
        <AccounMenu />
      </SafeAreaView>
    </View>
  )
}
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
  backgroundColor: colors.violetBackground,
  width:30,
  height: 30,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 15,
}

// El propósito de SafeAreaViewes representar contenido dentro de los límites del área segura de un dispositivo. Actualmente solo es aplicable a dispositivos
// iOS con iOS versión 11 o posterior.

export default AccountScreen
