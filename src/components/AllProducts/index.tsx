import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
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
  // const [products, setProducts] = useState({})

  const products = [
    
    {
      "name": "Iphone 14",
      "code": "MLB123456",
      "sales": 30,
      "price": 8000,
      "stock": 3,
    },
    {
      "name": "Iphone 14",
      "code": "MLB123456",
      "sales": 30,
      "price": 8000,
      "stock": 3,
    },
    {
      "name": "Iphone 14",
      "code": "MLB123456",
      "sales": 30,
      "price": 8000,
      "stock": 3,
    },
    
    {
      "name": "Iphone 14",
      "code": "MLB123456",
      "sales": 30,
      "price": 8000,
      "stock": 3,
    },
    {
      "name": "Iphone 14",
      "code": "MLB123456",
      "sales": 30,
      "price": 8000,
      "stock": 3,
    },
  ]

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
              {!products ? (
                <NothingRegistered>
                  Nenhum produto encontrado. Crie um novo produto!
                </NothingRegistered>
              ) : (
                <>
                  {products.map(product => {
                    return (
                      <tr>
                        <Product
                          key={product.code}
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
              )}
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
