import React, {useState} from "react";
import { account } from './AccountInterface';
import { Dimensions, FlatList, View } from 'react-native';
import AccountCard from "./AccountCard";


interface AccountProp{
    accounts: account[]
}
interface Render{
    item:account
}

const { width } = Dimensions.get("screen")


const AccountCarroousel = ({accounts}:AccountProp) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const renderItem = ({ item: account }:Render) => <AccountCard accountData={account} />
    return (
    <View>
<FlatList
showsHorizontalScrollIndicator={false}

horizontal={true}
data={accounts}
renderItem={renderItem}




/>
    </View>
  )
}

export default AccountCarroousel

