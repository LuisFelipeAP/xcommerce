import Image from 'next/image'
import {
  Container,
  Favorite,
  Identification,
  ImageContainer,
  InfoContainer,
  PriceAndSales,
  InnerContainer,
  Stock,
} from './style'
import ProductImage from '../../assets/product.jpg'
import { ProductInterface, ProductsContext } from '../../context/productContext'
import { useContext } from 'react'
import { FilledHeartIcon } from '../FilledHeartIcon'
import { EmptyHeartIcon } from '../EmptyHeartIcon'

export function MobileProducts({
  code,
  name,
  price,
  sales,
  stock,
}: ProductInterface) {
  const profit = sales * price

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const { favorites, setFavorites } = useContext(ProductsContext)
  const favoriteProduct = favorites.find(
    (product: any) => product.code === code,
  )

  function handleToggleFavorite() {
    if (favoriteProduct) {
      setFavorites(favorites.filter((product) => product !== favoriteProduct))
    } else {
      setFavorites([...favorites, { name, code, sales, price, stock }])
    }
  }

  return (
    <Container>
      <InnerContainer>
        <ImageContainer>
          <Image alt="Imagem do produto" src={ProductImage} />
        </ImageContainer>
        <InfoContainer>
          <Identification>
            <div>
              <h3>{name}</h3>
              <span>#{code}</span>
            </div>
          </Identification>
          <div>
            <PriceAndSales>
              <div>{formatter.format(price)}</div>
              <span>
                {profit > 99999
                  ? `Total de \n${formatter.format(profit)}`
                  : `Total de ${formatter.format(profit)}`}
              </span>
            </PriceAndSales>
            <Stock>
              {stock === 1 ? `${stock} unidade` : `${stock} unidades`}
            </Stock>
            <Favorite>
              {favoriteProduct ? (
                <FilledHeartIcon onClick={handleToggleFavorite} />
              ) : (
                <EmptyHeartIcon onClick={handleToggleFavorite} />
              )}
            </Favorite>
          </div>
        </InfoContainer>
      </InnerContainer>
    </Container>
  )
}
