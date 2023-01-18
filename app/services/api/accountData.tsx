
import axios from "axios"
import MockAdapter from "axios-mock-adapter"

import img1 from "../../components/images/CardIcon.png"
import img2 from "../../components/images/RestaurantIcon.png"
import img3 from "../../components/images/TravelltIcon.png"
import img4 from "../../components/images/ConstructionIcon.png"
import img5 from "../../components/images/PersonIcon.png"

const mock = new MockAdapter(axios)
mock.onGet("/accounts").reply(200, {
  accounts: [
    {
      id: "1234-4567-3456-3456",
      currentBalance: 76451.0,
    },
    {
      id: "1234-4567-3456-9999",
      currentBalance: 12455.0,
    },
    {
      id: "1234-4567-3456-8888",
      currentBalance: 90.0,
    },
    {
      id: "1234-4567-3456-7777",
      currentBalance: 51200.5,
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
      img: img1
    },
    {
      id: `"Francois" Restaurant Dinner`,
      title: `"Francois" Restaurant Dinner`,
      date: "15th May, 20:56",
      amount: -1158.0,
      coin: "EUR",
      img: img2
    },
    {
      id: `"AirMax" Travel to Paris`,
      title: `"AirMax" Travel to Paris`,
      date: "14th May, 16:00",
      amount: -813.0,
      coin: "EUR",
      img: img3
    },
    {
      id: `Construction ltd`,
      title: `Construction ltd`,
      date: "11th May, 09:26",
      amount: 24500.0,
      coin: "USD",
      img: img4
    },
    {
      id: `Robert Smith`,
      title: `Robert Smith`,
      date: "03rd May, 12:06",
      amount: 11215.0,
      coin: "USD",
      img: img5
    },
  ],
})
