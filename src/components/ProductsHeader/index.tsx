import React, { useContext } from 'react'
import {
  Button,
  Container,
  Input,
  LabelAndSearchBar,
  MainNav,
  NavContainer,
  PageLabel,
  SearchField,
  SeparatorRoot,
} from './style'
import { CrossCircledIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Modal } from '../Modal'
import { SearchContext } from '../../context/searchContext'

export function ProductsHeader() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }
  
  return (
    <Container>
      <LabelAndSearchBar>
        <PageLabel>Produtos</PageLabel>
        <SearchField htmlFor="searchBar">
          <MagnifyingGlassIcon width="24" height="24" />
          <Input
            value={searchTerm}
            type="text"
            id="searchBar"
            placeholder="Buscar por produtos"
            onChange={handleSearch}
          />
          {searchTerm && (
            <CrossCircledIcon
              width={24}
              height={24}
              style={{ marginLeft: 'auto', color: '#f75a68' }}
              onClick={() => {
                setSearchTerm('')
              }}
            />
          )}
        </SearchField>
      </LabelAndSearchBar>

      <SeparatorRoot
        decorative
        orientation="horizontal"
        css={{ margin: '0 auto' }}
      />

      <NavContainer>
        <MainNav>
          <Button>Todas</Button>
          <Button css={{ backgroundColor: 'rgba(211, 40, 17, 0.5)' }}>
            Favoritos
          </Button>
        </MainNav>

        <Modal />
      </NavContainer>
    </Container>
  )
}
