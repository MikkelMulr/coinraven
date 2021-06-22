export const tokens = 
   [
    {id: 1, name: "Doge Coin", symbole: "DOGE", price: 0.1952, logo: "some url", desc: "woof woof"},
    {id: 2, name: "Etherium", symbole: "ETH", price: 1.954, logo: "some url", desc: "Not bitcoin"},
    {id: 3, name: "Bitcoin", symbole: "BTC", price: 32524, logo: "some url", desc: "woof woof"},
    {id: 4, name: "Litecoin", symbole: "LIT", price: 2.456, logo: "some url", desc: "woof woof"},
    {id: 5, name: "CumRocket", symbole: "CUM", price: 69.420, logo: "some url", desc: "woof woof"},
    {id: 6, name: "Poocoin", symbole: "POO", price: 9.009, logo: "some url", desc: "woof woof"},
  ]


export function findCoin(symbole) {
  return tokens.find(token => token.symbole === symbole);
}