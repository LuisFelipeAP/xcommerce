import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { useContext } from 'react'
import { ProductInterface, ProductsContext } from '../../context/productContext'
import { ProductComponent } from '../Product'
import {
  Container,
  Content,
  ContentContainer,
  NothingFavorited,
  Pagination,
  ProductsBody,
  TitleAndNav,
} from './style'

export function FavoritesProducts() {
  const { favorites } = useContext(ProductsContext)

  function RenderProduct() {
    return (
      <>
        {favorites.length > 0 ? (
          favorites.map((product: ProductInterface) => {
            return (
              <tr key={product.code}>
                <ProductComponent
                  name={product.name}
                  code={product.code}
                  price={product.price}
                  sales={product.sales}
                  stock={product.stock}
                />
              </tr>
            )
          })
        ) : (
          <NothingFavorited>
            Nenhum produto favoritado. Favorite um produto!
          </NothingFavorited>
        )}
      </>
    )
  }

  return (
    <Container>
      <TitleAndNav>
        <h2>Produtos favoritos</h2>
        <div>
          <ArrowLeftIcon width="20" height="20" />
          <ArrowRightIcon width="20" height="20" />
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
          <span>Página 1 de 10</span>
        </Pagination>
      </ContentContainer>
    </Container>
  )
}
