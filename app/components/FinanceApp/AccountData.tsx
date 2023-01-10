// import React, {useState} from "react";
// import axios from "axios";
// import MockAdapter from "axios-mock-adapter"

// import { useEffect } from 'react';
// import { account, transaction } from "./AccountInterface";
// import { View } from "react-native";







// const mock = new MockAdapter(axios)

// mock.onGet("/accounts").reply(200, {
//   account: [
//     {
//       id: "1234-4567-3456-3456",
//       currentBalance: 76451.0,
//     },
//     {
//         id: "1234-4567-3456-3456",
//         currentBalance: 76451.0,
//     },
//     {
//         id: "1234-4567-3456-3456",
//         currentBalance: 76451.0,
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
      
//     },
//     {
//       id: `"Francois" Restaurant Dinner`,
//       title: `"Francois" Restaurant Dinner`,
//       date: "15th May, 20:56",
//       amount: -1158.0,
//       coin: "EUR",
      
//     },
//     {
//       id: `"AirMax" Travel to Paris`,
//       title: `"AirMax" Travel to Paris`,
//       date: "14th May, 16:00",
//       amount: -813.0,
//       coin: "EUR",
      
//     },
//     {
//       id: `Construction ltd`,
//       title: `Construction ltd`,
//       date: "11th May, 09:26",
//       amount: 24500.0,
//       coin: "USD",
      
//     },
//     {
//       id: `Robert Smith`,
//       title: `Robert Smith`,
//       date: "03rd May, 12:06",
//       amount: 11215.0,
//       coin: "USD",
      
//     },
//   ],
// })
// export function AccountHistory() {
//   const [accounts, setAccounts] = useState<account[]>([])
//   const [transactions, setTransactions] = useState<transaction[]>([])

  

//   useEffect(() => {
//     try {
//       ;(async () => {
//         const responseAccounts = await axios.get("/accounts")
//         const responseTransactions = await axios.get("/transactions")
//         setAccounts(responseAccounts.data.accounts)
//         setTransactions(responseTransactions.data.transactions)
//       })()
//     } catch (error) {
//       console.log(error)
//     }
//   }, [])
//   return(
//     <View>

//     </View>
//   )
// }