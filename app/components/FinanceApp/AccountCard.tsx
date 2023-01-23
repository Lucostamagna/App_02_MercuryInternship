import React from "react"
import {
  Dimensions,
  View,
  ViewStyle,
  useColorScheme,
  TextStyle,
  Pressable,
  Image,
} from "react-native"
import { colors, spacing, typography } from "../../theme"
import { Text } from "../Text"
import { account } from "./AccountInterface"

interface AccountCardProps {
  accountData: account
}
const { width } = Dimensions.get("screen")

const AccountCard = ({ accountData }: AccountCardProps) => {
  const theme = useColorScheme()

  return (
    <View style={{ ...$cardContainer, backgroundColor: colors[theme].cardBackground }}>
      <View style={$sectionContainer}>
        <View>
          <Text style={{ ...$cardTitle, color: colors[theme].text }}>{accountData.name}</Text>
          <Text style={{ ...$cardId, color: colors[theme].description }}>{accountData.id}</Text>
        </View>
        <View style={$logoContainer}>
          {/* Pressable doesn't add the opacity animation on press */}
          <Pressable style={$logo}>
            <Image resizeMode="cover" source={require("../images/dot.png")}></Image>
          </Pressable>
        </View>
      </View>
      <View style={$currencyContainer}>
        <View style={$currencyContainer2}>
          <Text style={$EURcontainer}> EUR</Text>
        </View>

        <Text style={{ ...$USAGBPcontainer, color: colors[theme].description }}>USD</Text>
        <Text style={{ ...$USAGBPcontainer, color: colors[theme].description }}>GBP</Text>
      </View>
      <View>
        <Text style={{ ...$balanceAccount, color: colors[theme].text }}>
          {" "}
          {accountData.currentBalance}
        </Text>
        <Text style={{ ...$descriptionText, color: colors[theme].text }}>Current Balance</Text>
      </View>
    </View>
  )
}

export default AccountCard
export const ACCOUNT_CARD_HORIZONTAL_MARGIN = 15
export const ACCOUNT_CARD_HORIZONTAL_PADDING = 15
export const NECCESARY_MAGIC_NUMBER = 60

const $cardContainer: ViewStyle = {
  backgroundColor: "#FFFFFF",
  paddingHorizontal: ACCOUNT_CARD_HORIZONTAL_PADDING,
  paddingTop: spacing.small,
  paddingBottom: spacing.tiny,
  marginHorizontal: ACCOUNT_CARD_HORIZONTAL_MARGIN,
  width: width - NECCESARY_MAGIC_NUMBER,
  borderRadius: 25,
}
const $cardTitle: TextStyle = {
  fontFamily: typography.primary.bold,
  fontSize: 22,
  marginBottom: spacing.tiny,
  marginTop: -4,
}
const $cardId: TextStyle = {
  fontFamily: typography.primary.semiBold,
  fontSize: 12,

  marginBottom: 10,
}
const $logo: ViewStyle = {
  width: 40,
  height: 40,
  borderRadius: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}
const $logoContainer: ViewStyle = {
  backgroundColor: colors.orangeBackground,
  width: 40,
  height: 40,

  borderRadius: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}
const $sectionContainer: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}
const $currencyContainer: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}
const $currencyContainer2: ViewStyle = {
  backgroundColor: colors.violetBackground,
  borderRadius: 8,
  width: 45,
  height: 25,
  marginRight: spacing.large,
}

const $EURcontainer: TextStyle = {
  fontFamily: typography.primary.semiBold,
  fontSize: 12,
  textAlign: "center",
  color: colors.CardActivatedText,
}
const $USAGBPcontainer: TextStyle = {
  fontFamily: typography.primary.semiBold,
  fontSize: 12,
  marginRight: spacing.large,
}
const $balanceAccount: TextStyle = {
  fontFamily: typography.primary.bold,
  lineHeight: 41,
  fontSize: 34,
  paddingTop: 25,
}
const $descriptionText: TextStyle = {
  fontSize: 15,
}
