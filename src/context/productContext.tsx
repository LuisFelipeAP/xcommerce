import React, { createContext, useState } from 'react'

export interface ProductInterface {
  code: string
  name: string
  price: number
  sales: number
  stock: number
}

export interface ProductsContextInterface {
  products: ProductInterface[]
  setProducts: (newProducts: ProductInterface[]) => void
  favorites: string[]
  setFavorites: (newFavorites: string[]) => void
  showFavorites: boolean
  setShowFavorites: (newValue: boolean) => void
}

export const ProductsContext = createContext<ProductsContextInterface>({
  products: [],
  setProducts: () => {},
  favorites: [],
  setFavorites: () => {},
  showFavorites: false,
  setShowFavorites: () => {},
})

export const ProductsProvider = ({ children }: any) => {
  const [products, setProducts] = useState<ProductInterface[]>([])
  const [favorites, setFavorites] = useState<string[]>([])
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
