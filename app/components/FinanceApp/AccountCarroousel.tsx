import React, {useState} from "react"
import { account } from "./AccountInterface"
import { FlatList, Dimensions, View, Image, ViewStyle } from 'react-native';
import AccountCard from "./AccountCard"
import { SafeAreaView } from "react-native-safe-area-context"

interface AccountProp {
  accounts: account[]
}
interface Render {
  item: account
}

const { width } = Dimensions.get("screen")
const AccountCarroousel = ({ accounts }: AccountProp) => {
  

  const renderItem = ({ item: account }: Render) => <AccountCard accountData={account} />
  return (

    <SafeAreaView>
    
      <FlatList
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 30}
        decelerationRate="fast"
        horizontal={true}
        data={accounts}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

export default AccountCarroousel

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
  width: "12%",
  
}
