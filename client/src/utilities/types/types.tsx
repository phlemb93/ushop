import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../data/store"

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


export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
  
export type { Item, CartItem, CartState};