/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme } from "react-native"
import Config from "../config"
import {WelcomeScreen} from "../screens/WelcomeScreen"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { ErrorBoundary } from '../screens/ErrorScreen/ErrorBoundary';
import AccountScreen from '../screens/AccountScreen';
import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import TransactionCard from "../components/FinanceApp/TransactionCard"
import SettingsScreen from '../screens/SettingsScreen';
import AllTransactionScreen from '../screens/AllTransactionScreen';
import AccountMenu from '../components/FinanceApp/AccountMenu';
import img1 from "../components/images/CardIcon.png"
import img2 from "../components/images/RestaurantIcon.png"
import img3 from "../components/images/TravelltIcon.png"
import img4 from "../components/images/ConstructionIcon.png"
import img5 from "../components/images/PersonIcon.png"


// const mock = new MockAdapter(axios)

// mock.onGet("/accounts").reply(200, {
//   accounts: [
//     {
//       id: "1234-4567-3456-3456",
//       currentBalance: 76451.0,
//     },
//     {
//       id: "1234-4567-3456-9999",
//       currentBalance: 12455.0,
//     },
//     {
//       id: "1234-4567-3456-8888",
//       currentBalance: 90.0,
//     },
//     {
//       id: "1234-4567-3456-7777",
//       currentBalance: 51200.5,
//     },
//   ],
// })

// mock.onGet("/transactions").reply(200, {
//   transactions: [
//     {
//       id: `"Golub" Taxi Transportation`,
//       title: `"Golub" Taxi Transportation`,
//       date: "20th May, 18:39",
//       amount: -345.0,
//       coin: "EUR",
//       img: img1
//     },
//     {
//       id: `"Francois" Restaurant Dinner`,
//       title: `"Francois" Restaurant Dinner`,
//       date: "15th May, 20:56",
//       amount: -1158.0,
//       coin: "EUR",
//       img: img2
//     },
//     {
//       id: `"AirMax" Travel to Paris`,
//       title: `"AirMax" Travel to Paris`,
//       date: "14th May, 16:00",
//       amount: -813.0,
//       coin: "EUR",
//       img: img3
//     },
//     {
//       id: `Construction ltd`,
//       title: `Construction ltd`,
//       date: "11th May, 09:26",
//       amount: 24500.0,
//       coin: "USD",
//       img: img4
//     },
//     {
//       id: `Robert Smith`,
//       title: `Robert Smith`,
//       date: "03rd May, 12:06",
//       amount: 11215.0,
//       coin: "USD",
//       img: img5
//     },
//   ],
// })

export type AppStackParamList = {
  // Account: undefined
  Welcome:undefined,
  SettingsScreen:undefined,
  AllTransactionsScreen:undefined
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
          <Stack.Screen name="Welcome" component={AccountMenu} />
          <Stack.Screen name="SettingsScreen" component={SettingsScreen}/>
          <Stack.Screen name="AllTransactionsScreen" component={AllTransactionScreen}/>                                     
    </Stack.Navigator>
  )
})

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
})
