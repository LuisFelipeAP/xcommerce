import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../context/productContext'
import { FilteredProductComponent } from '../FilteredProductComponent'
import {
  Container,
  Content,
  ContentContainer,
  Pagination,
  TitleAndNav,
} from './style'

export function FilterSection() {
  const { products } = useContext(ProductsContext)

  const [filterType, setFilterType] = useState('Mais vendidos')
  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
    sortProducts(filterType)
  }, [filterType, products])

  function sortProducts(filterType) {
    const sortedProducts = [...products]
    switch (filterType) {
      case 'Mais caros':
        sortedProducts.sort((a, b) => b.price - a.price)
        break
      case 'Mais baratos':
        sortedProducts.sort((a, b) => a.price - b.price)
        break
      case 'Mais vendidos':
        sortedProducts.sort((a, b) => b.sales - a.sales)
        break
      case 'Menos vendidos':
        sortedProducts.sort((a, b) => a.sales - b.sales)
        break
      default:
        break
    }
    setFilteredProducts(sortedProducts)
  }

  const handleFilterChange = (event) => {
    setFilterType(event.target.value)
  }

  return (
    <Container>
      <TitleAndNav>
        <select value={filterType} onChange={handleFilterChange}>
          <option value="Mais caros">Mais caros</option>
          <option value="Mais baratos">Mais baratos</option>
          <option value="Mais vendidos">Mais vendidos</option>
          <option value="Menos vendidos">Menos vendidos</option>
        </select>

        <div>
          <ArrowLeftIcon width="20" height="20" />
          <ArrowRightIcon width="20" height="20" />
        </div>
      </TitleAndNav>

      <ContentContainer>
        <Content>
          {filteredProducts.map((product) => (
            <FilteredProductComponent key={product.code} {...product} />
          ))}
        </Content>
        <Pagination>
          <span>Página 1 de 10</span>
        </Pagination>
      </ContentContainer>
    </Container>
  )
}
