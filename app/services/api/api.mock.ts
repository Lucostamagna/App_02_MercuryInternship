

import MockAdapter from "axios-mock-adapter"
import { api } from "./api"
import img1 from "../../components/images/CardIcon.png"
import img2 from "../../components/images/RestaurantIcon.png"
import img3 from "../../components/images/TravelltIcon.png"
import img4 from "../../components/images/ConstructionIcon.png"
import img5 from "../../components/images/PersonIcon.png"
import { account, transaction } from "../../components/FinanceApp/AccountInterface"

const mock = new MockAdapter(api.apisauce.axiosInstance, { delayResponse: 300 })


mock.onGet("/accounts").reply<account[]>(200, 
   [
    {
      name:"Current Account",
      id: "1234-4567-3456-3456",
      currentBalance: 76451.077,
    },
    {
      name:"Savings",
      id: "1234-4567-3456-9999",
      currentBalance: 12455.0,
    },
    {
      name:"Vacation",
      id: "1234-4567-3456-8888",
      currentBalance: 90.0,
    },
  
  ])

 
const transactions= [
    {
      id: `"Golub" Taxi Transportation`,
      title: `"Golub" Taxi Transportation`,
      date: "20th May, 18:39",
      amount: -345.0,
      coin: "EUR",
      img: img1,
    },
    {
      id: `"Francois" Restaurant Dinner`,
      title: `"Francois" Restaurant Dinner`,
      date: "15th May, 20:56",
      amount: -1158.0,
      coin: "EUR",
      img: img2,
    },
    {
      id: `"AirMax" Travel to Paris`,
      title: `"AirMax" Travel to Paris`,
      date: "14th May, 16:00",
      amount: -813.0,
      coin: "EUR",
      img: img3,
    },
    {
      id: `Construction ltd`,
      title: `Construction ltd`,
      date: "11th May, 09:26",
      amount: 24500.0,
      coin: "USD",
      img: img4,
    },
    {
      id: `Robert Smith`,
      title: `Robert Smith`,
      date: "03rd May, 12:06",
      amount: 11215.0,
      coin: "USD",
      img: img5,
    },
    {
      id: `Construction blue`,
      title: `Construction blue`,
      date: "14th May, 09:26",
      amount: 240.0,
      coin: "USD",
      img: img4,
    },
    {
      id: `Lucia Smith`,
      title: `Lucia Smith`,
      date: "03rd May, 12:06",
      amount: -15.0,
      coin: "USD",
      img: img5,
    },
    {
      id: `Lucia Costamagna`,
      title: `Lucia Costamagna`,
      date: "03rd May, 10:06",
      amount: -1005.0,
      coin: "USD",
      img: img5,
    },
    {
      id: `"AirMax" Travel to France`,
      title: `"AirMax" Travel to France`,
      date: "14th May, 16:00",
      amount: 913.0,
      coin: "EUR",
      img: img3,
    },
    {
      id: `"Golu" Taxi Transportation`,
      title: `"Golu" Taxi Transportation`,
      date: "20th May, 18:39",
      amount: 8345.0,
      coin: "EUR",
      img: img1,
    },
    {
      id: `"Go" Taxi Transportation`,
      title: `"Go" Taxi Transportation`,
      date: "20th May, 18:39",
      amount: -6.0,
      coin: "EUR",
      img: img1,
    },
    {
      id: `"Francis" Restaurant Dinner`,
      title: `"Francis" Restaurant Dinner`,
      date: "15th May, 20:56",
      amount: 158.0,
      coin: "EUR",
      img: img2,
    },
    {
      id: `"Federica" Restaurant Lunch`,
      title: `"Federica" Restaurant Lunch`,
      date: "15th May, 20:56",
      amount: 1158.0,
      coin: "USD",
      img: img2,
    },
    {
      id: `Construction Cat`,
      title: `Construction Cat`,
      date: "11th May, 09:26",
      amount: 2400.0,
      coin: "USD",
      img: img4,
    },
    {
      id: `"Air" Travel to Roma`,
      title: `"Air" Travel to Roma`,
      date: "14th May, 16:00",
      amount: 913.0,
      coin: "EUR",
      img: img3,
    },
    {
      id: `"Go" Card Transportation`,
      title: `"Go" Card Transportation`,
      date: "20th May, 18:39",
      amount: -345.0,
      coin: "EUR",
      img: img1,
    },
    {
      id: `Emma Sloth`,
      title: `Emma Sloth`,
      date: "03rd May, 10:06",
      amount: 9875.0,
      coin: "USD",
      img: img5,
    }, {
      id: `Lucia Swin`,
      title: `Lucia Swin`,
      date: "03rd May, 10:06",
      amount: 1005.0,
      coin: "USD",
      img: img5,
    },
  ]
 
  let accountTransactionsCounters = {
    [0]: 1,
    [1]: 1,
    [2]: 1,
    [3]: 1,
    [4]: transactions.length
  }
  
const MAX_TRANSACTIONS = 5;

mock.onGet(/\/accounts\/\d+\/transactions/).reply(config => {
    const [, id] = config.url.match(/\/accounts\/(\d+)\/transactions/)
    
    if (!id || isNaN(id)) {
        return [400, {error: 'Invalid account id'}];
    }
   

    const res = Number(id)=== 4 ? transactions : transactions.slice(-Math.min(accountTransactionsCounters[id]++, MAX_TRANSACTIONS))
    return [200, res]
});