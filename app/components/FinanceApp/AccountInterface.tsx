
export interface account {
  id: string 
  currentBalance: number | string
  name:string
 
}

export interface transaction {
  id: string
  title: string
  date: string
  amount: number
  coin: string
  img: any
}




