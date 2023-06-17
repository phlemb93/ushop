
type Item = {
  _id: number,
  title: string,
  category: string,
  description: string,
  color: string,
  price: number,
  images: string []
}

type CartItem = {
  _id: number,
  title: string,
  category: string,
  description: string,
  color: string,
  price: number,
  images: string [],
  quantity: number
}

type CartState = {
  cartItems: CartItem[]
}
  
export type { Item, CartItem, CartState};