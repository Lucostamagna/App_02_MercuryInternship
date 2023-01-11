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
import Img2 from "../components/images/CardIcon.png"
import Img3 from "../components/images/RestaurantIcon.png"
import Img4 from "../components/images/TravelltIcon.png"
import Img5 from "../components/images/ConstructionIcon.png"
import Img6 from "../components/images/PersonIcon.png"

const mock = new MockAdapter(axios)

mock.onGet("/accounts").reply(200, {
  accounts: [
    {
      id: "1234-4567-3456-3456",
      currentBalance: 76451.0,
    },
    {
      id: "1234-4567-3456-3456",
      currentBalance: 76451.0,
    },
    ,
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
      img: Img2,
    },
    {
      id: `"Francois" Restaurant Dinner`,
      title: `"Francois" Restaurant Dinner`,
      date: "15th May, 20:56",
      amount: -1158.0,
      coin: "EUR",
      img: Img3,
    },
    {
      id: `"AirMax" Travel to Paris`,
      title: `"AirMax" Travel to Paris`,
      date: "14th May, 16:00",
      amount: -813.0,
      coin: "EUR",
      img: Img4,
    },
    {
      id: `Construction ltd`,
      title: `Construction ltd`,
      date: "11th May, 09:26",
      amount: 24500.0,
      coin: "USD",
      img: Img5,
    },
    {
      id: `Robert Smith`,
      title: `Robert Smith`,
      date: "03rd May, 12:06",
      amount: 11215.0,
      coin: "USD",
      img: Img6,
    },
  ],
})
const { width, height } = Dimensions.get("window")

const AccountScreen = () => {
  const [accounts, setAccounts] = useState<account[]>([])
  const [transactions, setTransactions] = useState<transaction[]>([])

  const theme = useColorScheme()

  useEffect(() => {
    try {
      ;(async () => {
        const [responseAccounts, responseTransactions] = await Promise.all([
          axios.get("/Accounts"),
          axios.get("/Transactions"),
        ])

        setAccounts(responseAccounts.data.accounts)
        setTransactions(responseTransactions.data.transactions)
      })()
    } catch (err) {
      console.log(err)
    }
  }, [])

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

        <AccountCarroousel accounts={accounts} />
        <Transaction transactions={transactions} />
        <AccounMenu />
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
