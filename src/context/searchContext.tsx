import React, { createContext, useState } from 'react'
import { ProductInterface } from './productContext'

export interface SearchContextInterface {
  searchTerm: string
  filteredList: any[]
  setSearchTerm: (searchTerm: string) => void
  setFilteredList: React.Dispatch<React.SetStateAction<ProductInterface[]>>
}

export const SearchContext = createContext<SearchContextInterface>({
  searchTerm: '',
  filteredList: [],
  setSearchTerm: () => {},
  setFilteredList: () => {},
})

export const SearchContextProvider = ({ children }: any) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredList, setFilteredList] = useState<ProductInterface[]>([])

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        filteredList,
        setSearchTerm,
        setFilteredList,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
