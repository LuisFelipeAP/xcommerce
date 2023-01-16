import React, { createContext, useState } from 'react'

export interface SearchContextInterface {
  searchTerm: string
  filteredList: any[]
  setSearchTerm: (searchTerm: string) => void
  setFilteredList: React.Dispatch<React.SetStateAction<any[]>>
}

export const SearchContext = createContext<SearchContextInterface>({
  searchTerm: '',
  filteredList: [],
  setSearchTerm: () => {},
  setFilteredList: () => {},
})

export const SearchContextProvider = ({ children }: any) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredList, setFilteredList] = useState([])

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
