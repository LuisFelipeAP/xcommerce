import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { Product } from '../Product'
import {
  Container,
  Content,
  ContentContainer,
  Pagination,
  ProductsBody,
  TitleAndNav,
} from './style'

export function AllProducts() {
  return (
    <Container>
      <TitleAndNav>
        <h2>Todos os produtos</h2>
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
              <tr>
                <Product />
              </tr>
              <tr>
                <Product />
              </tr>
              <tr>
                <Product />
              </tr>
              <tr>
                <Product />
              </tr>
              <tr>
                <Product />
              </tr>
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
