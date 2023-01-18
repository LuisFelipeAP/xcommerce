import React, { createContext, useState } from 'react'

export interface ProductInterface {
  code: string
  name: string
  price: number
  sales: number
  stock: number
}

interface ProductsContextInterface {
  products: ProductInterface[]
  setProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>
  favorites: ProductInterface[]
  setFavorites: React.Dispatch<React.SetStateAction<ProductInterface[]>>
  showFavorites: boolean
  setShowFavorites: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultValue: ProductsContextInterface = {
  products: [],
  setProducts: () => {},
  favorites: [],
  setFavorites: () => {},
  showFavorites: false,
  setShowFavorites: () => {},
}

export const ProductsContext =
  createContext<ProductsContextInterface>(defaultValue)

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductInterface[]>([])
  const [favorites, setFavorites] = useState<ProductInterface[]>([])
  const [showFavorites, setShowFavorites] = useState(false)

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        favorites,
        setFavorites,
        showFavorites,
        setShowFavorites,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
