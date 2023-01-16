import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../context/searchContext';
import { Product } from '../Product'
import {
  Container,
  Content,
  ContentContainer,
  NothingRegistered,
  Pagination,
  ProductsBody,
  TitleAndNav,
} from './style'

export function AllProducts() {
  const { searchTerm, filteredList, setFilteredList } = useContext(SearchContext);

  const [products, setProducts] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)

  const maxPages = Math.ceil(products.length / postsPerPage);

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage

  const currentPosts = products.slice(firstPostIndex, lastPostIndex)

  const filteredPosts = filteredList.slice(firstPostIndex, lastPostIndex)

  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((json) => setProducts(json.products))
  }, [products])

  useEffect(() => {
    setFilteredList(
      products.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, setFilteredList]);

  function RenderProduct() {
    return (
      <>
        {
          filteredList
            ? (
              <>
                {filteredPosts.map(product => (
                  <>
                    <tr key={product.code}>
                      <Product
                        code={product.code}
                        name={product.name}
                        stock={product.stock}
                        price={product.price}
                        sales={product.sales}
                      />
                    </tr>
                  </>
                ))}
              </>
            )
            : (
              <>
                {currentPosts.map(product => (
                  <>
                    <tr key={product.code}>
                      <Product
                        code={product.code}
                        name={product.name}
                        stock={product.stock}
                        price={product.price}
                        sales={product.sales}
                      />
                    </tr>
                  </>
                ))}
              </>
            )
        }
        {
          filteredList.length > 0 || 
          currentPosts.length > 0 && 
          <NothingRegistered>
            Nenhum produto encontrado. Cadastre um novo produto!
          </NothingRegistered>
        }
      </>
    )
  }

  return (
    <Container>
      <TitleAndNav>
        <h2>Todos os produtos</h2>
        <div>
          <ArrowLeftIcon onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)} width="20" height="20" style={currentPage === 1 ? {opacity: 0.5, pointerEvents: 'none'} : {}} />
          <ArrowRightIcon onClick={() => currentPage !== maxPages && setCurrentPage(currentPage + 1)} width="20" height="20" style={currentPage === maxPages ? {opacity: 0.5, pointerEvents: 'none'} : {}} />
        </div>
      </TitleAndNav>

      <ContentContainer>
        <Content>
          <ProductsBody>
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    width: '374px',
                  }}
                >
                  Identificação
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    width: '105px',
                  }}
                >
                  Preço
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    width: '137px',
                  }}
                >
                  Vendas
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    width: '75px',
                  }}
                >
                  Estoque
                </th>
                <th style={{ visibility: 'hidden' }}>Favoritos</th>
              </tr>
            </thead>

            <tbody>
              <RenderProduct />
            </tbody>
          </ProductsBody>
        </Content>
        <Pagination>
          <span>Página {currentPage} de {maxPages}</span>
        </Pagination>
      </ContentContainer>
    </Container>
  )
}
