import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
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
  const [products, setProducts] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)

  const maxPages = Math.ceil( products.length / postsPerPage );

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage

  const currentPosts = products.slice(firstPostIndex, lastPostIndex)

  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((json) => setProducts(json.products))
  }, [products])

  return (
    <Container>
      <TitleAndNav>
        <h2>Todos os produtos</h2>
        <div>
          <ArrowLeftIcon onClick={() => setCurrentPage(currentPage - 1)} width="20" height="20" />
          <ArrowRightIcon onClick={() => setCurrentPage(currentPage + 1)} width="20" height="20" />
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
              {products.length > 0 ? (
                <>
                  {currentPosts.map((product) => {
                    return (
                      <tr key={product.code}>
                        <Product
                          code={product.code}
                          name={product.name}
                          stock={product.stock}
                          price={product.price}
                          sales={product.sales}
                        />
                      </tr>
                    )
                  })}
                </>
              ) : (
                <NothingRegistered>
                  Nenhum produto encontrado. Cadastre um novo produto!
                </NothingRegistered>
              )}
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
