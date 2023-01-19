import React from "react"
import {
  ViewStyle,
  Dimensions,
  Image,
  Pressable,
  useColorScheme,
  ImageStyle,
  View,
} from "react-native"
import { colors } from "../../theme"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import img1 from "../images/wallet.png"
import img2 from "../images/card.png"
import img3 from "../images/transaction.png"
import img4 from "../images/archive.png"
import DashboardScreen from "../../screens/DashboardScreen"
import CardsScreen from "../../screens/CardsScreen"
import PaymentScreen from "../../screens/PaymentScreen"
import AccountScreen from "../../screens/AccountScreen"

const { width } = Dimensions.get("window")

export type MenuList = {
  DashboardScreen: undefined
  CardsScreen: undefined
  AccountScreen: undefined
  PaymentScreen: undefined
}

const Switch = createBottomTabNavigator<MenuList>()
const AccountMenu = () => {
  const theme = useColorScheme()
  const { bottom } = useSafeAreaInsets()
  return (
    <Switch.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: [
          {
            height: bottom + 96 , 
            backgroundColor: colors[theme].cardBackground, 
            position:"absolute", 
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
           
            
          },
        ],
        tabBarShowLabel:false,
      }}
    >
      <Switch.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused }) => <Image source={img1} style={focused ? $Activate : ({tintColor:colors[theme].iconDesactivated})}/> 
        }}
      />
      <Switch.Screen
        name="CardsScreen"
        component={CardsScreen}
        options={{
          tabBarIcon: ({ focused }) => <Image source={img2} style={focused ? $Activate : ({tintColor:colors[theme].iconDesactivated})}/> 
        }}
      />
      <Switch.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => <Image source={img3} style={focused ? $Activate : ({tintColor:colors[theme].iconDesactivated})}/> ,
        }}
      />
      <Switch.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{
          tabBarIcon: ({ focused }) => <Image source={img4}  style={focused ? $Activate : ({tintColor:colors[theme].iconDesactivated})}/>,
        }}
      />
    </Switch.Navigator>

    //   <Pressable style={{ ...$menuContainer, backgroundColor: colors[theme].cardBackground }}>
    //   <Image source={img1} style={{ ...$menuIcon, tintColor: colors[theme].icon }}></Image>
    //   <Image source={img2} style={{ ...$menuIcon, tintColor: colors[theme].icon }}></Image>
    //   <Image source={img3}></Image>
    //   <Image source={img4} style={{ ...$menuIcon, tintColor: colors[theme].icon }}></Image>
    // </Pressable>
    // )
  )
}

export default AccountMenu
// const $menuContainer: ViewStyle = {
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "space-evenly",
//   alignItems: "center",
//   backgroundColor: colors.whiteBackground,
//   borderTopLeftRadius: 30,
//   borderTopRightRadius: 30,
//   height: 96,
// }
const $Activate: ImageStyle = {
  tintColor: colors.light.iconActivated
}
