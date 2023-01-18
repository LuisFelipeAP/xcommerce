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

  function sortProducts(filterType: string) {
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

  const handleFilterChange = (event: any) => {
    setFilterType(event.target.value)
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

  const maxPages = Math.ceil(filteredProducts.length / postsPerPage)

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage

  const currentPosts = filteredProducts.slice(firstPostIndex, lastPostIndex)

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
          <ArrowLeftIcon
            onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}
            width="20"
            height="20"
            style={
              currentPage === 1 ? { opacity: 0.5, pointerEvents: 'none' } : {}
            }
          />
          <ArrowRightIcon
            onClick={() =>
              currentPage !== maxPages && setCurrentPage(currentPage + 1)
            }
            width="20"
            height="20"
            style={
              currentPage === maxPages
                ? { opacity: 0.5, pointerEvents: 'none' }
                : {}
            }
          />
        </div>
      </TitleAndNav>

      <ContentContainer>
        <Content>
          {currentPosts.map((product) => (
            <FilteredProductComponent key={product.code} {...product} />
          ))}
        </Content>
        <Pagination>
          <span>
            Página {currentPage} de {maxPages}
          </span>
        </Pagination>
      </ContentContainer>
    </Container>
  )
}
