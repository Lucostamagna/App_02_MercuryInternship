import React, { useState } from "react"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import { useEffect } from "react"
import { View } from "react-native"
import Img2 from ""
import Img3 from "../images/RestaurantIcon.png"
import Img4 from "../images/TravelltIcon.png"
import Img5 from "../images/ConstructionIcon.png"
import Img6 from "../images/PersonIcon.png"



export interface account {
  id: string
  currentBalance: number
}

export interface transaction {
  id: string
  title: string
  date: string
  amount: number
  coin: string
  img: any
}
const mock = new MockAdapter(axios)

mock.onGet("/accounts").reply(200, {
  account: [
    {
      id: "1234-4567-3456-3456",
      currentBalance: 76451.0,
    },
    {
      id: "1234-4567-3456-3456",
      currentBalance: 76451.0,
    },
    {
      id: "1234-4567-3456-3456",
      currentBalance: 76451.0,
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
      img: Img2,
    },
    {
      id: `"Francois" Restaurant Dinner`,
      title: `"Francois" Restaurant Dinner`,
      date: "15th May, 20:56",
      amount: -1158.0,
      coin: "EUR",
      img:Img3
    },
    {
      id: `"AirMax" Travel to Paris`,
      title: `"AirMax" Travel to Paris`,
      date: "14th May, 16:00",
      amount: -813.0,
      coin: "EUR",
      img:Img4
    },
    {
      id: `Construction ltd`,
      title: `Construction ltd`,
      date: "11th May, 09:26",
      amount: 24500.0,
      coin: "USD",
      img:Img5
    },
    {
      id: `Robert Smith`,
      title: `Robert Smith`,
      date: "03rd May, 12:06",
      amount: 11215.0,
      coin: "USD",
      img:Img6
    },
  ],
})
export function Data() {
  const [accounts, setAccounts] = useState<account[]>([])
  const [transactions, setTransactions] = useState<transaction[]>([])

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
  
}
