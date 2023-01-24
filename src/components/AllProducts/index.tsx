import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { useContext, useEffect, useState } from 'react'
import { ProductInterface, ProductsContext } from '../../context/productContext'
import { SearchContext } from '../../context/searchContext'
import { MobileProducts } from '../MobileProducts'
import { ProductComponent } from '../ProductComponent'
import {
  Container,
  Content,
  ContentContainer,
  NothingRegistered,
  Pagination,
  ProductsBody,
  ProductsMobile,
  TitleAndNav,
} from './style'

export function AllProducts() {
  const { searchTerm, filteredList, setFilteredList } =
    useContext(SearchContext)

  const { products, setProducts } = useContext(ProductsContext)

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)

  const maxPages = Math.ceil(products.length / postsPerPage)

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage

  const currentPosts = products.slice(firstPostIndex, lastPostIndex)

  const filteredPosts = filteredList.slice(firstPostIndex, lastPostIndex)
  const filteredPages = Math.ceil(filteredPosts.length / postsPerPage)

  const handleSearch = (searchTerm: string) => {
    setCurrentPage(1)
    setFilteredList(
      products.filter((product: ProductInterface) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    )
  }

  useEffect(() => {
    handleSearch(searchTerm)
  }, [products, searchTerm])

  function fetchData() {
    fetch('/api/products')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        setProducts(json.products)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  function RenderProduct() {
    return (
      <>
        {filteredList ? (
          <>
            {filteredPosts.map((product: ProductInterface) => (
              <>
                <tr key={product.code}>
                  <ProductComponent
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
        ) : (
          <>
            {currentPosts.map((product: ProductInterface) => (
              <>
                <tr key={product.code}>
                  <ProductComponent
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
        )}
        {filteredList.length > 0 ||
          (currentPosts.length > 0 && (
            <NothingRegistered>
              Nenhum produto encontrado. Cadastre um novo produto!
            </NothingRegistered>
          ))}
      </>
    )
  }

  function RenderMobileProduct() {
    return (
      <>
        {filteredList && (
          <>
            {filteredList.map((product: ProductInterface) => (
              <div key={product.code}>
                <MobileProducts
                  code={product.code}
                  name={product.name}
                  stock={product.stock}
                  price={product.price}
                  sales={product.sales}
                />
              </div>
            ))}
          </>
        )}
        {filteredList.length > 0 ||
          (currentPosts.length > 0 && (
            <NothingRegistered>
              Nenhum produto encontrado. Cadastre um novo produto!
            </NothingRegistered>
          ))}
      </>
    )
  }

  return (
    <Container>
      <TitleAndNav>
        <h2>Todos os produtos</h2>
        <div>
          {searchTerm ? (
            <>
              <ArrowLeftIcon
                onClick={() =>
                  currentPage !== 1 && setCurrentPage(currentPage - 1)
                }
                width="20"
                height="20"
                style={
                  currentPage === 1
                    ? { opacity: 0.5, pointerEvents: 'none' }
                    : {}
                }
              />
              <ArrowRightIcon
                onClick={() =>
                  currentPage !== filteredPages &&
                  setCurrentPage(currentPage + 1)
                }
                width="20"
                height="20"
                style={
                  currentPage === filteredPages
                    ? { opacity: 0.5, pointerEvents: 'none' }
                    : {}
                }
              />
            </>
          ) : (
            <>
              <ArrowLeftIcon
                onClick={() =>
                  currentPage !== 1 && setCurrentPage(currentPage - 1)
                }
                width="20"
                height="20"
                style={
                  currentPage === 1
                    ? { opacity: 0.5, pointerEvents: 'none' }
                    : {}
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
            </>
          )}
        </div>
      </TitleAndNav>

      <ContentContainer>
        <Content>
          <ProductsMobile>
            <RenderMobileProduct />
          </ProductsMobile>
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
          {filteredList.length < 1 || currentPosts.length < 1 ? (
            <span>
              Página {currentPage} de {filteredPages || 1}
            </span>
          ) : searchTerm ? (
            <span>
              Página {currentPage} de {filteredPages}
            </span>
          ) : (
            <span>
              Página {currentPage} de {maxPages}
            </span>
          )}
        </Pagination>
      </ContentContainer>
    </Container>
  )
}
