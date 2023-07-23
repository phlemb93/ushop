import { createContext, useContext, useState } from "react";
import useUrlArray from "../hooks/useUrlArray";
import { Item } from "../types/types";

type ProductsContextProps = {
    children: React.ReactNode
}

type Value = {
    allProducts: Item [] | null
    isLoading: boolean
    limitProducts: Item [] | null
    limitNum: number
    setNewLimit: () => void
    setNewCat: (val: string) => void
}

const ProductsContext = createContext({} as Value)

export const useProductsContext = () => {
    return useContext(ProductsContext);
}

export const ProductsContextProvider = ({ children }:  ProductsContextProps) => {

    const [limitNum, setLimitNum] = useState(8);
    const [cat, setCat] = useState('')
    
    const normalUrl = `https://ushop-mern-api.vercel.app/api/products?category=${cat}`;
    const filteredUrl = `https://ushop-mern-api.vercel.app/api/products?category=${cat}&limit=${limitNum}`;
    
    const { data: allProducts, isLoading } = useUrlArray(normalUrl);
    const { data: limitProducts } = useUrlArray(filteredUrl);
        
    const setNewLimit = () => {
        setLimitNum(prevVal => prevVal + 8)
    }
    const setNewCat = (val: string) => {
        setCat(val)
    }

   return (
    <ProductsContext.Provider value={{ allProducts, isLoading, limitProducts, limitNum, setNewLimit, setNewCat }}>
        { children }
    </ProductsContext.Provider>
   ) 
}