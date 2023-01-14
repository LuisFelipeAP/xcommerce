import React from 'react'
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
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Modal } from '../Modal'

export function ProductsHeader() {
  return (
    <Container>
      <LabelAndSearchBar>
        <PageLabel>Produtos</PageLabel>
        <SearchField htmlFor="searchBar">
          <MagnifyingGlassIcon width="24" height="24" />
          <Input type="text" id="searchBar" placeholder="Buscar por produtos" />
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
