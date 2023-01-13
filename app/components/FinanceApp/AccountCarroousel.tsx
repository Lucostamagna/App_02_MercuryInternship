import React, { useState } from "react"
import { account } from "./AccountInterface"
import {
  FlatList,
  Dimensions,
  ViewStyle,
  NativeSyntheticEvent,
  NativeScrollEvent,
  View,
  Image,
} from "react-native"
import AccountCard from "./AccountCard"
import { spacing } from "../../theme"
import active from "../images/active.png"
import inactive from "../images/inactive.png"

interface AccountProp {
  accounts: account[]
}
interface AccountRender {
  item: account
}

const { width } = Dimensions.get("screen")
const AccountCarroousel = ({ accounts }: AccountProp) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const onMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.ceil(event.nativeEvent.contentOffset.x / (width - 30))
    setCurrentIndex(index)
  }

  const renderItem = ({ item: account }: AccountRender) => <AccountCard accountData={account} />

  return (
    <View style={$container}>
      <View style={$dotsContainer}>
        <View style={$dots}>
          {accounts.map((acc, index) => {
            return <Image source={index === currentIndex ? active : inactive} key={index}></Image>
          })}
        </View>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 30}
        decelerationRate="fast"
        horizontal={true}
        data={accounts}
        renderItem={renderItem}
        onMomentumScrollEnd={onMomentumScrollEnd}
        keyExtractor={(account) => account.id}
      />
    </View>
  )
}

export default AccountCarroousel

const $container: ViewStyle = {
  marginBottom: spacing.medium,
}
const $dotsContainer: ViewStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
}

const $dots: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "15%",
  paddingBottom: spacing.large,
}
