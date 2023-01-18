import Image from 'next/image'
import { Container, ImageContainer, InfoContainer } from './style'
import ProductImage from '../../assets/product.jpg'
import { ProductInterface } from '../../context/productContext'

export function FilteredProductComponent({
  name,
  price,
  sales,
}: ProductInterface) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const formattedPrice = formatter.format(price)
  const boldPrice = formattedPrice.toString().substring(3)

  return (
    <Container>
      <ImageContainer>
        <Image alt="Imagem do produto" src={ProductImage} />
      </ImageContainer>
      <InfoContainer>
        <span>
          R$ <strong>{boldPrice}</strong>
        </span>
        <span>{sales < 2 ? `${sales} venda` : `${sales} vendas`}</span>
      </InfoContainer>
      <h3>{name.length > 18 ? name.substring(0, 18) + ' (...)' : name}</h3>
    </Container>
  )
}
