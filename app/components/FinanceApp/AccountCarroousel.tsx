import React from "react"
import { account } from "./AccountInterface"
import { FlatList } from "react-native"
import AccountCard from "./AccountCard"
import { SafeAreaView } from "react-native-safe-area-context"

interface AccountProp {
  accounts: account[]
}
interface Render {
  item: account
}

const AccountCarroousel = ({ accounts }: AccountProp) => {
  const renderItem = ({ item: account }: Render) => <AccountCard accountData={account} />
  return (
    <SafeAreaView>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={accounts}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

export default AccountCarroousel
